import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import AddTask from './Components/AddTask/addtask';
import CardDispaly from './Components/DisplayTask/displayTask'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header heading="Task Manager"></Header>
      <div>
        <AddTask></AddTask>
        <CardDispaly />
      </div>
      <Footer rights="2022"></Footer>
    </div>
  );
}

export default App;
