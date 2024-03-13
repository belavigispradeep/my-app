import React,{useState} from "react";


export default function TextFrom(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = () =>{
      let  newText =  text.toLowerCase()
      setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h3>{props.title}</h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-danger mx-4"  onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes per words </p>
    </div>
    </>
  );
}
