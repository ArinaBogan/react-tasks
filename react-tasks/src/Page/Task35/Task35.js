import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task35() {
    const [flag, setFlag] = useState(false);

    function changeButton() {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    return (
        <>
            <h1>Задача 35</h1>
            <p> Текст кнопки открыто меняется на закрыто по нажатию на себя
            </p>

            <button onClick={changeButton}>{flag ? 'open' : 'close'}</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task35;