import { Link } from 'react-router-dom';

function Task8() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const min=Math.min(...arr);
    const max=Math.max(...arr);

    return (
        <>
            <h1>Задача 8</h1>
            <p>Реализуйте компонент, который принимает статичный массив чисел и выводит
                минимальное и максимальное значения на странице.
            </p>
           
            <div>Минимальное значение: {min}</div>
            <div>Максимальное значение: {max}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task8;