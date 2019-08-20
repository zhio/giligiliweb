<template>
    <div class="about">
        <h1>{{ movie.name }}</h1>
        <p> {{ movie.en_name }} </p>
        <img :src="movie.cover_url">
        <p> {{ movie.area }} </p>
        <p> {{ movie.category }} </p>
        <p> {{ movie.cover_url }} </p>
        <p> {{ movie.duration }} </p>
        <p> {{ movie.info }} </p>
        <p> {{ movie.release_date }} </p>
    </div>
</template>

<script>
import * as API from '@/api/movie/'
export default {
    name: 'showMovie',
    data() {
        return{
            movie : {},
        }
    },
    methods:{
        load(){
            API.getMovie(this.$route.params.movieID).then((res) => {
                this.movie = res.data
            })
        }
    },
    beforeMount(){
        this.load()
    }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>