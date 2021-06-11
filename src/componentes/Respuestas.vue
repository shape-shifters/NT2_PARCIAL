<template>
  <section class="src-componentes-respuestas">
    <h2>Respuestas</h2>
      <hr>
      <table class="table table-dark">
         <thead>
            <tr>
               <th scope="col">Pregunta Nº</th>
               <th scope="col">Respuestas</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(preg, id) in preguntas" :key="id">
               <th scope="row">{{ preg.id }}</th>
               <th>
                  <p v-for="(res, index) in preg.respuestas" :key="index">
                     {{ res }}
                  </p>
               </th>
            </tr>
         </tbody>
      </table>
   </section>
</template>

<script lang="js">
  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {
    },
    data () {
      return {
        preguntas: [
            { id: 1, respuestas: ["C"] },
            { id: 2, respuestas: ["C"] },
            { id: 3, respuestas: ["A", "B"]  },
         ],
      };
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-componentes-respuestas {

  }
</style>
