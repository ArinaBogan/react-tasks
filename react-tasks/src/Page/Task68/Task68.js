import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


function Task68() {
    const h1 = useRef();
    const arrColor = ['red', 'blue', 'green', 'purple', 'pink']

    const changeColor = () => {
        h1.current.style.color = arrColor[Math.round(Math.random() * 5)]
    }
    return (
        <>
            <h1>Задача 68</h1>
            <p>Создайте компонент, который по клику на кнопку добавляет рандомный color к
                заголовку</p>

            <button onClick={changeColor}>click on</button>
            <h1 ref={h1}>text</h1>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task68;