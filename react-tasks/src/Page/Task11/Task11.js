import { Link } from 'react-router-dom';
import img1 from './assets/code.png';
import img2 from './assets/code1.png';
import img3 from './assets/code2.png';

function Task11() {
    const arr = [
        {
            title: 'Оливъе',
            description: 'Салат',
            image: img1
        },
        {
            title: 'Борщ',
            description: 'Суп',
            image: img2
        },
        {
            title: 'Шаурма',
            description: 'Вредная гадость',
            image: img3
        }
    ];
    
    const res = arr.map((el) => {
        return (
            <div style={{ margin: '10px', padding: '10px' }}>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <img src={el.image}></img>
            </div>
        )
    })
    return (
        <>
            <h1>Задача 11</h1>
            <p>Реализуйте компонент, который принимает массив объектов с полями title –
                название рецепта, description – описание рецепта и image – картинка блюда. Для
                каждого объекта создайте карточку с заголовком, описанием и изображением.
                Добавьте немного стилей

            </p>

            <div>{res}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task11;