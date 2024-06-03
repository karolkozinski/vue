const app = Vue.createApp({
    data() {
        return {
            flaga: true,
            url: "https://www.google.com/",
            ships: [
                {nazwa: "Pinassa", wypornosc: "40", szybkosc: 14, img: "img/Pinnace.webp", isFav: true},
                {nazwa: "Sloop", wypornosc: "60", szybkosc: 12, img: "img/Sloop.png", isFav: false},
                {nazwa: "Barka", wypornosc: "80", szybkosc: 10, img: "img/Barque.webp", isFav: true}

            ]
        } 
    },
    methods: {
        przestawFlage () {
            this.flaga=!this.flaga
            console.log(this.flaga)
        },
        changeFav (ship) {
            ship.isFav=!ship.isFav
        }
        
    }
}) 

app.mount('#app')