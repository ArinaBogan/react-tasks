import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';


function Task69() {
    const [inp1, setInp1] = useState(0);
    const [inp2, setInp2] = useState(0);

    function changeInpVal1(e) {
        setInp1(e.target.value)
    }
    function changeInpVal2(e) {
        setInp2(e.target.value)
    }

    const doSum = useMemo(() => {
        return +inp1 + +inp2
    }, [inp1, inp2])

    return (
        <>
            <h1>Задача 69</h1>
            <p>Создайте компонент React, который отображает сумму двух чисел. Используй хук
                useState для хранения значений чисел и хук useMemo для кэширования
                результата суммы. При изменении значений чисел, сумма должна
                пересчитываться только тогда, когда необходимо.</p>

            <input onChange={changeInpVal1} type="text" />
            <input onChange={changeInpVal2} type="text" />
            <h1>{doSum}</h1>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task69;