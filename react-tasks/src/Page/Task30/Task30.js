import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task30() {


    return (
        <>
            <h1>Задача 30</h1>
            <p>. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
                state, первоначальное значение которого. Проверить
                значения 2 input на пустоту.
            </p>


            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task30;