import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task50() {
    const [num, setNum] = useState(0);

    function doPlus() {
        setNum(num + 1)
    }
    function doMinus() {
        setNum(num - 1)
    }
    return (
        <>
            <h1>Задача 50</h1>
            <p>Счетчик с использованием useState: Создай компонент React, который отображает
                числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
                состоянием счетчика. При нажатии на кнопки, значение счетчика должно
                увеличиваться или уменьшаться.</p>

            <button onClick={doPlus}>+1</button>
            <button onClick={doMinus}>-1</button>
            <p>{num}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>

        </>);
}

export default Task50;