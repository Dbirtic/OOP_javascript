// Object of protos
const bookProtos = {
    // getSummary - prototype
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    // getAge - prototype
    getAge: function() {
        return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
    }

}

// create object
const book11 = Object.create(bookProtos);
book11.title = "Book eleven";
book11.author = "John Doe";
book11.year = "2021";

const book12 = Object.create(bookProtos, {
    title: {value: "Book twelve"},
    author: {value: "John Doe"},
    year: {value: "2001"}
});

console.log(book12);