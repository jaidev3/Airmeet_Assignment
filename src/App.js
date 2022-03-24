import './App.css';
import{useEffect,useState} from 'react'
import HomePage from './pages/HomePage';
function App() {
  const [data,setData] =useState([])
useEffect(()=>{
  fetch('https://namelistmasai.herokuapp.com').then(res=>res.json()).then(res=>setData(res))
},[])

// console.log(data)

  return (
    <div className="App">
      <HomePage value={data}/>
    </div>
  );
}

export default App;
