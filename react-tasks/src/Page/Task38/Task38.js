import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task38() {
    const [data, setData] = useState('');

    function changeInput(e) {
        setData(e.target.value)
    }

    return (
        <>
            <h1>Задача 38</h1>
            <p>Отобразить в h1 каждое введенное значение из input  </p>

            <input onChange={changeInput} type="text" />
            <h1>{data}</h1>


            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task38;