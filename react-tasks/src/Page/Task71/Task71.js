import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';


function Task71() {
    const [inp, setInp] = useState(0);

    function changeVal(e) {
        setInp(e.target.value)
    }

    const doSum = useMemo(() => {
        let result = 0
        for (let i = 0; i <= inp; i++) {
            result += i
        }
        return result
    },[inp])
    return (
        <>
            <h1>Задача 71</h1>
            <p>Создайте компонент для отображения списка чисел от 1 до N, где N - число,
                введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
                список чисел только при изменении N.</p>

            <input onChange={changeVal} type="text" />
            <h1>{doSum}</h1>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task71;