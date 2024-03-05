import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { task79Context } from '../../Context/Context';

function Task79() {

    const obj = useContext(task79Context)

    return (
        <>
            <h1>Задача 79</h1>
            <p>  Используйте useContext, чтобы сохранять данные о текущем пользователе.
                Отобразите эту информацию в компоненте, используя контекст.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
            <p>{obj.id}</p>
            <p>{obj.name}</p>
            <p>{obj.surname}</p>
        </>);
}

export default Task79;