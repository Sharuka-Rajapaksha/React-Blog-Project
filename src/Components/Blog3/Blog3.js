import React from 'react'


const user = {
    name: 'Sharuka Rajapaksha',
    position: 'Software Engineer',
    location: 'Finland',
    contact: 'rajapakshasharuka@gmail.com',
    imageUrl: './Images/Sharuka.png',    
    imageSize:300
  };

  

export default function Blog3() {
  return (    
    <>
        <h1>Developer Details:</h1>
        <h2> {user.name} is a {user.position} from {user.location}.</h2>
        <h2>Contact Details: {user.contact}</h2>

        <img src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{width: user.imageSize,height: user.imageSize}}
      />
    </>
  )
}


