import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import AddTask from './Components/AddTask/addTask';


function App() {

  return (
    <div>
      <Header heading="Task Mager"></Header>

      <AddTask></AddTask>

      <Footer year="2022"></Footer>
    </div>
  );
}

export default App;
