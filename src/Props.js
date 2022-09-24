import React from 'react'
function Welcome(Props){

  return (
    <div>
        <h1>Welcome{Props.name} </h1> 
        <h1>usn: {Props.usn} </h1>
    </div>
  )
}

function Props(){
    return(
        <div>
        <Welcome name= " VEERUDADA" usn="4mk19ec027" /> 

          
        </div>


    );
}

export default Props