import React from 'react'
import "./renderingList.css"

const products = [
   
  { title: 'HTML', isLanguage: false, id: 1 },
  {title: 'CSS', isLanguage: false, id:2},
  { title: 'JavaScript', isLanguage: true, id: 3 },
  {title: 'Node.js', isLanguage: false, id: 4},
  {title: 'React', isLanguage: false, id: 5}
];

  const listItems = products.map( product =>
      <li className='list' key={product.id} style={{ color: product.isLanguage ? 'green  ' : 'black'}} >
       Skill: {product.title}
      </li>
    );

export default function RenderingList() {

 

  return (      
          <>
            <ul>
              <div className="topic">Technology Stack</div>
              <br></br>
              {listItems}            
            </ul>          
          </>         
  )
}
