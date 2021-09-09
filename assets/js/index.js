"use strict";

/* 1. Вычислить сумму первых N элементов последовательности. Параметр N задает пользователь.Например n=4, 1+2+3+4) */

/*Рекурсия */
/**
 *
 * @param {number} number
 * @returns {number} сумма чисел от 1 до number
 */
function sumElements(number) {
  let result = number;
  if (number > 1) {
    result += sumElements(number - 1);
  }
  return result;
}

console.log(sumElements(4));
console.log("===================");

/*for */
function sumElem(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
}

console.log(sumElem(4));
console.log("===================");
//==========================================================================================================

/* 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные.) */

const student = {
  firstName: "Null",
  lastName: "Nullovich",
  gender: "male",
  contatsInformation: {
    adress: {
      city: "Zaporizhzhya",
      street: "Soborniy",
      house: 1,
    },
    email: "test123@test.com",
    phone: "+380671234567",
  },
};
console.log(student);
console.log("===================");
//==========================================================================================================

/* 2.2 Создать объект университета, который содержит свойства, о факультете и кафедре.*/

const univercity = {
  name: "Zaporizhzhia National University",
  faculty: "economy",
  chair: "finance",
};
console.log(univercity);
console.log("===================");
//==========================================================================================================

/*2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента */

student.university = univercity;
console.log(student);
console.log("===================");
//==========================================================================================================

/*2.4 Реализовать функцию вывода на экран всю информацию о студентe */

function showStudent(student) {
  const {
    firstName,
    lastName,
    gender,
    contatsInformation: {
      adress: { city, street, house },
      email,
      phone,
    },
    university: { name, faculty, chair },
  } = student;
  console.log(
    `Student: ${firstName} ${lastName} 
    Gender: ${gender}
    Contacts information: 
    Adress: ${city} ${street} ${house}
    E-mail: ${email}
    Phone: ${phone}
    University: ${name} ${faculty} ${chair}`
  );
}
showStudent(student);
console.log("===================");
//==========================================================================================================

/* 3.1 Создать числовой массив и проинициализировать его из 25 элементов.*/

const array = new Array(25)
  .fill(null)
  .map((_, i) => Math.floor(Math.random() * 15));
console.log(array);
console.log("===================");
//==========================================================================================================

/* 3.2 Вывести элементы с четными индексами */

/* for */
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}
console.log("===================");

/*forEach */
array.forEach(function (element, index) {
  if (index % 2 === 0) {
    console.log(element);
  }
});
console.log("===================");
//==========================================================================================================

/*3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)*/

/* for */
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}
console.log("===================");

/* for of */
for (let item of array) {
  if (item % 2 === 0) {
    console.log(item);
  }
}
console.log("===================");

/*forEach */
array.forEach(function (element, index) {
  if (element % 2 === 0) {
    console.log(element);
  }
});
console.log("===================");
//==========================================================================================================

/*3.4 Вывести индексы нулевых элементов (элемент равен нулю)*/

/*for */
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    console.log(i);
  }
}
console.log("===================");

/* forEach*/
array.forEach(function (element, index) {
  if (element === 0) {
    console.log(index);
  }
});
console.log("===================");
//==========================================================================================================

/*3.5 Подсчитать количество нулевых элементов*/

/*for */
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    count++;
  }
}
console.log(count);
console.log("===================");

/*for of */
let count1 = 0;
for (let item of array) {
  if (item === 0) {
    count1++;
  }
}
console.log(count1);
console.log("===================");

/* forEach*/
let counter = 0;
array.forEach(function (element, index) {
  if (element === 0) {
    counter++;
  }
});
console.log(counter);
console.log("===================");
//==========================================================================================================

/* 4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер) */
class Book {
  constructor(author, bookName, year, press) {
    this.author = author;
    this.bookName = bookName;
    this.year = year;
    this.press = press;
  }
}

class ElectronicBook extends Book {
  constructor(author, bookName, year, press, format, id) {
    super(author, bookName, year, press);
    this.format = format;
    this.id = id;
  }
}

const book = new Book(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone ",
  2017,
  "Bloomsbury Children's"
);
console.log(book);

const electronicBook = new ElectronicBook(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone ",
  2017,
  "Bloomsbury Children's",
  "pdf",
  1
);
console.log(electronicBook);
console.log("===================");
//==========================================================================================================

/*5
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
это целое число, которая функция принимает в качестве параметра, с
такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; */

function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log("fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("buzz");
      continue;
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(30);
//==========================================================================================================
