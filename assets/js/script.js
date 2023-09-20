/*
1 - Crea una variabile showList impostata a false inizialmente
2 - Dopo il cilco imposta this.showList a true
3 - nel ul inserisci un v-if="showList"
*/



const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            randomMails: [],
            showList: false
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    console.log(response);
                    this.randomMails.push(response.data.response);

                })
        }

        this.showList = true
    }

}

).mount('#app')