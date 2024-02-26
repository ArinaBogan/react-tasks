import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Task53() {
    const [color, setColor] = useState('yellow');

    function changeColor(e) {
        setColor(e.target.texContent)
    }
    return (
        <>
            <h1>Задача 53</h1>
            <p>Изменение цвета с использованием useState: Создайте компонент выбора цвета,
                который позволяет пользователю выбирать цвет из списка и отображает цвет
                выбранного цвета на экране.</p>

            <ul onClick={changeColor}>
                <li>black</li>
                <li>green</li>
                <li>red</li>
                <li>blue</li>
                <li>yellow</li>
            </ul>

            <h1 style={{ color: color }}>hi</h1>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task53;