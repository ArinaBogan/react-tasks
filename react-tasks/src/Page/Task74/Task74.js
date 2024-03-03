import { Link } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import axios from 'axios';


function Task74() {
    const [num, setNum] = useState(0);

    const changeBtn = useCallback(() => {
        setNum(num + 1)
    }, [num])

    return (
        <>
            <h1>Задача 74</h1>
            <p>Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
                счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
                оптимизировать обработчик клика на кнопке.</p>

            <button onClick={changeBtn} >click</button>
            <p>{num}</p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task74;