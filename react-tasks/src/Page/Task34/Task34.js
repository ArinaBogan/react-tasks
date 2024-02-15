import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task34() {
    const [flag, setFlag] = useState(false);

    const changeColor = () => {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <>
            <h1>Задача 34</h1>
            <p> Eсть кнопка с названием "добавить цвет".
                по клику на кнопку поменять цвет шрифта h1.
                при повторном клике цвет вернуть в первоначальное состояние
            </p>

            <h1 style={{ color: flag ? 'red' : 'blue' }}>color</h1>
            <button onClick={changeColor}>click on</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task34;