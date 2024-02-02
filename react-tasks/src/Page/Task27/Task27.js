import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task27() {
    const [num, setNum] = useState(0);

    function changeState() {
        setNum(num + 1);
    }

    return (
        <>
            <h1>Задача 27</h1>
            <p>Создайте компонент с кнопкой и параграфом для отображения результата
                счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
                чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика
            </p>

            <button onClick={changeState}>+1</button>
            <p>{num}</p>
            
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task27;