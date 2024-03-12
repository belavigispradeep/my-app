import React,{useState} from "react";


export default function TextFrom(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event) =>{
        console.log("onchange called");
        setText(event.target.value);
    };
    
    const [text, setText] = useState("Enter text here");
  return (
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
    </div>
  );
}
