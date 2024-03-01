import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


function Task66() {
    const btn = useRef(0);

    const clickBtn = () => {
        btn.current++
        console.log(btn.current);
    }
    return (
        <>
            <h1>Задача 66</h1>
            <p>Реализуйте компонент, который отслеживает количество кликов на кнопку с
                помощью useRef и выводит это число при каждом клике.</p>

            <button onClick={clickBtn}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task66;