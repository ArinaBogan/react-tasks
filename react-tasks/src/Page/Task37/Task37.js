import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task37() {
    const [num, setNum] = useState(0);

    function changeButton() {
        setNum(num + 1)
    }

    return (
        <>
            <h1>Задача 37</h1>
            <p> Создайте компонент, который будет отслеживать количество кликов
                по кнопке и отображать это количество </p>

            <h1>{num}</h1>
            <button onClick={changeButton}>click on</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task37;