// 4 lab
// 1
let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function() {
    const div = document.getElementById("1")
    row = "<div class='alert alert-primary' role='alert'>ПРИВЕТ<div>"
    div.innerHTML = row
};

function printHi() { // выведет сообщение по нажатию кнопки
    user.sayHi();
}

// 2
let customer = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 30,
    email: "ivanov@example.com",
    phone: "+7 (999) 123-45-67"
};

customer.showInformation = function() {
    const ul = document.getElementById("main")

    const li1 = document.createElement("li")
    li1.innerHTML = "name: " + customer.firstName
    ul.appendChild(li1)

    const li2 = document.createElement("li")
    li2.innerHTML = "age: " + customer.age
    ul.appendChild(li2)

    const li3 = document.createElement("li")
    li3.innerHTML = "email: " + customer.email
    ul.appendChild(li3)
}

function showInfoCust() {
    customer.showInformation()
}

// 3
// объекты пользователей
const users = [
    {
        id: 1,
        name: "Иван",
        email: "ivan@example.com",
        phone: "+7 (111) 111-11-11"
    },
    {
        id: 2,
        name: "Ольга",
        email: "olga@example.com",
        phone: "+7 (222) 222-22-22"
    },
    {
        id: 3,
        name: "Петр",
        email: "petr@example.com",
        phone: "+7 (333) 333-33-33"
    }
  ];
  
  // объекты заказов
  const orders = [
    {
        id: 1,
        userId: 1,
        restaurantId: 1,
        items: [
            {
            name: "Пицца",
            price: 500
            },
            {
            name: "Салат",
            price: 300
            }
        ],
        total: 800,
        date: "2021-05-01"
        },
        {
        id: 2,
        userId: 2,
        restaurantId: 2,
        items: [
            {
            name: "Стейк",
            price: 1000
            },
            {
            name: "Картофель фри",
            price: 200
            }
        ],
        total: 1200,
        date: "2021-05-02"
        },
        {
        id: 3,
        userId: 3,
        restaurantId: 1,
        items: [
            {
            name: "Бургер",
            price: 600
            },
            {
            name: "Кола",
            price: 100
            },
            {
            name: "Картофель фри",
            price: 200
            }
        ],
        total: 900,
        date: "2021-05-03"
    }
  ];
  
  // объекты ресторанов
const restaurants = [
    {
        id: 1,
        name: "Пиццерия",
        address: "ул. Пиццерная, 1"
    },
    {
        id: 2,
        name: "Стейк-хаус",
        address: "ул. Стейковая, 2"
    }
];


function showOrders() {
    const div = document.getElementById("3")
    orders.forEach(order => {
    const user = users.find(user => user.id === order.userId);
    const restaurant = restaurants.find(restaurant => restaurant.id === order.restaurantId);

    const orderItem = document.createElement("li");
    orderItem.innerHTML = `
        <strong>Заказ #${order.id}</strong><br>
        <span>Пользователь: ${user.name}</span><br>
        <span>Ресторан: ${restaurant.name}</span><br>
        <span>Дата: ${order.date}</span><br>
        <span>Сумма заказа: ${order.total} руб.</span>
    `;
    div.appendChild(orderItem);
    });
}


// 4
function MyGroup() {
    this.names = ["Alice", "Bob", "Charlie", "David"];
    this.showNames = function() {
        const div = document.getElementById("4");
        div.innerHTML = "My group members are: " + this.names.join(", ");
    };
  }
  
let myGroup = new MyGroup();

function showGroupNames() {
    myGroup.showNames(); 
}

// 5
class Student {
    constructor(name) {
        this.name = name;
        this.showInfo = function () {
            const div = document.getElementById("5");
            div.innerHTML = `Hello, my name is : ${this.name}`
        };
    }
}

function showStudentName() {
    const name = document.getElementById("name").value 
    const div = document.getElementById("5")
    if(name == "") {
        text = "<div class='alert alert-danger' role='alert'>Name is not defind</div>"
        div.innerHTML = text
    } else {
        let student = new Student(name);
        student.showInfo();
    }
}

// 5 lab
// 2
function checkString(){
    var string = document.getElementById("string").value

        str = string.toLowerCase().split(" ") 
        var newString = ""
        for (let i = 0; i < str.length; i++){ 
            newString = newString + str[i]
        }        
        const reversedStr = Array.from(newString).reverse().join('') 
        
        if (newString == reversedStr){ 
            const div = document.getElementById("6")
            var rows = "<div class='alert alert-success' role='alert'> String is palindrom!</div>"
            div.innerHTML = rows
        }
        else{
            const div = document.getElementById("6")
            var rows = "<div class='alert alert-danger' role='alert'> String is NOT palindrom!</div>"
            div.innerHTML = rows 

        }

}


// 3
function square(){
    var numbers = document.getElementById("numbers").value
    var nums = numbers.split(" ")
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        el = parseInt(nums[i])
        if(el < 0){
            nums[i] = el * el
        }
    }
    var rows = "<ul class='list-group'>"
    rows += "<li class='list-group-item'>Result : [" + nums + "] </li>"
    rows += "</ul>"
    const div = document.getElementById("7")
    div.innerHTML = rows  
}

// 4
class User {
    constructor(name) {
      this.name = name;
    }
    showName() {
      const element = document.getElementById("8")
      element.textContent = `USERNAME: ${this.name}`;
    }
  }

function addUser(){
    const names = document.getElementById("username").value
    const user = new User(names)
    user.showName() 
}

// 5
class User2 {
    constructor(name) {
        this.name = name;
    }
        
    sayHello() {
        const element = document.getElementById("9")
        element.innerHTML = `Привет, ${this.name}!`
        // document.body.appendChild(element);
    }
}


function rewrite(){
    const user = new User2('Вася')
    user.sayHello()
}

class Name {
    constructor(name) {
        this.name = name;
    }

    reverseName(){
        const element = document.getElementById("10")
        const reversed = Array.from(this.name).reverse().join('')
        element.innerHTML = reversed
    }
}

// 6
function reverse(){
    const name = document.getElementById("namereverse").value
    const n = new Name(name)
    n.reverseName(n) 

}