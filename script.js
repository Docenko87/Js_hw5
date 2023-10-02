// --------- Задание 1 --------- //
// Создать объект, описывающий автомобиль (производитель, 
//     модель, год выпуска, средняя скорость), и следующие функции 
//     для работы с этим объектом.
//     1. Функция для вывода на экран информации об автомобиле.
//     2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//     Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
let car = {
    manufacturer: "Japan",
    model: "Nissan",
    issueAge: 2018,
    averageSpeed: 95,
    showInformation: function() {
      alert(
        "Manufacturer: " +
          car.manufacturer +
          "\nModel: " +
          car.model +
          "\nAge of issue: " +
          car.issueAge +
          "\nAverage Speed: " +
          car.averageSpeed +
          " км/ч"
      );
    },
    countingTime: function(distance) {
      return distance / this.averageSpeed;
    }
  };
  
  car.showInformation();
  var hours = car.countingTime(600);
  alert("Вам нужно " + hours + " часов чтобы преодолеть эту дистанцию!");

// --------- Задание 2 --------- //
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
// let fraction = {
//     nominator: 2,
//     denominator: 3,
//     addition: function(nominator, denominator) {
//       let sum = this.nominator / this.denominator + nominator / denominator;
//       alert("Sum of fractions is " + sum);
//     },
//     subtruction: function(nominator, denominator) {
//       let subtr = this.nominator / this.denominator - nominator / denominator;
//       alert(" Subtruction is: " + subtr);
//     },
//     product: function(nominator, denominator) {
//       let product_ =
//         (this.nominator / this.denominator) * (nominator / denominator);
//       alert("Product is " + product_);
//     },
//     division: function(nominator, denominator) {
//       let div = this.nominator / this.denominator / (nominator / denominator);
//       alert("Division of these fractions is " + div);
//     }
//   };
  
//   var nominator, denominator;
//   nominator = prompt("Enter a nominator: ");
//   denominator = prompt("Enter a denominator: ");
//   fraction.addition(nominator, denominator);
//   fraction.subtruction(nominator, denominator);
//   fraction.division(nominator, denominator);
//   fraction.product(nominator, denominator);

// --------- Задание 3 --------- //
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество 
// секунд.
// 3. Функция изменения времени на переданное количество 
// минут.
// 4. Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75».
// let time = {
//     hours: 12,
//     minutes: 45,
//     seconds: 17,
//     showTime: function() {
//       alert(`${this.hours}:${this.minutes}:${this.seconds}`);
//     },
//     addSeconds: function(seconds) {
//       if (seconds <= 0) {
//         alert("You entered incorrect time!");
//       } else if (seconds + this.seconds >= 60) {
//         let differenceMin = Math.floor((this.seconds + seconds) / 60);
//         this.seconds = (this.seconds + seconds) % 60;
//         this.addMinutes(differenceMin);
//       } else {
//         this.seconds += seconds;
//       }
//     },
//     addMinutes: function(minutes) {
//       if (minutes <= 0) {
//         alert("You entered incorrect time!!!");
//       } else if (this.minutes + minutes >= 60) {
//         let differenceHours = Math.floor((this.minutes + minutes) / 60);
//         this.minutes = (this.minutes + minutes) % 60;
//         this.addHours(differenceHours);
//       } else {
//         this.minutes += minutes;
//       }
//     },
//     addHours: function(hours) {
//       if (hours <= 0) {
//         alert("You entered incorrect time!");
//       } else if (hours + this.hours >= 24) {
//         this.hours = (this.hours + hours) % 24;
//       } else {
//         this.hours += hours;
//       }
//     }
//   };
  
//   time.showTime();
//   time.addHours(25);
//   time.showTime();
//   time.addMinutes(120);
//   time.showTime();
//   time.addSeconds(360);
//   time.showTime();