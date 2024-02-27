import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task60() {
    const [val, setVal] = useState(0);

    useEffect(() => {
        const data = setInterval(() => setVal(val + 1), 1000)
        return () => clearInterval(data)
    })
    return (
        <>
            <h1>Задача 60</h1>
            <p>Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
                который увеличивает значение счетчика на 1 каждую секунду с использованием
                useEffect. </p>

            <p>{val}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task60;