import logo from './logo.svg';
import './App.css';
import veeru from './veeru.jpg';
import {Profiler} from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form';
import TodoList from './TodoList';
function Profile(){
  return (

    <div className='profile'>
    
      <h1>Profile </h1>
      <th>
        <tr>
          Name=veerendra
        </tr>
        <tr>
          USN=4mk19ec027
          </tr>
          
        <tr>
          Email= veerendragoudar44@gmail.com
          </tr>
          </th>
    </div>
      
  )
}

function Skills(){
  return(
    <div className='skill'>
    
      <h1>Skills </h1>
      <th>
        <tr>
         c++
        </tr>
        <tr>
         java
          </tr>
          
        <tr>
         python
          </tr>
          </th>
    </div>

    
  )
}

function Contact(){
  return(
    <div className='contact'>
    
      <h1>Contact </h1>
      
      <th>
        <tr>
           contact no=8431016761

      </tr>
      </th>
    </div>

    
  )
}

function Image(){
  return(
    <div className='image'>
      <h1>Image</h1>
      <th>
        <tr>
          <img src={veeru} alt="veeru" width="100px" height="100px"/>
          </tr>
          </th>
    </div>
    
  )
}

function About(){
  return(
    <div>
      This is about component
    </div>
  )
}

function Cont(){
  return(
    <div>
      This is Contact component
    </div>
  )
}

function NavBar(){
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/Contact">Cont</Link>
      <Link to="/Teams">Teams</Link>
      <Link to="/Add Student">Add Student</Link>
      <Link to="/TodoList">To do List</Link>
    </div>
  )
  
}

function Teams(){
  return(
    <div>
      This is Teams component
    </div>
  )
}







 function App() {
        return(
      <div className='app'>
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path ="/about" element={<About /> }> </Route>
        <Route path ="/Contact" element={<Cont />}> </Route>
        <Route path ="/Teams" element={<Teams />}> </Route>
        <Route path ="/Add Student" element={<Form />}> </Route>
        <Route path ="/TodoList" element={<TodoList />}> </Route>
        </Routes>
        </BrowserRouter>
         </div>
        );
      }

export default App;
