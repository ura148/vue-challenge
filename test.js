
Vue.component('alert-hoge-button', {
  data: function() {
    return {
      hoges: []
    }
  },
  template: '<button v-on:click="alertHoge">ほげ！！</button>',
  methods: {
    alertHoge: function() {
      this.$data.hoges.unshift("hoge");
      alert(this.$data.hoges);
    }
  },
})

Vue.component('header-menu',{
  template: `<div>
                <ul>
                  <li><a href="#">hogehoge</a></li>
                </ul>
             </div>`
})

new Vue({
  el: "#header"
})

new Vue({
  el: "#vue-sample",
})
