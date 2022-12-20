const student = "Полищук Антон Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...


var arr = [];

arr[0] = {

    surname: "Пономарев",
    name: "Андрей",
    family: "Алексеевич",
    pol: "мужчина",
    day: 11,
    month: 12,
    year: 1980,
}

arr[1] = {

    surname: "Рыбакова",
    name: "Алина",
    family: "Семенова",
    pol: "женщина",
    day: 16,
    month: 04,
    year: 1974,
}

arr[2] = {

    surname: "Молчанов",
    name: "Даниил",
    family: "Ильич",
    pol: "мужчина",
    day: 21,
    month: 03,
    year: 1984,
}

arr[3] = {

    surname: "Смирнова",
    name: "София",
    family: "Львовна",
    pol: "женщина",
    day: 02,
    month: 01,
    year: 1987,
}

arr[4] = {

    surname: "Владимиров",
    name: "Артем",
    family: "Григорьевич",
    pol: "мужчина",
    day: 07,
    month: 12,
    year: 1990,
}

arr[5] = {

    surname: "Маслова",
    name: "Елизавета",
    family: "Егоровна",
    pol: "женщина",
    day: 10,
    month: 10,
    year: 1997,
}

arr[6] = {

    surname: "Назарова",
    name: "Вера",
    family: "Романовна",
    pol: "женщина",
    day: 01,
    month: 05,
    year: 1983,
}

arr[7] = {

    surname: "Иванов",
    name: "Иван",
    family: "Федорович",
    pol: "мужчина",
    day: 05,
    month: 05,
    year: 1999,
}

arr[8] = {

    surname: "Дмитриев",
    name: "Алексей",
    family: "Григорьевич",
    pol: "мужчина",
    day: 12,
    month: 11,
    year: 1998,
}

arr[9] = {

    surname: "Овчинников",
    name: "Платон",
    family: "Александрович",
    pol: "мужчина",
    day: 26,
    month: 05,
    year: 1999,
}

arr[10] = {

    surname: "Мартынова",
    name: "Софья",
    family: "Тимуровна",
    pol: "женщина",
    day: 07,
    month: 06,
    year: 1995,
}

arr[11] = {

    surname: "Соколов",
    name: "Михаил",
    family: "Адамович",
    pol: "мужчина",
    day: 11,
    month: 03,
    year: 1979,
}


let countTotal = 0;
let countMale = 0;
let countFemale = 0;

let string = "";
for(let i=0;i<arr.length;i++){
    countTotal++;
    if(arr[i].pol==="мужчина"){
        countMale++;
    } else if(arr[i].pol==="женщина"){
        countFemale++;
    }
    string+=arr[i].surname;
    string+=" ";
    string+=arr[i].name[0];
    string+=".";
    string+=arr[i].family[0];
    string+=".";
    string+=" , ";
    string+=arr[i].pol[0];
    string+=" , ";
    string+="Возраст: ";
    string+= (2022-arr[i].year);

    string+="\n";
}

alert(
    "Всего гостей: " + countTotal + "\n" +
    "Мужчин: " + countMale + "\n" +
    "Женщин: " + countFemale + "\n" +
    "Список гостей: \n" + string

);