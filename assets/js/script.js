
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
        randomMail: ''
      }
    }
    mounted() {
        get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response);
                this.randomMail.push(response.data.response);
                
            })
        }
        
      }
  ).mount('#app')