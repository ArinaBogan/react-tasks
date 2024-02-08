import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task30() {
    const [inp, setInp] = useState({ name: '', surname: '' });
    const getData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    const showData = () => {
        try {
            if (!inp.name || !inp.surname) throw new Error('введите значение');
            console.log(inp);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Задача 30</h1>
            <p>. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
                state, первоначальное значение которого. Проверить
                значения 2 input на пустоту.
            </p>

            <input name='name' type="text" onChange={getData} />
            <input name='surname' type="text" onChange={getData} />
            <button onClick={showData}>click</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task30;