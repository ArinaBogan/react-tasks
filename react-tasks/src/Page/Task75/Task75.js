import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

function Task75() {
    const [arr, setArr] = useState(['one', 'two', 'three']);

    const changeBtn = useCallback(function clickButton(e) {
        setArr(arr.filter((el) => el != e.target.id))
    }, [arr])
    return (
        <>
            <h1>Задача 75</h1>
            <p>Создайте компонент, который отображает список элементов с кнопками
                "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
                Используйте useCallback, чтобы оптимизировать функцию удаления элемента.</p>


            <ul>
                {arr.map((el) => {
                    return <li><button id={el} onClick={changeBtn}>Delete</button>{el}</li>
                })}
            </ul>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task75;