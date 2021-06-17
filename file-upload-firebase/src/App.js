import { useRef, useState } from "react";
import { db, storage } from "./firebase";
import "./App.css";
function App() {
  const inputFileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (event) => {
      setImage(event.target.result);
    };
  };

  const upload = () => {
    db.collection("posts")
      .add({
        username: "username",
        email: "test@gmail.com",
        // Other docs props
      })
      .then((doc) => {
        if (image) {
          const uploadTask = storage.ref(`images/${doc.id}`).putString(image);
          setImage(null);
          uploadTask.on(
            "state_changed",
            (obs) => {
              // firebase observer
              console.log("State: ", obs.state);
              console.log("Task: ", obs.task);
              console.log("Total Bytes: ", obs.totalBytes);
              console.log("Bytes Transferred: ", obs.bytesTransferred);
              console.log("Ref: ", obs.ref);
              setProgress((obs.bytesTransferred / obs.totalBytes) * 100);
            },
            (error) => {
              // Error handler
              console.error(error);
            },
            () => {
              // complete function
              storage
                .ref(`images`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      imageUrl: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="app">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          upload();
        }}
      >
        {progress && <p>{progress}</p>}
        <input hidden ref={inputFileRef} type="file" onChange={handleChange} />
        <button
          onClick={() => {
            inputFileRef.current.click();
          }}
        >
          Select File
        </button>
        {image && <img className="app__image__preview" src={image} />}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
