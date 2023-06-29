import logo from './logo.svg';
import './App.css';
import Header from './Componnets/Header/header'
import Footer from './Componnets/Footer/footer'
import Login from './Componnets/Login/login'
import Register from './Componnets/Register/register';
import DashBoard from './Componnets/DashBoard/dashBoard'
import AllTask from './Componnets/AllTask/allTask'
import AddTask from './Componnets/AddTask/addTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/* <Route path='/' element={<Login></Login>}></Route> */}
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='dashboard' element={<DashBoard />}>
            <Route path='allTask' element={<AllTask />}></Route>
            <Route path='addTask' element={<AddTask />}></Route>

          </Route>


        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
