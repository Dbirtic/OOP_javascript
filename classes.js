class Book100 {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}


// instantiate object
const book100 = new Book100('Book Hundred', "John Doe", "2011");

console.log(book100);
console.log(book100.getSummary());

// subclasses

// magazine subclass
class Magazine100 extends Book100{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// instantiate magazine 
const mag100 = new Magazine100("Gameplay", "People", "2007", "March");

console.log(mag100);