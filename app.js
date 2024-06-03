const app = Vue.createApp({
    data() {
        return {
            flaga: true,
            nazwa: 'pinassa',
            wypornosc: 40,
            x: 0,
            y: 0,
            data: '' 
        } 
    },
    methods: {
        przestawFlage () {
            this.flaga=!this.flaga
            console.log(this.flaga)
        },
        handleEvent(e, data) {
            console.log(e,e.type)
            if (data) {
                console.log(data)
            }
            else {
                console.log('no dejta')
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
}) 

app.mount('#app')