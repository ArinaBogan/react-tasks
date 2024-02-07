import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task31() {


    return (
        <>
            <h1>Задача 31</h1>
            <p>. Запрос к API с использованием useState и useEffect: Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
            </p>


            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task31;