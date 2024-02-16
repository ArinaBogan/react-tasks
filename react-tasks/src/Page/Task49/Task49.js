import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task49() {
    const [val, setVal] = useState([]);
    const [flag, setFlag] = useState(false);

    async function getUniversities() {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setVal(response.data)
    }

    useEffect(() => getUniversities(), []);

    return (
        <>
            <h1>Задача 49</h1>
            <p>Совместить задачи 3 и 6. По клику на кнопку отображать университеты выбранной
                страны</p>

            <button onClick={() => setFlag(!flag)}>click</button>
            {flag ? val.map((el) => <p>{el.name}</p>) : null}
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task49;