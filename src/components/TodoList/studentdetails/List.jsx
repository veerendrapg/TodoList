import React from 'react'
import {useState} from 'react'
import Form from './Form';

function List() {
    const [toDos, setToDos] =useState([]);
    const addToDo= (toDo) => {
        console.log(toDo);
        const toDosCopy =[...toDos]
        toDosCopy.push(toDo)
        setToDos(toDosCopy)
        console.log(toDosCopy)
    };
const markAsCompleted =(name) =>{
    const idx = toDos.findIndex(toDo => toDo.name === name)
    const toDosCopy = [...toDos];
    toDosCopy[idx].completed= true;
    setToDos(toDosCopy);
}

  return ( 
    <div>
        <div>
           { toDos.map((toDo) => {
            return <p key={toDo.name} onClick={() => markAsCompleted(toDo.name)} className={toDo.completed ? "strike" :""} >{toDo.name}</p>})
           }
        </div>
     <Form addToDoCallback={ addToDo} />
    </div>
  )
}

export default List