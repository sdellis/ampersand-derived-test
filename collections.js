import {Collections} from 'tabula-rasa'

export default Collections.Collection.extend({

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'foo/' + this._id
      }
    }
  }

})
