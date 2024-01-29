import { Link } from 'react-router-dom';

function Task6() {
    const arr = [{
        title: 'movie1',
        description: 'description1'
    },
    {
        title: 'movie2',
        description: 'description2'
    },
    {
        title: 'movie3',
        description: 'description3'
    }];

    const newArr = arr.map((el) => {
        return <div><h1>{el.title}</h1> <p>{el.description}</p></div>
    })

    return (
        <>
            <h1>Задача 6</h1>
            <p>на входе массив из объектов. каждый объект содержит title с
                названием фильма и  description с кратким описанием фильма.
                В h1 отобразить каждый title, в p - description
            </p>

            <div>{newArr}</div>
            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task6;