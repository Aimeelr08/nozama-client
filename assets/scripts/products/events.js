'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')

// const onGetProducts = function (event) {
//   console.log('onGetProducts in events.js')
//   api.getProduct()
//     .then(ui.onGetProductsSuccess)
//     .catch(ui.onGetProductsFailure)
// }

const onAddProduct = function (event) {
  console.log(this)
  console.log(this.id)
  console.log('Step 1: Events Start')
  event.preventDefault()
  const pp = function () {
    const productCollection = $('#productList').children()
    const priceLocator = productCollection.children().first().siblings().next().html()
    const prodTypeMod = priceLocator.split('').splice(2, 6).join('')
    const prodPrice = parseInt(prodTypeMod) + 0.99
    return prodPrice
  }
  const price = pp()
  console.log(price)
  console.log('Got Here, got price')
  const pt = function () {
    const productCollection = $('#productList').children()
    const prodTitle = productCollection.children().first().children().html()
    return prodTitle
  }
  const title = pt()
  console.log('got here 3')
  console.log(title)
  const user = app.user.id
  console.log('Events User')
  console.log(user)
  api.addProduct(title, price)
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}

const onEmptyCart = function (event) {
  console.log('Step 1: Events Start')
  // event.preventDefault()
  // const data = event
  console.log('data')
  // console.log(data)
  api.emptyCart()
    .then(ui.onAddProductSuccess)
    .catch(ui.onAddProductFailure)
}
module.exports = {
  onAddProduct,
  onEmptyCart
}
