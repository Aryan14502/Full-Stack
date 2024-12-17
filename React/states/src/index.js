import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 5,
      users: [] // Initialize users state
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?page=0&results=20")
      .then((response) => this.setState({ users: response.data.results }))
      .catch((error) => console.log(error));
  }

  render () {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
        
        {/* Map through the users and render their details */}
        {this.state.users.length > 0 ? (
          <div>
            {this.state.users.map((user) => (
              <div key={user.login.uuid}>
                <h3> {user.login.uuid} {user.name.first} {user.name.last}</h3>
                <p>{user.email}</p>
                <br />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    )
  }
}

// function Aryan() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick = {() => setCount(count + 1)}>Click</button>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <Aryan/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
