import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task46() {
    const [val, setVal] = useState(0);

    function doSum() {
        setVal(val + 1)
    }
    function doMinus() {
        setVal(val - 1)
    }
    function doReset() {
        setVal(0)
    }

    return (
        <>
            <h1>Задача 46</h1>
            <p>Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
                значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
                счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
                обнуляется. Значение счетчика отображать в h1</p>

            <button onClick={doSum}>+1</button>
            <button onClick={doMinus}>-1</button>
            <button onClick={doReset}>сброс</button>
            <h1>{val}</h1>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task46;