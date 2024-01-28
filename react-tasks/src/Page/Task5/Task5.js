import { Link } from 'react-router-dom';

function Task5() {
    const arr = [1, 'a', 2, 'b', 3, 'c'];
    const newArr = arr.map((el) => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            if (el % 2 == 0) {
                return <p>{el} четное</p>
            } else {
                return <p>{el} нечетное</p>
            }
        }
    })

    return (
        <>
            <h1>Задача 5</h1>
            <p>На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
                случае числа четность и нечетность текущего значения в параграфе, в случае
                строки отобразить саму строку в параграфе
            </p>
            <div>{newArr}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task5;