import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Task1 from './Page/Task1/Task1';
import Task2 from './Page/Task2/Task2';
import Task3 from './Page/Task3/Task3';
import Task4 from './Page/Task4/Task4';
import Task5 from './Page/Task5/Task5';
import Task6 from './Task6/Task6';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/task1' element={<Task1></Task1>}></Route>
        <Route path='/task2' element={<Task2></Task2>}></Route>
        <Route path='/task3' element={<Task3></Task3>}></Route>
        <Route path='/task4' element={<Task4></Task4>}></Route>
        <Route path='/task5' element={<Task5></Task5>}></Route>
        <Route path='/task6' element={<Task6></Task6>}></Route>


      </Routes>
    </>
  );
}

export default App;
