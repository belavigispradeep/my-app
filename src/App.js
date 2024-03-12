
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About Us"/>
      <div className="container my-3 "><TextFrom title = "Enter the text to analyze below"/></div>
    </>
  );
}

export default App;
