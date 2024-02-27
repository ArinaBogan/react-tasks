import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task59() {
    const [inpVal, setInpVal] = useState('');

    function changeInp(e) {
        setInpVal(e.target.value)
    }

    useEffect(() => {
        console.log(inpVal);
    }, [inpVal])

    return (
        <>
            <h1>Задача 59</h1>
            <p> Форма ввода с использованием useState и useEffect: Создайте компонент React,
                который содержит форму с полем ввода. Используйте хук useState для хранения
                значения введенного текста и хук useEffect для отслеживания изменений этого
                значения. При каждом изменении значения в поле ввода, выводить его в консоль
                с помощью useEffect.</p>

            <input onChange={changeInp} type="text" />
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task59;