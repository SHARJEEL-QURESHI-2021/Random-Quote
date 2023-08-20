function quote() {
    var div = document.getElementById("div");
    var quotes = [
        "The only way to do great work is to love what you do.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Life is really simple, but we insist on making it complicated.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "The only thing we have to fear is fear itself.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Don't watch the clock; do what it does. Keep going.",
    ];

    var random = Math.floor(Math.random() * quotes.length);
    div.innerText = quotes[random];
}

quote()