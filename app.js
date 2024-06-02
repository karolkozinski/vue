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
        handleEvent() {
            console.log('działam')
        }
    }
}) 

app.mount('#app')