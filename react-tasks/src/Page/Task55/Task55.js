import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task55() {
    const [text, setText] = useState('');
    const [flag, setFlag] = useState(false);

    function showInp(e) {
        setText(e.target.value)
    }

    function checkEmail() {
        setFlag((/^[a-z0-9]+@[a-z]+\.[a-z]+/gm.test(text)))
    }
    return (
        <>
            <h1>Задача 55</h1>
            <p>Форма с использованием useState: Создайте компонент текстового поля, который
                позволяет пользователю вводить текст и проверять введенный текст регулярным
                выражением на почту по нажатию на кнопку. В заголовок отобразить true если
                введенная строка удовлетворяет регулярному выражению и false в противном
                случае. </p>

            <input onChange={showInp} type="text" />
            <button onClick={checkEmail}>click</button>
            <h1>{flag ? 'true' : 'false'}</h1>


            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task55;