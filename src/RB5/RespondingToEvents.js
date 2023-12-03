import React from 'react'
import "./respondingToEvents.css"


export default function RespondingToEvents() {
    
        function handleClick() {
          alert('You clicked me!');
        }
   
  return (
    <>
        <br></br>
        <div className="header"> React - Responding To Events</div>
        <br></br>
            <button className='button' onClick={handleClick}>
                Click me!
            </button>
    </>
  )
}
