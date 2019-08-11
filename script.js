let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

/* for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (b != null) && (a != null) && (a.length <= 50) && (a != "") && (b != "")) {
        appData.expenses[a] = b;
        console.log(i);
     } else {
        console.log("что-то пошло не так");
     }
} */

let i = 0;
/* while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (b != null) && (a != null) && (a.length <= 50) && (a != "") && (b != "")) {
        appData.expenses[a] = b;
        console.log(i);
     } else {
        console.log("что-то пошло не так");
     }
     i++;
} */

/*  do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a) === "string") && (b != null) && (a != null) && (a.length <= 50) && (a != "") && (b != "")) {
        appData.expenses[a] = b;
        console.log(i);
     } else {
        console.log("что-то пошло не так");
     }
     i++;
} while (i < 2); */

function chooseExpenses () {
    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) && (a.length <= 50) && (a != "") && (b != "")) {
            appData.expenses[a] = b;
            console.log("done");
         } else {
            i = i - 1;
            console.log("что-то пошло не так");
         }
         i++;
    } while (i < 2); 
}

// расчет дневного бюджета  и вывод на экран этого значения как одну функцию
function detectDayBudget() {
    chooseExpenses();

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

//Оформить блок кода с расчетом уровня достатка как отдельную функцию 
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("ошибка");
    }
}

detectLevel();

//Создать функцию для определения необязательных расходов 
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) && (a.length <= 50) && (a != "") && (b != "")) {
           appData.optionalExpenses[a] = b;
           console.log("done");
        } else {
            i = i - 1;
            console.log("что-то пошло не так");
        }        
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

         appData.monthIncome = save/100/12*percent;
         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);   
    }
}

checkSavings();