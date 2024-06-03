const app = Vue.createApp({
    data() {
        return {
            flaga: true,
            ships: [
                {nazwa: "Pinassa", wypornosc: "40", szybkosc: 14},
                {nazwa: "Sloop", wypornosc: "60", szybkosc: 12},
                {nazwa: "Barka", wypornosc: "80", szybkosc: 10}

            ]
        } 
    },
    methods: {
        przestawFlage () {
            this.flaga=!this.flaga
            console.log(this.flaga)
        }
        
    }
}) 

app.mount('#app')