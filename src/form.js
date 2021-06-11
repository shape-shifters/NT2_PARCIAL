import Vue from 'vue'
import VueForm from 'vue-form'

// VALIDADOR PERSONALIZADO
var options = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
        }
    }
}

Vue.use(VueForm, options)