import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task47() {
    const [name, setName] = useState('');

    function changeInp(e) {
        setName(e.target.value)
    }

    return (
        <>
            <h1>Задача 47</h1>
            <p>Создайте форму ввода, в которой пользователь может вводить своё имя и
                отображать его под формой</p>

            <input onChange={changeInp} type="text" />
            <p>{name}</p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task47;