import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard"
import Footer from "./components/Footer/Footer"

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
        <NavBar />
      </header>
      <div className='App-body'>
        <div className="container-fluid">
          <Dashboard jwt={jwt}/>
        </div>
      </div>
      <footer className='App-footer'>
        {/* footer */}
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
