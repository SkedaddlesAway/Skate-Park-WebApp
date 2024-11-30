const app = Vue.createApp({
// data, functions, or events go here
// simple single line component templates go here  
// ie: template: '<h2>i am the template</h2>'

  data(){ //define function
    return{ //return object inside function
        title: 'The Final Empire',
        age: 45
    }
  },
  methods:{
    changeTitle(){
        console.log ('clicked!')
        this.title = 'words'
    }
  }
})

app.mount('#app') //mount app to element with id 'app