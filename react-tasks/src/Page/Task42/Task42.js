import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task42() {
    const [val, setVal] = useState('');

    const showResult = (e) => {
        setVal(e.target.value)
    }

    const doMath = () => {
        setVal(eval(val))
    }

    return (
        <>
            <h1>Задача 42</h1>
            <p>Сделайте инпут в который вводится математическое выражение
                по клику на кнопку посчитать результат выражения (eval()) и отобразить  результат в h1</p>

            <input onChange={showResult} type="text" />
            <h1>{val}</h1>
            <button onClick={doMath}>click</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task42;