import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task33() {
    const [flag, setFlag] = useState(false);

    const changeButton = () => {
        if (!flag) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    return (
        <>
            <h1>Задача 33</h1>
            <p> Есть кнопка с названием "поздороваться". По клику на кнопку отобразить
                в h1 "привет", при повторном клике на кнопку убирать "привет" из h1
            </p>

            <h1>{flag ? 'hi' : null}</h1>
            <button onClick={changeButton}>Поздороваться</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task33;