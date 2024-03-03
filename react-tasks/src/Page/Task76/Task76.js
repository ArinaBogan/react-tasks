import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';

function Task76() {
    const [status, setStatus] = useState('неактивный');

    const changeBtn = useCallback(() => {
        status == 'неактивный' ? setStatus('активный') : setStatus('неактивный')
    }, [status])
    return (
        <>
            <h1>Задача 76</h1>
            <p>Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
                на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
                Используйте useCallback, чтобы оптимизировать функцию изменения статуса.</p>

            <button onClick={changeBtn}>изменить статус</button>
            <p>{status}</p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task76;