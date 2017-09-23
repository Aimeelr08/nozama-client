'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

// POST (ash - signup)
const onSignUp = function (event) {
  console.log('onSignUp1')
  event.preventDefault()
  console.log('onSignUp')
  const data = getFormFields(event.target)
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .done(ui.signUpSuccess)
      .fail(ui.signUpFail)
  } else {
    ui.passwordMatchFail()
  }
}

// GET (ash - signin)
const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn')
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFail)
}

// DELETE (will - signout)
const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut')
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutSuccess)
}

// PATCH (will - changepw)
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('onChangePassword')
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
