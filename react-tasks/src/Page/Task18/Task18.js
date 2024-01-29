import { Link } from 'react-router-dom';

function Task18() {
    const arr = ['red', 'white', 'blue'];
    function show(e) {
        e.target.style = `background-color:${arr[Math.round(Math.random()) * 2]}`;
    }

    return (
        <>
            <h1>Задача 18</h1>
            <p>Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
                в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
                выбор цвета из массива при каждом клике.</p>

            <button onClick={show}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task18;