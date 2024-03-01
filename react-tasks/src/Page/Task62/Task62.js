import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task62() {
    const [val, setVal] = useState('');

    async function getInfo() {
        const response = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 100)}`);
        setVal(response.data)
    }
    useEffect(() => {
        console.log(getInfo())
    }, [])

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