import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Photos></Photos>
    </div>
  );
}

function Photos(){
const [photos, setPhoto] = useState([]);
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data =>setPhoto(data))
}, [])
  return (
    <div>
      <h1>JSON Phots</h1>
     {photos.map(photo=><PhotoDisplay url={photo.url} title={photo.title}></PhotoDisplay>)}
    </div>
  );
}

function PhotoDisplay(props){
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <img src={props.url}/>
    </div>
  );
}

// counter function 
function Counter(){
const [count, setCount] = useState(0);
const increaseHandler = ()=>{
  const newCount = count + 1;
  setCount(newCount);
}
const decreaseHandler = ()=>{
  const newCount = count - 1;
  setCount(newCount);
}
// style for button 
const btnStyle = {
  marginRight : '5px',
  padding : "5px",
  backgroundColor : 'lightgreen',
  borderRadius : '3px'
}
const mainDiv = {
  marginTop : "50px"
}
  return (
    <div style={mainDiv}>
      <h1>Count : {count} </h1>
      <button style={btnStyle} onClick={increaseHandler}>Increase</button>
      <button style={btnStyle} onClick={decreaseHandler}>Decrease</button>
    </div>
  );
}

export default App;
