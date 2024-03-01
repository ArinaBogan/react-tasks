import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


function Task65() {
    // const inp = useRef();
    const arrColor = ['yellow', 'pink', 'blue', 'green'];

    // const changeBackground = () => {
    //     inp.current.style.backgroundColor = arrColor[Math.round(Math.random() * 4)]
    // }

    const [color, setColor] = useState('white');

    const changeBackground = () => {
        setColor(arrColor[Math.round(Math.random() * 4)])
    }
    return (
        <>
            <h1>Задача 65</h1>
            <p>Создайте компонент, который при фокусе на текстовом поле добавляет
                background (onFocus, onBlur) </p>

            <input style={{ backgroundColor: color }} onFocus={changeBackground} type="text" />
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task65;