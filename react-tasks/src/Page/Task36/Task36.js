import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Task36() {
    const [flag, setFlag] = useState(false);

    function changeButton() {
        if (flag) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    return (
        <>
            <h1>Задача 36</h1>
            <p> Сделайте компонент выезжающего меню из 3 параграфов.
                По нажатию на кнопку "открыть" отобразить меню. </p>

            {flag ? <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div> : null}

            <button onClick={changeButton}>open menu</button>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task36;