import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import './App.css';
import LoginForm from './components/Login/LoginForm'

const apiUrl = 'http://localhost:9000';

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function App() {

  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);

  useEffect(() => {
    const getJwt = async () => {
      // const { data } = await axios.get(`${apiUrl}/jwt`);
      let data = {"token": "dummyToken"};
      localStorage.setItem('token', data.token);
      setJwt(data.token);
    };

    const clearJwt = async () => {
      // const { data } = await axios.get(`${apiUrl}/jwt/clear`);
      let data = {"token": null};
      localStorage.setItem('token', null);
      setJwt(null);
    }
    
    getJwt();

    return function cleanup() {
      clearJwt();
    };
  });

  return (
    <div>
      <header className="App-header">
        {/* nav-bar */}
        <h1>HEADER</h1>
      </header>
      <div className='App-body'>
        <LoginForm></LoginForm>
      </div>
      <footer className='App-footer'>
        {/* footer */}
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
