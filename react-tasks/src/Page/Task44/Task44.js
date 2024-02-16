import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task44() {
    const [IP, setIP] = useState('');

    const getIP = async () => {
        const resonse = await axios.get('https://api.ipify.org/?format=json');
        setIP(resonse.data.ip)
    }

    useEffect(() => { getIP()}, []);

    return (
        <>
            <h1>Задача 44</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша задача
                отображать ip-адрес в тег h1.</p>

            <h1>{IP}</h1>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task44;