import { Link } from 'react-router-dom';
import { useRef} from 'react';

function Task63() {
    const h1 = useRef()

    const changeSize = () => {
        h1.current.style['font-size'] = parseInt(h1.current.style['font-size']) + 1 + 'px'
    }

    return (
        <>
            <h1>Задача 63</h1>
            <p> Создайте компонент, который при каждом клике на кнопку увеличивает размер
                шрифта текста в элементе на странице. </p>

            <button onClick={changeSize}>click</button>
            <h1 ref={h1} style={{ fontSize: 18 }}>text</h1>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task63;