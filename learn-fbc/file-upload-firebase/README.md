### Uploading Images on Firebase Cloud Storage.

1. Create a firebase app.
2. Create storage and firestore instance

```js
import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  ...
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = app.storage();

export {
  db,
  storage,
};
```

### Image Preview on the client.

```jsx
import { useRef, useState } from "react";
import "./App.css";
function App() {
  const inputFileRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  return (
    <div className="app">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
```

The following function is the magic function that allows us to select files, and display a preview by setting `image` using `setImage` after the image has been decoded using the `FileReader()` class.

```js
const inputFileRef = useRef(null);
const [image, setImage] = useState(null);
const handleChange = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
  }
  reader.onload = (event) => {
    setImage(event.target.result);
  };
};
```

### Efficiently Uploading Images to Firebase Storage.

- Store the image on the storage with the document `id` to avoid duplicates.

#### How do we do it?

Create a document first, then using that document upload the image in the `.then()` block. We will practically show it in code.

**The upload function:**

```js
const upload = () => {
  console.log("Uploading");

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
```

That's all about uploading the file.
