import { Link } from 'react-router-dom';
import { useRef } from 'react';


function Task64() {
    const h1 = useRef();
    const arrColor = ['red', 'blue', 'green', 'yellow', 'pink'];

    const changeColor = () => {
        h1.current.style.color = arrColor[Math.round(Math.random() * 5)]
    }

    return (
        <>
            <h1>Задача 64</h1>
            <p> Необходимо рандомно у h1 поменять цвет текста</p>

            <h1 ref={h1} style={{ color: 'black' }}>text</h1>
            <button onClick={changeColor}>click</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task64;