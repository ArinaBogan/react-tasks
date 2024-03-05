import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { task80Context } from '../../Context/Context';

function Task80() {
    const { language, setLanguage } = useContext(task80Context);

    const obj = {
        ru: 'привет',
        en: 'hello',
        by: 'прывiтанне'
    }

    function changeLanguage(e) {
        setLanguage(e.target.textContent)
    }

    return (
        <>
            <h1>Задача 80</h1>
            <p> Создайте приложение, где пользователь сможет выбирать язык интерфейса
                (например, английский или испанский). Используйте useContext для сохранения
                текущего выбранного языка и перевода текста в выбранный язык в компонентах.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>


            <button onClick={changeLanguage}>ru</button>
            <button onClick={changeLanguage}>en</button>
            <button onClick={changeLanguage}>by</button>
            <p>{obj[language]}</p>
        </>);
}

export default Task80;