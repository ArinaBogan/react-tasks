import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Task57() {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <h1>Задача 57</h1>
            <p> Отображение навигации с использованием useState: По нажатию на кнопку
                “бургер” отображать блок навигации из 4 параграфов.</p>


            <button onClick={() => setFlag(!flag)}>click</button>
            {flag && (
                <div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
            )}
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task57;