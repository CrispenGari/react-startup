import React from "react";
import "./App.css";
import { Video } from "./Components";
import axios from "axios";
function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data_ = await axios.get("https://videos-ap.herokuapp.com/v2/post");
      setData(data_.data);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {data.map((data, index) => (
          <Video key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
