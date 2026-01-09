import { useState, useEffect } from "react";

const Keypad = () => {
  const [letters, setLetters] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:3001/letters")
     .then(res => res.json())
     .then(json => {
       setLetters(json);
     })
     console.log("Done fetching");
  },[]);
  return (
    <div className="keypad">
      {letters && letters.map((letter)=>{
        return <div key={letter.key}> {letter.key}</div>
      })}
    </div>
  )
};

export default Keypad;
