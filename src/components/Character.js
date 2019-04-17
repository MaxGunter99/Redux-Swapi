import React from "react";

const Character = props => {
  
  return ( 
    <div className='person'>

      <img url={props.character.url}/>
      <p> Name: {props.character.name}</p>
      <p> Birth Year: {props.character.birth_year}</p>
      <p> Eye Color: {props.character.eye_color}</p>
      <p> Hair Color: {props.character.hair_color}</p>
      <p> Skin Color: {props.character.skin_color}</p>
      <p> Mass: {props.character.mass}</p>
      <p> Gender: {props.character.gender}</p>
      
    </div>
  );
};

export default Character;
