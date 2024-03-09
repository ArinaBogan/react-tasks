import { useReducer} from 'react';
import { Link } from 'react-router-dom';

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'delete':
            return 0;
        default:
            break;
    }
}
function Task83() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>Задача 83</h1>
            <p> Создайте компонент счетчика, который может увеличивать, уменьшать,
                сбрасывать значение при нажатии на соответствующие кнопки.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>


            <p>{count}</p>
            <button onClick={() => dispatch('increment')}>-1</button>
            <button onClick={() => dispatch('delete')}>0</button>
            <button onClick={() => dispatch('decrement')}>+1</button>
        </>
    );
}

export default Task83;