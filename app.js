const app = Vue.createApp({
    data() {
        return {
            flaga: true,
            nazwa: 'pinassa',
            wypornosc: 40
        } 
    },
    methods: {
        przestawFlage () {
            this.flaga=!this.flaga
            console.log(this.flaga)
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log (data)
            }
        }
    }
}) 

app.mount('#app')