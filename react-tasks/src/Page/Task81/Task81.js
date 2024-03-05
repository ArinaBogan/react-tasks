import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { task81Context } from '../../Context/Context';

function Task81() {

    const objWeather = useContext(task81Context)

    return (
        <>
            <h1>Задача 81</h1>
            <p> Разработайте приложение для отображения текущей погоды. Используйте
                useContext, чтобы хранить информацию о погоде (температура, влажность,
                скорость ветра и т. д.). В компоненте отобразите эту информацию о погоде.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <p>{objWeather.temperature}</p>
            <p>{objWeather.humidity}</p>
            <p>{objWeather.windSpeed}</p>
        </>);
}

export default Task81;