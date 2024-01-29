import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Task1 from './Page/Task1/Task1';
import Task2 from './Page/Task2/Task2';
import Task3 from './Page/Task3/Task3';
import Task4 from './Page/Task4/Task4';
import Task5 from './Page/Task5/Task5';
import Task6 from './Page/Task6/Task6';
import Task7 from './Page/Task7/Task7';
import Task8 from './Page/Task8/Task8';
import Task9 from './Page/Task9/Task9';
import Task10 from './Page/Task10/Task10';
import Task11 from './Page/Task11/Task11';
import Task12 from './Page/Task12/Task12';
import Task15 from './Page/Task15/Task15';
import Task16 from './Page/Task16/Task16';

import Task18 from './Page/Task18/Task18';

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
        <Route path='/task7' element={<Task7></Task7>}></Route>
        <Route path='/task8' element={<Task8></Task8>}></Route>
        <Route path='/task9' element={<Task9></Task9>}></Route>
        <Route path='/task10' element={<Task10></Task10>}></Route>
        <Route path='/task11' element={<Task11></Task11>}></Route>
        <Route path='/task12' element={<Task12></Task12>}></Route>
        <Route path='/task15' element={<Task15></Task15>}></Route>
        <Route path='/task16' element={<Task16></Task16>}></Route>
 
        <Route path='/task18' element={<Task18></Task18>}></Route>
      </Routes>
    </>
  );
}

export default App;
