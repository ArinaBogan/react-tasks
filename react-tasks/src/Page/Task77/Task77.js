import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

function Task77() {
    const [color, setColor] = useState();

    const changeColor = useCallback(function (e) {
        setColor(e.target.textContent)
    }, [color])

    return (
        <>
            <h1>Задача 77</h1>
            <p>Создайте компонент, который предоставляет пользователю выбор цвета из
                списка. При выборе цвета, компонент должен отображать выбранный цвет на
                странице. Используйте useCallback, чтобы оптимизировать функцию выбора
                цвета.</p>

            <h1 style={{ backgroundColor: color }}>text</h1>
            <ul >
                <li onClick={changeColor}>green</li>
                <li onClick={changeColor}>red</li>
                <li onClick={changeColor}>blue</li>
                <li onClick={changeColor}>yellow</li>
            </ul>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task77;