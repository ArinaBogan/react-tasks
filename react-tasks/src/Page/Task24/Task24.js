import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task24() {
    const [inp1, setInp1] = useState('');
    function changeStateInp1(e) {
        setInp1(e.target.value);
    };

    const [inp2, setInp2] = useState('');
    function changeStateInp2(e) {
        setInp2(e.target.value);
    };

    function compareInp() {
        console.log(inp1 === inp2);
    }

    return (
        <>
            <h1>Задача 24</h1>
            <p>Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
                данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
                Результат отображать в консоль
            </p>

            <input onChange={changeStateInp1} />
            <input onChange={changeStateInp2} />

            <button onClick={compareInp}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task24;