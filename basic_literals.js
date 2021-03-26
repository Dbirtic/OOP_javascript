const s = "I'm a string";
console.log(typeof s);

const s2 = new String("Hi");
console.log(typeof s2);

console.log(window);

// object literal
const book_1 = {
    title: "Book1",
    author: "John Doe",
    year: "2013",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book_1.getSummary());