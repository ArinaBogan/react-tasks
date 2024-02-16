import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task45() {
    const [val, setVal] = useState([]);

    const getUniversities = async () => {
        const resonse = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setVal(resonse.data);
    }

    useEffect(() => {
        getUniversities()
    }, []);

    return (
        <>
            <h1>Задача 45</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                http://universities.hipolabs.com/search?country=Belarus. API возвращает
                университеты страны переданной в качестве одного из доментов url. Ваша задача
                отображать все университеты в тег параграф.</p>

            <div>
                {val.map((el) => {
                   return <p>{el.name}</p>
                })}
            </div>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task45;