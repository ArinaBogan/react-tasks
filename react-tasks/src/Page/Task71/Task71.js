import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';


function Task71() {


    return (
        <>
            <h1>Задача 71</h1>
            <p>Создайте компонент для отображения списка чисел от 1 до N, где N - число,
                введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
                список чисел только при изменении N.</p>


            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task71;