const app = Vue.createApp({
    data() {
        return {
            nazwa: 'pinassa',
            waga: 125
        } 
    },
    methods: {
        changeTitle () {
            this.nazwa="galeon wielki az strasny"
        }
    }
}) 

app.mount('#app')