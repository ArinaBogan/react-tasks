import { Link } from 'react-router-dom';

function Task3() {
    const arr = ['Arina', 'Bogan', 'arina.bogan@gmail.com'];
    const newArr = arr.filter((el) => {
        return el.includes('@')
    })
    return (
        <>
            <h1>Задача 3</h1>
            <p>На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
                странице только те строки, которые содержат знак @
            </p>

            <p>Первоначальный массив: {arr}</p>
            <p>Новый массив: {newArr}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task3;