// Домашнее задание

// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title(название) - строка, название книги.
// Свойство author(автор) - строка, имя автора книги.
// Свойство pages(количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).

// // Пример использования класса
// const book = new Book("BookName1", "Author1", 123);
// book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Управление библиотекой книг\n\nНазвание книги: ${this.title}\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}`);
    }
}

const book = new Book('Анастасия', 'Владимир Мегре', 150);
book.displayInfo();

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name(имя) - строка, имя студента.
// Свойство age(возраст) - число, возраст студента.
// Свойство grade(класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.

// // Пример использования класса
// const student = new Student("John Smith", 16, "10th grade");
// student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Управление списком студентов\n\nИмя: ${this.name}\nВозраст: ${this.age}\nКласс: ${this.grade}`);
    }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo();