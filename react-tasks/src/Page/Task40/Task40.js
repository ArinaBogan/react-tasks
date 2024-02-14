import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task40() {
    const [val, setVal] = useState([]);
    const arr = ['one', 'two', 'three', 'four', 'five'];

    const showVal = () => {
        setVal(arr[Math.floor(Math.random() * 5)]);
    }

    return (
        <>
            <h1>Задача 40</h1>
            <p>Напишите компонент, который будет показывать случайную строку в h1 по нажатии на кнопку.
                Слова хранятся в массиве</p>

            <h1>{val}</h1>
            <button onClick={showVal}>click on</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task40;