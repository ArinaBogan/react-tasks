import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';


function Task70() {
    const [inp, setInp] = useState(0);

    function changeInp(e) {
        setInp(e.target.value)
    }

    const factorial = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= inp; i++) {
            result *= i
        }
        return result
    })

    return (
        <>
            <h1>Задача 70</h1>
            <p>Разработайте компонент, который выполняет факториал числа при вводе
                значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
                вычислений для разных введенных значений и отображать их без повторных
                вычислений.</p>

            <input onChange={changeInp} type="text" />
            <p>{factorial}</p>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task70;