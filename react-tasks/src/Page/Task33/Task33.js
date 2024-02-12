import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task33() {
    // const [flag, setFlag] = useState(true);
    // const [str, setStr] = useState('');

    // function changeButton() {
    //     if (flag) {
    //         setStr('hi')
    //         setFlag(false)
    //     }else{
    //         setStr('')
    //         setFlag(true)
    //     }
    // }

    const [data, setData] = useState('');
    function changeButton() {
        if (data == true) {
            setData(false)
        } else {
            setData(true)
        }
    }

    return (
        <>
            <h1>Задача 33</h1>
            <p> Есть кнопка с названием "поздороваться". По клику на кнопку отобразить
                в h1 "привет", при повторном клике на кнопку убирать "привет" из h1
            </p>

            <h1>{data ? 'hi' : ''}</h1>
            <button onClick={changeButton}>Поздороваться</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task33;