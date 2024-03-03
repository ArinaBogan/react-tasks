import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';


function Task72() {
    const [str, setStr] = useState('');

    function changeStr(e) {
        setStr(e.target.value)
    }

    const reverseStr = useMemo(() => {
        return str.split('').reverse('').join('')
    })

    return (
        <>
            <h1>Задача 72</h1>
            <p>Напишите программу, которая принимает строку от пользователя и выводит ее в
                обратном порядке. Используй хук useState для хранения строки и хук useMemo
                для кэширования результата.</p>

            <input onChange={changeStr} type="text" />

            <p>{reverseStr}</p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task72;