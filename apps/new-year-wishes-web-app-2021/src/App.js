import "./App.css";
import { Header, Carousel, Form } from "./Components";
const App = () => {
  return (
    <div className="app">
      <Header />
      <h1>💕 Happy New Year From Crispen Gari 💕 </h1>
      <div className="app__container">
        <Carousel />
        <Form />
      </div>
    </div>
  );
};

console.clear();

export default App;
