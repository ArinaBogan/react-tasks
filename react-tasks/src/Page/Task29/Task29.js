import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task29() {
    const [num, setNum] = useState(0);

    function changeStatePlus() {
        setNum(num + 1);
    }
    function changeStateMinus() {
        setNum(num - 1);
    };
    function changeStateNull() {
        setNum(0)
    };

    return (
        <>
            <h1>Задача 29</h1>
            <p>Дополните предыдущую задачу. Создайте компонент, который отображает
                счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в
                ноль. Используйте useState, чтобы управлять значением счетчика. П
            </p>

            <button onClick={changeStatePlus}>+1</button>
            <button onClick={changeStateMinus}>-1</button>
            <button onClick={changeStateNull}>0</button>
    
            <p>{num}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task29;