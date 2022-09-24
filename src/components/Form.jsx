import React,{ useState } from "react"
function Form()
{
    const [name, setName] = useState('veer');
    const [Email, setEmail] = useState('Email');
    const [Branch, setBranch] = useState('Branch');
    const [Usn, setUsn] = useState('usn');
    const [Phno, setPhno] = useState('Phno');

    const handleSubmit=(e) => {
        e.preventDefault();
      const data={
        name: name,
        email: Email,
        branch: Branch,
        usn: Usn,
        phone: Phno
        

      }
      console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type ="text" value={name}
                 placeholder="Student name"
                onChange={(e) => setName(e.target.value)} />
                <input type ="text" value={Email}
                 placeholder="Student Email"
                onChange={(e) => setEmail(e.target.value)} />
                <input type ="text" value={Branch}
                 placeholder="Student Branch"
                onChange={(e) => setBranch(e.target.value)} />
                <input type ="text" value={Usn}
                 placeholder="Student Usn"
                onChange={(e) => setUsn(e.target.value)} />
                <input type ="text" value={Phno}
                 placeholder="Student Phno"
                onChange={(e) => setPhno(e.target.value)} />
                
            <button>submit</button>
            
            </form>
            <p>{name}</p>
            <p>{Email}</p>
            <p>{Branch}</p>
            <p>{Usn}</p>
            <p>{Phno}</p>
        </div>
    )
 }
 
 export default Form
 