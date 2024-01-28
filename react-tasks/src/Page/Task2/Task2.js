import { Link } from 'react-router-dom';

function Task2() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newArr = arr.map((el) => {
        return <h1>{Math.sqrt(el)};</h1>
    })
    return (<>
        <h1>Задача 2</h1>
        <p>На входе статичный массив чисел. Ваша задача найти корень каждого числа и
            отобразить на странице в виде h1</p>

        <p>Первоначальный массив: {arr}</p>
        <p>Новый массив: {newArr}</p>

        <p><Link to='/'>Перейти на главную страницу</Link></p>
    </>
    );
}

export default Task2;