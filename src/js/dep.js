
let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');
let block4 = document.querySelector('.block4');

let btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let title = document.createElement('h3');
    let text = document.createElement('p');
    title.innerHTML = arr[0].za;
    text.innerHTML = arr[0].text;
    block.append(title, text);


    let title2 = document.createElement('h3');
    let text2 = document.createElement('p');
    title2.innerHTML = arr[1].protiv;
    text2.innerHTML = arr[1].text2;
    block2.append(title2, text2);

    let title3 = document.createElement('h3');
    let text3 = document.createElement('p');
    title3.innerHTML = arr[2].nebil;
    text3.innerHTML = arr[2].text3;
    block3.append(title3, text3);


    let title4 = document.createElement('h3');
    let text4 = document.createElement('p');
    title4.innerHTML = arr[3].init;
    text4.innerHTML = arr[3].text4;
    block4.append(title4, text4)


});

let arr = [
    {
        "za": 'ПРОГОЛОСОВАЛ ЗА',
        "text": 'Закон о сохранении природы,  ' +
            'Закон об отмене налогов,  ' +
            'Закон об образовании,  ' +
            'Закон о запрете продажи спиртных напитков после 23 часов ',

    },
    {
        "protiv": 'ПРОГОЛОСОВАЛ ПРОТИВ',
        "text2": 'Закон об отмене Конституции,    ' +
            'Закон о вынесении смертного приговора,  ' +
            'Закон о законном браконьерстве  ',

    },
    {
        "nebil": 'ОТСУТСТВОВАЛ',
        "text3": 'Закон о многоженстве,  ' +
            'Закон Ома,  ' +
            'Закон о запрете работы частных компаний,  ' +
            'Закон о ароматизации общественного транспорта',

    },
    {
        "init": 'ИНИЦИАТОР',
        "text4": 'Закон об отмене налогов,   ' +
            'Закон о запрете продажи спиртных напитков после 22 часов,  ' +
            'Закон о поставке продукции из за рубежа, ' +
            'Закон об уничтожении туалетов-дырок '
    }
];
