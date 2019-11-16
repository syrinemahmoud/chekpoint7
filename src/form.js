import React from 'react';

const Form = () => {
    return (
    
            <form>
                 <img src="/syrine.jpg"  style={{borderRadius: 100 , width: 150}}></img>
                 <p></p>
                <label style={{ paddingLeft : 55 }}>  Name : Syrine </label><p></p>
                <label style={{ paddingLeft : 55 }}>  Lastname : Mahmoud </label>
                <p></p>
                <button style={{ paddingLeft : 50 }}> Facebook </button>
                <p></p>
                <button style={{ paddingLeft : 55 }} onClick>Linkedin</button>
                
            </form>
  
  )};

export default Form;