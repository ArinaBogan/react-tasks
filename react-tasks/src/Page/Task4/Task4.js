import { Link } from 'react-router-dom';
import img1 from './assets/img1.png';

function Task4() {
    const arr = ['one', 'two', 'three'];
    const newArr = arr.map((el) => {
        return <div> <p>{el}</p><img src={img1} /></div>
    })
    return (
        <>
            <h1>Задача 4</h1>
            <p>На входе статичный массив строк. Ваша задача отобразить на странице все строки
                массива, а также картинку. Каждая итерация будет возвращать
                {'<div> <p>el</p><img /></div>'}
            </p>

            <div>{newArr}</div>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task4;