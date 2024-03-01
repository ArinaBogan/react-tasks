import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


function Task67() {
    const div = useRef();

    const changeText = () => {
        div.current.style.display = 'block'
    }
    const changeTextNone = () => {
        div.current.style.display = 'none'
    }
    return (
        <>
            <h1>Задача 67</h1>
            <p>Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
                элемент интерфейса (например, кнопку), компонент отображает подсказку с
                текстом. Подсказку можно закрыть, кликнув по ней, используя useRef.
                (onMouseEnter)</p>

            <div ref={div} style={{ display: 'none' }}>подсказка</div>
            <button onMouseEnter={changeText} onMouseLeave={ changeTextNone}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task67;