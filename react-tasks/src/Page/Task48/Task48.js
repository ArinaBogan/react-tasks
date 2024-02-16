import { Link } from 'react-router-dom';
import { useState } from 'react';

function Task48() {
    const [flag, setFlag] = useState(false);

    function clickButton() {
        if (flag) {
           setFlag(false) 
        } else {
            setFlag(true) 
        }
    }

    return (
        <>
            <h1>Задача 48</h1>
            <p>Реализовать селектор, где по клику на копку отображается 3 параграфа. При
                повторном клике параграфы скрываются.</p>

            <button onClick={clickButton}>click</button>
            <div>{flag ? <div><p>1</p><p>2</p> <p>3</p></div> : null}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task48;