import Model from 'ampersand-model'
import {Collections} from 'tabula-rasa'

export default Model.extend({
  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  children: {
    presentations: Collections.Collection
  },


  fetchInitialData () {

      this.presentations.fetch()

  }

})
