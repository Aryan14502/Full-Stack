import React,{useState, useEffect, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [count, setCount] = useState(0);

  const incri1 = () => {setCount(count + 1)};
  const decri1 = () => {setCount(count - 1)};
  const incri10 = () => {setCount(count + 10)};
  const decri10 = () => {setCount(count - 10)};

  function reducer(state, action){
    switch(action.type){
      case 'increment':
        return {count1 : state.count1 + 1};
      case 'decrement':
        return {count1 : state.count1 - 1};
      default:
        return state;        
    }
  }

  const [state, dispatch] = useReducer(reducer,{count1 : 0})

  useEffect (() => {
    console.log('useEffect is called');
  },[count]);

  const ref = useRef(0);

  const inci = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  const deci = () => {
    ref.current = ref.current - 1;
    console.log(ref.current);
  }

  return (
    <div>
      <h1>Hi, we will be learning hooks</h1>
      <p>Let's rock and roll</p>
      <p>lets start with useState and useEffect and useReducer and useRef</p>
      <h3>Count : {count}</h3>
      <button onClick={incri1}>+1</button>
      <button onClick={decri1}>-1</button>
      <button onClick={incri10}>+10</button>
      <button onClick={decri10}>-10</button>
      <h3>Now lets handle states using redcuer</h3>
      <h3>Count : {state.count1}</h3>
      <button onClick={() => dispatch({type : 'increment'})}>+1</button>
      <button onClick={() => dispatch({type : 'decrement'})}>-1</button>
      <h3>Now lets handle states using useRef</h3>
      <h3>Count : {ref.current}</h3>
      <button onClick={inci}>+1</button>
      <button onClick={deci}>-1</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
