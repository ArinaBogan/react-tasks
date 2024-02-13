import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task39() {
    const [val, setVal] = useState({ 1: '', 2: '' });

    const getInfoFromInp = (e) => {
        setVal({ ...val, [e.target.id]: e.target.value });
    }

    const showInfo=()=>{
        console.log(val);
    }

    return (
        <>
            <h1>Задача 39</h1>
            <p> Получить значение из 2 инпутов и отобразить это в консоль по клику на кнопку (одним useState) </p>

            <input id='1' onChange={ getInfoFromInp} type="text" />
            <input id='2' onChange={ getInfoFromInp} type="text" />
            <button onClick={showInfo}>click on</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task39;