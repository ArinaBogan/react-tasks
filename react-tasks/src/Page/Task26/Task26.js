import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task26() {
    const [flag, setFlag] = useState(false);

    function changeStateFlag() {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    };

    return (
        <>
            <h1>Задача 26</h1>
            <p>Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
                текст должен появляться или исчезать
            </p>

            <p>{flag ? 'Текст' : ''}</p>
            <button onClick={changeStateFlag}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task26;