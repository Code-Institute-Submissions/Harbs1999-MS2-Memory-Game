$(document).ready(function() {
const cards = [
    {
        name: "green goblin",
        img: "/static/images/green-goblin.jpg"
    },
    {
        name: "green goblin",
        img: "/static/images/green-goblin.jpg"
    },
    {
        name: "hulk",
        img: "/static/images/hulk.jpg"
    },
    {
        name: "hulk",
        img: "/static/images/hulk.jpg"
    },
    {
        name: "iron man",
        img: "/static/images/iron-man.jpg"
    },
    {
        name: "iron man",
        img: "/static/images/iron-man.jpg"
    },
    {
        name: "scarlet witch",
        img: "/static/images/scarlet-witch.jpg"
    },
    {
        name: "scarlet witch",
        img: "/static/images/scarlet-witch.jpg"
    },
    {
        name: "spiderman",
        img: "/static/images/spiderman.jpg"
    },
    {
        name: "spiderman",
        img: "/static/images/spiderman.jpg"
    },
    {
        name: "thor",
        img: "/static/images/thor.jpg"
    },
    {
        name: "thor",
        img: "/static/images/thor.jpg"
    },
    {
        name: "wolverine",
        img: "/static/images/wolverine.jpg"
    },
    {
        name: "wolverine",
        img: "/static/images/wolverine.jpg"
    },
]

let selectedCards = []
let selectedCardsId = []

function setupBoard() {
    for (let i = 0; i < cards.length; i++) {
        let card = $(document.createElement('img'))
        $(card).attr({
            src: "/static/images/marvel-card-back.jpg",
            alt: "card",
            data: i,
            class: "col-md-2 col-4 img-responsive"    
        })

        $(card).click(function() {
            let cardData = $(this).attr('data')
            selectedCards.push(cards[cardData].name)
            selectedCardsId.push(cardData)
            $(this).attr('src', cards[cardData].img)

            if (selectedCards.length === 2) {
                setTimeout(checkIfMatch, 500)
            }

        
        })

        $(".grid").append(card)
    }
}

setupBoard();






});