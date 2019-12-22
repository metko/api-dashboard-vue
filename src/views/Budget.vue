<template>
  <div class="about">
    <h1>This is budget page</h1>
    <div>
       <form action="" @submit.prevent="postCategory">
          <input name="name" v-model="category.name" placeholder="name categ">
          <input name="slug" v-model="category.slug" placeholder="slug categ">
          <select name="type" v-model="category.type">
             <option value="income">Income</option>
             <option value="expense">Expense</option>
          </select>
          <button>Save</button>
       </form>
    </div>
    <div v-if="categories.length">
       <h2>Categories</h2>
       <ul>
          <li v-for="category in categories" :key="category.name">{{ category.name }}</li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
         categories : [],
         category : {
            name: null,
            type: null,
            slug: null
         }
       
      }
   },
   mounted() {
      let vm = this
       this.axios
         .get('/budget/category')
         .then(response => (
            console.log(response),
            vm.categories = response.data
         ))
   },
   methods : {
      postCategory() {
         this.axios
            .post('/budget/category', this.category)
            .then(response => (
               this.categories.push(response.data)
            ))
      }
   }
}
</script>
