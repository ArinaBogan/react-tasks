import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

function reducer(state, obj) {
    switch (obj.action) {
        case 'changeColor':
            return obj.text
    }
}

function Task87() {

    return (
        <>
            <h1>Задача 87</h1>
            <p> Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
                сумму 2 input. По клику на кнопку отображать результат в консоль
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <input type="text" />
            <input type="text" />
            <button>click</button>
        </>
    );
}

export default Task87;