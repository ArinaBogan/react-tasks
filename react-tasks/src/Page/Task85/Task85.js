import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';


// function Task85() {

//     const [val, setVal] = useState('');

//     function changeInp(e) {
//         setVal(e.target.value)
//     }
//     return (
//         <>
//             <h1>Задача 85</h1>
//             <p> Создайте компонент отслеживающий вводимое значение в input. Результат
//                 отображать в h1
//             </p>
//             <p><Link to='/'>Перейти на главную страницу</Link></p>

//             <input onChange={changeInp} type="text" />
//             <h1>{val}</h1>
//         </>
//     );
// }

function reducer(state, obj) {
    switch (obj.action) {
        case 'changeInp':
            return obj.text
        default:
            break
    }
}
function Task85() {
    const [inp, dispatch] = useReducer(reducer, '')
    return (
        <>
            <h1>Задача 85</h1>
            <p> Создайте компонент отслеживающий вводимое значение в input. Результат
                отображать в h1
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <input onChange={(e) => dispatch({ action: 'changeInp', text: e.target.value })} type="text" />
            <h1>{inp}</h1>
        </>
    );
}

export default Task85;