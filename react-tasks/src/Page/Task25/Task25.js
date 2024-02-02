import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task25() {
    const [inp, setInp] = useState('');
    const [flag, setFlaf] = useState(false);

    function changeStateInp(e) {
        setInp(e.target.value);
    };

    function changeStateFlag() {
        setFlaf(true);
    };

    return (
        <>
            <h1>Задача 25</h1>
            <p>Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
                поле и нажатии на кнопку, компонент должен отображать приветственное
                сообщение с именем, введенным пользователем
            </p>

            <input onChange={changeStateInp} />
            <button onClick={changeStateFlag}>Привет</button>
            <p>{flag ? 'Привет, ' + inp : ''}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task25;