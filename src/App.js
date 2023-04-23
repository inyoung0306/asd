import logo from './logo.svg';
import './App.css';
import Content from './Main/Content';
import Main from './Main/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount';
import News from './News/News';
import Home from './Home/Home';

function App() {
  return (
    <div className='App'>

      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />} /> 
        <Route path="/ca" element={<CreateAccount />}/>
        <Route path="/news" element={<News />}/>
      </Routes>
    </div>
  );
}

export default App;
