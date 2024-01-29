import { Link } from 'react-router-dom';
import style from './style.module.css';

function Task10() {
    const arr = [1, 'a', 2, 'b', 3, 'c'];

    const res = arr.map((el) => {
        if (isNaN(el)) {
            return (<p className={style.colorStr}>{el}</p>)
        } else {
            return (<p className={style.colorNum}>{el}</p>)
        }
    })

    return (
        <>
            <h1>Задача 10</h1>
            <p>Создайте компонент, который принимает статичный массив чисел и строк. Если
                элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
                строка - с синим.
            </p>
            <div>{res}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task10;