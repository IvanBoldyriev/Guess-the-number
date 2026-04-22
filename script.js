let number = document.querySelector(".number");
let submit = document.querySelector(".submit");
let random = document.querySelector(".random");
let result = document.querySelector(".result");
let help = document.querySelector(".help");
let attemps = document.querySelector(".attemps");
let error = document.querySelector(".error");
let status = document.querySelector(".status");
let clicks = 0;

let randomNumber = 0;

function goRandom(){
    randomNumber = Math.trunc(Math.random() * 100);

    number.value = "";
    result.innerHTML = "Результат:";
    help.innerHTML = "Подсказка:";
    attemps.innerHTML = "Попытка:";
    status.innerHTML = "Число: Сгенерировано"
    clicks = 0;

    console.log(randomNumber);
}

function success(){
        result.innerHTML = "Результат: Мои поздравления! Получилось";
        help.innerHTML = "Подсказка: В самый раз!";
        status.innerHTML = "Число: Угадано!"
    }

function less(){
    result.innerHTML = "Результат: Пока что не угадали";
    help.innerHTML = "Подсказка: Маловато";
}

function more(){
    result.innerHTML = "Результат: Пока что не угадали";
    help.innerHTML = "Подсказка: Многовато";
}


submit.addEventListener("click", ()=>{
    if(number.value == 0 || randomNumber == 0){
        error.innerHTML = "Ошибка: Число не было сгенерировано компьютером или не введено пользователем.";
        return
    }
    error.innerHTML = "";
    clicks++
    attemps.innerHTML = `Попытка: ${clicks}`

    if (number.value == randomNumber){
        success();
    }

    if (number.value < randomNumber){
        less();
    }

    if(number.value > randomNumber){
        more()
    }

})

random.addEventListener("click", goRandom);

