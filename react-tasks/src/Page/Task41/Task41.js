import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task41() {
    const [val, setVal] = useState('');

    const showVal = (e) => {
        setVal(e.target.textContent)
    }

    return (
        <>
            <h1>Задача 41</h1>
            <p>Есть 3 кнопки: о нас, цена, главная страница,
                h1  содержит текст активной(нажатой) кнопки
                (если нажали на "цена" отображать слово "цена" в h1)</p>

            <h1>{val}</h1>
            <button onClick={showVal}>about</button>
            <button onClick={showVal}>price</button>
            <button onClick={showVal}>main</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task41;