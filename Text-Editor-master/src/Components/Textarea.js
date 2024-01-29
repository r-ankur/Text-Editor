import React, { useState } from 'react'

export default function Textarea(props) {
    const [text,setText]=useState('Enter text Here');
    // setText="kdnvrn";

    function toupper(){
        console.log("uper clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase","Success");
    }
    function tolo(){
        console.log("uper clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","Success");
    }
    function clear(){
        console.log("uper clicked");
        let newText="";
        setText(newText);
        props.showAlert("All text Cleared","Success");
    }
    function removeExtraSpace(){
        let newText=text.trim();
        setText(newText);
        props.showAlert("Removed Extra Space","Success");
    }
    

    function onclick(event){
        console.log("on change");
        setText(event.target.value);
        
    }
   
  return (
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>    
        <textarea className="htmlForm-control" onChange={onclick} value={text} id="examplehtmlFormControlTextarea1"  rows="8" cols="150" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <button className="btn btn-primary mx-1"onClick={toupper}>ToUppercase</button>
        <button className="btn btn-primary mx-1"onClick={tolo}>ToLowercase</button>
        <button className="btn btn-primary mx-1"onClick={clear}>Clear Text</button>
        {/* <button className="btn btn-primary mx-1"onClick={copy}>Copy Text</button> */}
        <button className="btn btn-primary mx-1"onClick={removeExtraSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
       <h1>Your Text Summary</h1>
       <p>{text.split(" ").length===1&&text.split(" ")[0].length===0?0:text.split(" ").length} words {text.length} character</p>
       <h2>Preview</h2>
       <p>{text.length===0?"Enter text to preview":text}</p>

    </div>
    </div>
  )
}
