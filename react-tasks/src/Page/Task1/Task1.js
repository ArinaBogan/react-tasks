import { Link } from 'react-router-dom';

function Task1() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const newArr = arr.map((el) => {
        return el ** 2
    })
    return (<>
        <h1>Задача 1</h1>
        <p>На входе статичный массив чисел. Ваша задача каждое число массива возвести в
            квадрат и отобразить на странице </p>

        <p>Первоначальный массив: {arr}</p>
        <p>Новый массив: {newArr}</p>

        <p><Link to='/'>Перейти на главную страницу</Link></p>
    </>);
}

export default Task1;