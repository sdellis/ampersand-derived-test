// require("!style!css!./style.css");
import app from 'ampersand-app'
import Manifest from './manifest'
import Me from './me'
// require("./style.css");

var m = new Manifest( { _id: 'foo', '@id': 'bar', label: [{ '@value': 'Manifest 1'}] } )

document.write(m.app_url)

window.app = app

app.extend({
  init () {
    this.me = new Me( {id:123, login:'shaun'} )
    this.me.fetchInitialData()
  }
})

app.init()
