import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task62() {
    const [val, setVal] = useState(null);

    async function getInfo() {
        const num = Math.floor(Math.random() * 10)
        const data = await axios.get(`http://numbersapi.com/:${num}`);
        setVal(data.data)
    }
    useEffect(() => {
        console.log(getInfo(val))
    })

    return (
        <>
            <h1>Задача 62</h1>
            <p> Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
                компонент React, который при первичном рендеринге отправляет запрос к APIс
                рандомно сгенерированным числом и отображает результат в консоль.</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task62;