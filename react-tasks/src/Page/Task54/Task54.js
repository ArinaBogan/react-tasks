import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task54() {
    const [array, setArray] = useState(['do', 'read', 'play', 'sleep']);

    const [inpVal, setInpVal] = useState('');

    function changeInp(e) {
        setInpVal(e.target.value)
    }

    function addTask() {
        setArray([...array, inpVal])
    }

    function removeTask(e) {
        const arrayWithoutActive = array.filter((el) => el != e.target.id)
        setArray(arrayWithoutActive)
    }
    return (
        <>
            <h1>Задача 54</h1>
            <p>Список задач с использованием useState: Создайте компонент списка задач,
                который позволяет пользователю добавлять и удалять задачи из списка.
            </p>

            <div>{array.map((el) => <div><p>{el}<button id={el} onClick={removeTask}>delete</button></p></div>)}</div>
            <input onChange={changeInp} type="text" />
            <button onClick={addTask}>add</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task54;