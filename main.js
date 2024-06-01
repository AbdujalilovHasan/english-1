document.addEventListener('DOMContentLoaded', function () {
    const correctAnswers = {
        input1: "John is playing soccer",
        input2: "Mary is reading the book",
        input3: "Tom is riding a bike",
        input4: "We are watching TV",
        input5: "John is playing soccer",
        input6: "Mary is reading the book",
        input7: "Tom is riding a bike",
        input8: "We are watching TV",
        input9: "John is playing soccer",
        input10: "Mary is reading the book",
        input11: "Tom is riding a bike",
        input12: "We are watching TV",
        input13: "The book is on the table",
        input14: "She has a new car",
        input15: "You are my best friend",
        input16: "She is going to the market",
        input17: "I am reading a book",
        input18: "The children are playing soccer",
        input19: "He is a good boy",
        input20: "The dog is barking",
        input21: "The kids are playing in the park",
        input22: "He has a new book",
        input23: "They are playing soccer",
        input24: "She is wearing a red dress",
        input25: "The birds are singing",
        input26: "The children are reading books",
        input27: "The students are studying at the library",
        input28: "She is watering the flowers",
        input29: "My brother is helping me",
        input30: "The kids are playing in the park",
    };

    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        console.log(input);
        input.addEventListener('input', function () {
            const inputId = this.id;
            if (this.value === correctAnswers[inputId]) {
                this.classList.remove('incorrect');
                this.classList.add('correct');
            } else {
                this.classList.remove('correct');
                this.classList.add('incorrect');
            }
        });
    });
});