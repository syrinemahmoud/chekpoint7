import React from 'react';

export default class App extends React.Component {


    componentDidMount(){
    
        setTimeout(()=>{alert("Hello World")}, 2000);
     
     }
     componentWillUnmount(){
        alert("Goodbye !!!");
     }
     render(){
        return(
            <div>
            Sorry 
            </div>
        )
     }
}




















