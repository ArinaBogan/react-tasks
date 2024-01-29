import { Link } from 'react-router-dom';

function Task15() {
    const pwd1 = '123@45678';
    const pwd2 = '123@45678';

    function check() {
        try {
            if (!/^[\w\d\@\!\#\$\^\&\*]{8,}$/gm.test(pwd1 || pwd2)) throw new Error('некорректный пароль')
            if (pwd1 === pwd2) {
                console.log(true);
            } else {
                console.log(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>Задача 15</h1>
            <p>На входе 2 статичные переменные пароля. По клику на кнопку необходимо
                реализовать метод валидации. Написать регулярное выражение: пароль от 8
                символов, содержит числа, буквы, !@#$^&*. Результат отобразить в консоль
            </p>
            <button onClick={check}>click</button>

            <p><Link to='/'>Перейти на главную страницу</Link></p>
        </>);
}

export default Task15;