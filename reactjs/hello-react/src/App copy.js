import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import UserDetail from './pages/UserDetail'
import {USERS} from './data'

function App() {
  return (
    <BrowserRouter>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      {USERS.map(g => (
        <Link to={`/user/${g.login}`}>{g.fullName}</Link>
      ))}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user/:login' element={<UserDetail/>} />
        <Route path='/user/:login/:language' element={<UserDetail/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
