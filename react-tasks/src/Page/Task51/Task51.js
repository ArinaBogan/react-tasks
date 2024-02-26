import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task51() {
    const [val, setVal] = useState('');

    function showVal(e) {
        setVal(e.target.value)
    }
    return (
        <>
            <h1>Задача 51</h1>
            <p>Форма с использованием useState: Создайте компонент текстового поля, который
                позволяет пользователю вводить текст и отображает его в реальном времени.</p>

            <input onChange={showVal} type="text" />
            <p>{val}</p>
            
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task51;