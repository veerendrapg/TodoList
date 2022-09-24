import React ,{useState} from 'react'

function Form(props) {
    const [toDo, setToDo] = useState({name:"", completed:false})
    const handleSubmit=(e) =>{
        e.preventDefault();
        props.addToDoCallback(toDo);
        setToDo({ name: "", completed: false});
        
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo.name}
            placeholder='Enter a toDo' onChange={(e) => setToDo({ name: e.target.value,
            completed: false})}/>
            <button>Add</button>
        </form>
    </div>
    )
}

export default Form