import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task23() {
    const [inp, setInp] = useState('');

    function changeStateInp(e) {
        setInp(e.target.value);
    }

    function checkEmail() {
        const reg = /^[\w\d]+@[\w\d\.]+$/gm;
        if (!reg.test(inp)) {
            console.log(false);
        } else {
            console.log(true);
        }
    }
    return (
        <>
            <h1>Задача 23</h1>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на почту. Результат отображать в
                консоль
            </p>

            <input onChange={changeStateInp} />
            <button onClick={checkEmail}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task23;