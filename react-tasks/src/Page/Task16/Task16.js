import { Link } from 'react-router-dom';

function Task16() {

    const show = (el) => {
        console.log(el.target.value);
    }

    return (
        <>
            <h1>Задача 16</h1>
            <p>По событию изменения input отображать в консоль каждое вводимое значение</p>

            <input onChange={show}></input>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task16;