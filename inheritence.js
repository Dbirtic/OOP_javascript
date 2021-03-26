// constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

};

console.log("Fourth script");

// getSummary - prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
};

// inherit prototype functions
Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine
const magazine1 = new Magazine("Gameplay", "People", "2007", "March");

console.log(magazine1.getSummary());