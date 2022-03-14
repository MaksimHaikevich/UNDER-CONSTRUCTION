let startDate = new Date("Dec 31, 2022 23:59:00").getTime();

// Обновляем таймер каждую секунду
let x = setInterval(function () {

    // Получаем текущее время в миллисекундах
    let now = new Date().getTime();

    // Узнаем разницу во времени, между текущей даты и конечной даты
    let diff = (startDate - now);

    // Считаем дни, часы, минуты и секунды
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}, 1000);

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const $sendData = $('#send-data')
    const email = $('#email').val();
    $result.text('');

    if (validateEmail(email)) {
        $result.text('Сorrect email');
        $result.css('color', 'green');
        $sendData.attr('disabled', false)
    } else {
        $result.text('Incorrect email, please enter the correct one');
        $result.css('color', 'red');
        $sendData.attr('disabled', true)

    }
    return false;
}

$('#email').on('input', validate);

const send = (e) => {

    e.preventDefault()
    const $popup = $('#popup')
    const data = {
        email: $('#email').val()
    };
    fetch('', {method: "POST", body: JSON.stringify(data)})
    $popup.css('display', 'flex')
}

$('#send-data').on('click', send)

const hidePopup = () => {
    const $popup = $('#popup')
    $popup.css('display', 'none')
}


$('#close-popup').on('click', hidePopup)


