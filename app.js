var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 3
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data: { // dataプロパティ
    items: items
  }
})

// var vm = new Vue({
//   el: '#b-button',
//   data: {
//     loggedInButton: 'ログイン済みのため購入できます'
//   }
// })

console.log(vm);

vm.$watch(function (){
  return this.items[0].quantity
}, function (quantity){
  console.log(quantity)
})
