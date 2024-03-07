import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { task82Context } from '../../Context/Context';

function Task82() {
    const result = useContext(task82Context);

    function changeButton() {
        if (result.flag) {
            result.setFlag(false);
            result.setBackground('black')
            result.setColor('white')
        } else {
            result.setFlag(true);
            result.setBackground('white');
            result.setColor('black')
        }
    }

    return (
        <body style={{ backgroundColor: result.background, color: result.color, width: 1500, height: 900 }}>
            <h1>Задача 82</h1>
            <p> Разработайте простое приложение для переключения между светлой и темной
                темами. Используйте useContext, чтобы хранить информацию о текущей теме
                (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                пользователю переключаться между темами.
            </p>
            <p><Link to='/'>Перейти на главную страницу</Link></p>

            <h1>color</h1>
            <p>green</p>
            <p>blue</p>
            <p>red</p>

            <button style={{ backgroundColor: result.color, color: result.background }} onClick={changeButton}>{result.flag ? 'black' : 'white'} click on </button>


        </body>);
}

export default Task82;