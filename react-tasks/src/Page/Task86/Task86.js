import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

// function Task86() {
//     const arrColor = ['red', 'blue', 'purple', 'pink'];
//     const [color, setColor] = useState('black')
//     return (
//         <>
//             <h1>Задача 86</h1>
//             <p> Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
//                 кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
//                 кнопке.
//             </p>
//             <p><Link to='/'>Перейти на главную страницу</Link></p>

//             <h1 style={{ color: color }}>color</h1>
//             {arrColor.map((el) => <p onClick={(e) => (setColor(e.target.textContent))}>{el}</p>)}
//         </>
//     );
// }
function reducer(state, obj) {
    switch (obj.action) {
        case 'changeColor':
            return obj.text
    }
}


function Task86() {
    const arrColor = ['red', 'blue', 'purple', 'pink'];
    const [color, dispatch] = useReducer(reducer, '');
    return (
        <>
            <h1>Задача 86</h1>
            <p> Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
                кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
                кнопке.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <h1 style={{color}}>color</h1>
            {arrColor.map((el) => <p onClick={(e) => dispatch({ action: 'changeColor', text: e.target.textContent })}>{el}</p>)}
        </>
    );
}

export default Task86;