import { Link } from 'react-router-dom';
import { useState } from 'react';


function Task52() {
    const [flag, setFlag] = useState(false);

    function changeButton1() {
        setFlag(true)
    }
    function changeButton2() {
        setFlag(false)
    }
    return (
        <>
            <h1>Задача 52</h1>
            <p>Отображение текста с использованием useState: Создайте компонент, который
                предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
                отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>

            <button onClick={changeButton1}>показать</button>
            <button onClick={changeButton2}>скрыть</button>
            {flag ? <p>text</p> : null}

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task52;