const TYPE = {
    CR: 'critical',
    NE: 'not_exactly',
    ST: 'standart'
};

const news = [
    {
        title: 'я поїв', 
        data: 'сьогодні',
        price: '100',
        type: 'critical',
        subtitle: 'курку', 
        content: 'сьогодні був веселий ...',
        image: ['https://dadada12sa','https://dadad122121a'],
        links: ['https://da1212','https://dadada21212a'],
        partners: [{
            title: 'ми за добре',
            site: 'https://dadadawdsa',
            keyword: ['ми добрі', 'ми гарні']
        }, {
            title: 'ми за добре2',
            site: 'https://dadadawdsa2',
            keyword: ['ми добрі2', 'ми гарні2']
        }],
    },     {
        title: 'я поїв3', 
        subtitle: 'курку3', 
        content: 'сьогодні був веселий ...3',
        image: ['https://dadada12sa3','https://dadad122121a3'],
        links: ['https://da12123','https://dadada21212a3'],
        partners: [{
            title: 'ми за добре3',
            site: 'https://dadadawdsa3',
            keyword: ['ми добрі', 'ми гарні3']
        }, {
            title: 'ми за добре234',
            site: 'https://dadadawdsa23',
            keyword: ['ми добрі2', 'ми гарні23']
        }],
    },
];

if (news.length === 0 || !news) {
    console.log('новини відсутні')
} else {
    // const firstNews = news[0];
    // const secondNews = news[1];
    // for (let i = 0; i < news.length; i++) {
    //     const newsItem = news[i];

    //     if (newsItem.partners.length === 0) {
    //        continue;
    //     }
        // for (let j = 0; j < newsItem.partners.length; j++) {
        //     const partnersItem = newsItem.partners[j];
        //     console.log(partnersItem.site)
        // } 
        // console.log(newsItem.title);
        let hasCriticalNews = false;

        for (let i = 0; i < news.length; i++) {
            const newsItem = news[i];
            // if (!hasCriticalNews && newsItem.type === TYPE.CR) {
            //     hasCriticalNews = true;
            // }
            console.log(newsItem);
            if (newsItem.type === TYPE.CR) {
                 hasCriticalNews = true;
                 break;
                
        }
    }
        if (hasCriticalNews) {
            console.log('Людям з слабкою психікою не відкривати');
        }

   
    

    // if (firstNews.price <= ) {
    //     console.log(firstNews.price)
    // }

    // if (firstNews.image.length >= 2) {
    //     console.log(firstNews.image[0]);
    //     console.log(firstNews.image[1]);
    // }




    // if ('data' in firstNews) {
    //     console.log(`Опубліковано ${firstNews.data} - ${firstNews.title}`);
    // }
    // if ('title' in firstNews &&
    //     'subtitle' in firstNews) {
    //         console.log(firstNews.title + ' - ' + firstNews.subtitle);
    //     }
    // if (!('data' in secondNews)) {
    //     console.log(secondNews.title);
    // }

    // console.log(news[0].title);
    // console.log(news[1].title);
};

// function getLength(string) {
//     if (!string) {
//         return 0;
//     }
//     return string.length;
// }

// const  value = getLength();

// console.log(value);

// function average(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//      const value = array[i];
//      sum += value;
//     }

//         return sum / array.length
// }

// console.log(average([1,2,3,4,5]));

// function getStrings(array, maxLength = 0) {
//     const result = []; 

//     if (maxLength === 0) {
//         return result;
//     }
//     for (let i = 0; i < array.length; i++) {
//         const value = array[i];
        
//         if (value.length >= maxLength) {
//             const index = result.length;
//             result[index] = value;
//             // result.push(value);
//         }
//     }
//     return result;
// }

// console.log(getStrings(['Привет', 'и', 'п', 'мир'], ));

function getUniq(array) {
    const result = [];

    const obj = {};

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (obj[value]) {
            obj[value] =  obj[value] + 1;
        } else {
            obj[value] = 1;
        }
    }
    for (const key in obj) {
        const value = obj[key];
        if (value === 1) {
           result.push(+key);
        }
    }
    return result;
}

console.log(getUniq([1,1,2,3,2,5,4,1]))


console.log('А продукт');
addProduct();

console.log('Б продукт');
addProduct();

console.log('В продукт');
addProduct();


function addProduct() {
    const isAvailable = isProductAvailable();
    if (isAvailable) {
        const blocked = isBlocked();
        if (blocked) {
            console.log('Ви Заблокованні')
        }
        else {
            const possible = possibleToDelivery();
            
            if (possible) {
                console.log ('Продукт в корзині')
            }
            else {
                console.log('нема можливості доставить')
            }
        }
    }
    else {
        console.log('продукт відсутній')
    }
}


function isProductAvailable() {

}

function isBlocked() {

}

function possibleToDelivery() {

}




function getFilms(title = 'Всі фільми') {
    return {
        filmTitle: title,
        films: getFilmsArray()
    };
}

function getFilmsArray() {
    const films = [];

    addNewFilm({ name: 'Хроники Нарнии' }, 0);
    addNewFilm({ name: 'Человек паук' }, 1);
    addNewFilm({ name: 'Что-то еще' }, 2);
    addNewFilm({ name: 'Что-то ещ' });

    
    
    function addNewFilm(film, index) {
        if (index === undefined)  {
            console.log('бракує індексу');
            return;
        }

        films[index] = film;
    }

    return films;
}



const myFilms = getFilms();
console.log(myFilms);


const data = [
    {id: 10, name: 'Alex', money: 1000 },
    {id: 11, name: 'John', money: 500 },
    {id: 55, name: 'Anna', money: 5500 },
];



getUsersMoney({id: 10 }, (user) =>{
    console.log(user);
});
getUsersMoney({id: 11 }, (user) =>{
    console.log(user);
});
getUsersMoney({id: 55 }, (user) =>{
    console.log(user);
});


function getUsersMoney(userInfo, callback) {
    const id = userInfo.id;
    
    let result = null;


    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        if (user && user.id === id) {
            result = user;
        }

        console.log(user);
    }

    callback(result);

}