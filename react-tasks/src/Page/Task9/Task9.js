import { Link } from 'react-router-dom';

function Task9() {
    const arr = ['aaa', 'xxxxxxxxxxxx', 'bbb', 'ccc'];

    const res = arr.filter((el) => {
        if (el.length < 10) {
            return true
        } else {
            return false
        }
    })

    return (
        <>
            <h1>Задача 9</h1>
            <p>Создайте компонент, который принимает массив строк и фильтрует строки,
                оставляя только те, длина которых не превышает 10 символов.
            </p>
            <div>{arr}</div>
            <div>{res}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task9;