// 'use strict';

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHearts = document.querySelector('.heart'),
//       wrapper =  document.querySelector('.wrapper');


//     //   box.style.backgroundColor = 'blue';
//     //   box.style.width = "500px";

//       box.style.cssText = 'background-color: blue; width: 500px';

//       btns[1].style.borderRadius = '50%';
//       circles[0].style.backgroundColor = 'red';

//     //   for (let i = 0; i < hearts.length; i++) {
//     //     hearts[i].style.backgroundColor = 'blue';
//     //   }

//     hearts.forEach(item => {
//         item.style.backgroundColor = 'blue';
//     });

//     const div = document.createElement('div');
//     // const text = document.createTextNode('ТУТ');

//     div.classList.add('black');

//    wrapper.append(div);
// // wrapper.prepend(div);

// // hearts[1].after(div);

// // circles[0].remove();

// // hearts[0].replaceWith(circles[0])
// div.innerHTML = "<h1>Hello World</h1>";

// // div.textContent = "<h1>Hello World</h1>";

// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

// function calculateCircle(radius) {
//  let r = 3.14 * radius ** 2;
//   return r;
// }

function createHTMLElement(tag, id, text) {
  const element = document.createElement(tag);
  element.id = id;
  element.innerText = text;

  return element;
}

const h1Element = createHTMLElement('h1', 'header', 'лох')
console.log(h1Element);


const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
      const {age} = plan;
      const {languages} = plan.skills;
      let str = `Мне ${age} и я владею языками: `;

      languages.forEach(function(lang) {
          str += `${lang.toUpperCase()} `;
      });

      return console.log(str);
  }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
  console.log(personalPlanPeter);