
export default {
  name: 'src-componentes-formulario',
  components: { },
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      allMyData: [],
      nombreMinLength : 5,
      nombreMaxLength : 15,
      apellidoMinLength : 5,
      apellidoMaxLength : 15,
      notaMin : 0,
      notaMax : 10,
      suma:0,
      promedioTotal: 0
    }
  },

  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: ''
      }
    },
    enviar() {
      /* this.allMyData.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset() */
      this.allMyData.push({ 
        alumno: this.formData.nombre+" "+this.formData.apellido, 
        nota: this.formData.nota
      })
      
      this.suma = 0;
      for( var i = 0; i < this.allMyData.length; i++ ){
          this.suma += this.allMyData[i].nota; 
      }
      this.promedioTotal = this.sum/this.allMyData.length
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  },
  computed: {
    getCols() {
      return Object.keys(this.allMyData[0])
    }
  }

}


