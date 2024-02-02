import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task28() {
    const [num, setNum] = useState(0);

    function changeStatePlus() {
        setNum(num + 1);
    }
    function changeStateMinus() {
        setNum(num -1);
    }

    return (
        <>
            <h1>Задача 28</h1>
            <p>Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
                для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
                так реализовать функционал, чтобы при клике на кнопку +1 автоматически
                прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
                вычитание значения 1
            </p>

            <button onClick={changeStatePlus}>+1</button>
            <button onClick={changeStateMinus}>-1</button>
            <p>{num}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task28;