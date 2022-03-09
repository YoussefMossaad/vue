//console.log("hello, vue");
const app = Vue.createApp({
  data(){
    return{
      showBooks: true,
      title: 'Moose',
      author: 'Youssef Mossaad',
      age: 18
    }
  },
  methods: {
    //changeTitle(title) {
      //this.title = 'Words of Randiance'
      //this.title = title
    //}
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')
