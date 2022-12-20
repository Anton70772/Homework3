const student = "Полищук Антон Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...


const users =[
    {name: 'Пономарев Андрей Алексеевич', gender: 'М', birth: '11.12.1980'},
    {name: 'Рыбакова Алина Семёновна', gender: 'Ж', birth: '16.04.1974'},
    {name: 'Молчанов Даниил Ильич', gender: 'М', birth: '21.03.1984'},
    {name: 'Смирнова София Львовна', gender: 'Ж', birth: '02.01.1987'},
    {name: 'Владимиров Артём Григорьевич', gender: 'М', birth: '07.12.1990'},
    {name: 'Маслова Елизавета Егоровна', gender: 'Ж', birth: '10.10.1997'},
    {name: 'Назарова Вера Романовна', gender: 'Ж', birth: '01.05.1983'},
    {name: 'Иванов Иван Фёдорович', gender: 'М', birth: '05.05.1999'},
    {name: 'Дмитриев Алексей Григорьевич', gender: 'М', birth: '12.11.1998'},
    {name: 'Овчинников Платон Александрович', gender: 'М', birth: '26.05.1999'},
    {name: 'Мартынова Софья Тимуровна', gender: 'Ж', birth: '07.06.1995'},
    {name: 'Соколов Михаил Адамович', gender: 'М', birth: '11.03.1979'}
]

let countTotal = 0;
let countMale = 0;
let countFemale = 0;

let string = "";
for(let i=0;i<users.length;i++){
    countTotal++;
    if(users[i].sex==="мужчина"){
        countMale++;
    } else if(users[i].sex==="женщина"){
        countFemale++;
    }
    string+=users[i].name;
    string+=' ';
    string+=" , ";
    string+=users[i].gender[0];
    string+=" , ";
    string+="Возраст: ";
    string+= (2022-users[i].year);

    string+="\n";
}

alert(
    "Всего гостей: " + countTotal + "\n" +
    "Мужчин: " + countMale + "\n" +
    "Женщин: " + countFemale + "\n" +
    "Список гостей: \n" + string

);