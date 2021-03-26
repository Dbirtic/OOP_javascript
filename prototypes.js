// constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

};

console.log("Third script");

// getSummary - prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge - prototype
Book.prototype.getAge = function() {return `${this.title} is ${new Date().getFullYear() - this.year} years old`;};

// revise - prototype
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

// instantiate an object
const book4 = new Book("Book Four", "John Doe", "2018");
const book5 = new Book("Book Five", "Jane Doe", "2017");

console.log(book4.getSummary());
console.log(book4.getAge());
book4.revise("2021");
console.log(book4);