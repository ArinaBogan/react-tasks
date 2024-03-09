import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';


// function Task84() {
//     const [flag, setFlag] = useState(false)

//     return (
//         <>
//             <h1>Задача 84</h1>
//             <p> Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
//                 По клику на кнопку текст меняется на противоположный
//             </p>
//             <p><Link to='/'>Перейти на главную страницу</Link></p>

//             <button onClick={() => flag ? setFlag(false) : setFlag(true)}>{flag ? 'on' : 'off'}</button>
//         </>
//     );
// }



function reducer(state, action) {
    switch (action) {
        case 'changeFlag':
            return state ? false : true
    }
}

function Task84() {
    const [flag, dispatch] = useReducer(reducer, false);

    return (
        <>
            <h1>Задача 84</h1>
            <p> Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
                По клику на кнопку текст меняется на противоположный
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <button onClick={() => dispatch('changeFlag')} >{flag? 'on' : 'off'}</button>
        </>
    );
}

export default Task84;