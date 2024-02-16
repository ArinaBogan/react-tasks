import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task43() {
    const [img, setImg] = useState('');

    useEffect(() => {getData()}, []);

    const getData= async ()=>{
        const resonse=await axios.get('https://dog.ceo/api/breeds/image/random');
        setImg(resonse.data)
    }

    return (
        <>
            <h1>Задача 43</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                https://dog.ceo/api/breeds/image/random. API возвращает ссылку на случайные
                изображения. Ваша задача отображать картинки в img.</p>

            <img src={img.message} alt="" />
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task43;