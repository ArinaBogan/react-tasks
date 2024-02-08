import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task31() {

    const [arr, setArr] = useState([]);
    async function getData() {
        const data = await fetch('https://api.ipify.org/?format=json', { method: 'GET' });
        const body = await data.json();
        setArr(body);
    }
    useEffect(() => getData(), []);

    return (
        <>
            <h1>Задача 31</h1>
            <p>. Запрос к API с использованием useState и useEffect: Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
            </p>

            <h1>{Object.entries(arr)}</h1>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task31;