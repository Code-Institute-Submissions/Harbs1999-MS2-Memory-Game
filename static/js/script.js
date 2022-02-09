$(document).ready(function() {
$("body").css("background-color", "black")
// All Cards that will show on board
const cards = [
    {
        name: "green goblin",
        img: "static/images/green-goblin.jpg"
    },
    {
        name: "green goblin",
        img: "static/images/green-goblin.jpg"
    },
    {
        name: "hulk",
        img: "static/images/hulk.jpg"
    },
    {
        name: "hulk",
        img: "static/images/hulk.jpg"
    },
    {
        name: "iron man",
        img: "static/images/iron-man.jpg"
    },
    {
        name: "iron man",
        img: "static/images/iron-man.jpg"
    },
    {
        name: "scarlet witch",
        img: "static/images/scarlet-witch.jpg"
    },
    {
        name: "scarlet witch",
        img: "static/images/scarlet-witch.jpg"
    },
    {
        name: "spiderman",
        img: "static/images/spiderman.jpg"
    },
    {
        name: "spiderman",
        img: "static/images/spiderman.jpg"
    },
    {
        name: "thor",
        img: "static/images/thor.jpg"
    },
    {
        name: "thor",
        img: "static/images/thor.jpg"
    },
    {
        name: "wolverine",
        img: "static/images/wolverine.jpg"
    },
    {
        name: "wolverine",
        img: "static/images/wolverine.jpg"
    },
]

let selectedCards = [];
let selectedCardsId = [];
let correctCards = [];

// Randomise card locations
cards.sort(() => 0.5 - Math.random());

//Add cards to board
function setupBoard() {
    for (let i = 0; i < cards.length; i++) {
        let card = $(document.createElement('img'))
        $(card).attr({
            src: "static/images/marvel-card-back.jpg",
            alt: "card",
            data: i,
            class: "col-md-2 col-4 img-responsive"
        })
        $(".grid").append(card)
    }

}

//Flip Card functionality
function flipCard() { 
    $("img").click(function () {
        let cardData = $(this).attr('data')
        selectedCards.push(cards[cardData].name)
        selectedCardsId.push(cardData)
        $(this).attr('src', cards[cardData].img)

        if (selectedCards.length === 2) {
            setTimeout(checkIfMatch, 200)
        }
    })
}

// Compare selected cards tp see if match /
// If complete board tell player they win and start again
function checkIfMatch() {
    const optionOneId = selectedCardsId[0]
    const optionTwoId = selectedCardsId[1]
    if (selectedCards[0] === selectedCards[1]) {
        alert("Correct!")
        correctCards.push(selectedCards)
        $($("img")[optionOneId]).hide("slow")
        $($("img")[optionTwoId]).hide("slow")  
    } else {
        $($("img")[optionOneId]).attr("src", "static/images/marvel-card-back.jpg")
        $($("img")[optionTwoId]).attr("src", "static/images/marvel-card-back.jpg")
        alert("Try Again!")
    }
    selectedCards = []
    selectedCardsId = []
    if (correctCards.length === 7) {
    alert("You got all cards!")
    $("#play-again").html("<a href='index.html' class='btn btn-primary col-12'>Play Again</a>")
}
    $("#score").html(correctCards.length)
}  

// Sets timer and counts down to 0, ends game if either timer 0 or all cards cleared
function timer() {
let seconds = 60;
const intervalId = setInterval(() => {
  seconds -= 1;
  $("#timer").html(seconds)
if (seconds === 0) {
    $("img").hide("fast");
    $("#play-again").html("<a href='index.html' class='btn btn-primary col-12'>Play Again</a>")
    clearInterval(intervalId);
  }
if (correctCards.length === 7) {
    clearInterval(intervalId);
}
}, 1000);
}

setupBoard();
flipCard();
timer();
});