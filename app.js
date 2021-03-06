var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
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
  },
  filters: {
    numberWithDelimiter: (value) => {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      }
    },
    methods: {
      doBuy () {
        alert(this.totalPriceWithTax + '円のお買い上げ！')
        this.items.forEach(function (item) {
          item.quantity = 0
        })
      }
    },
    computed: {
      totalPrice () {
        return this.items.reduce( (sum, item) => {
          return sum + (item.price * item.quantity)
        }, 0)
      },
      totalPriceWithTax () {
        return Math.floor(this.totalPrice * 1.08)
      },
      canBuy () {
        return this.totalPrice >= 1000  //1000円以上から購入可能にする。
      },
      errorMessageStyle () {
        //canBuyが偽の時に赤く表示する
        return {
          border: this.canBuy ? '' : '1px solid red',
          color: this.canBuy ? '' : 'red'
        }
      }
    }
})


// var vm = new Vue({
//   el: '#b-button',
//   data: {
//     loggedInButton: 'ログイン済みのため購入できます'
//   }
// })

vm.$watch(function (){
  return this.items[0].quantity
}, function (quantity){
  console.log(quantity)
})
