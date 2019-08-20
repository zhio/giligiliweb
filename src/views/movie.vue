<template>
  <div class="movie">
    <Tags></Tags>
    <div class="">
      <el-row :gutter="20">
        <el-col :span="3" v-for="movie in movies" :key="movie.id">
          <el-card class="movie-card" @click.native="goMovie(movie)"> 
            <img class="video-avatar" :src="movie.cover_url">
            <div>
              <div class="video-title">{{movie.name}}</div>
              <div class="video-bottom clearfix">
                <span class="video-info">{{movie.category.substring(0, 8)}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="fengyeqi">
      <el-pagination background layout="prev, pager, next" 
      :page-size="searchData.number"
      @prev-click= "changePage"
      @current-change= "changePage"
      @next-click= "changePage"
      :current-page.sync= "currPage"
      :total="totalCount"> </el-pagination>
    </div>
  </div>
  
</template>

<script>
import * as API from '@/api/movie/';
import Tags from '@/components/Tags'
export default {
  name: 'movie',
  data() {
    return {
      movies: [],
      searchData:{
        number: 80,
        start: 0,
      },
      currPage: 1,
      totalCount: 0,
       radio: 3,
    };
  },
  methods: {
    load() {
      API.getMovies().then((res) => {
        this.movies = res.data;
      });
    },
    setList(){
      API.getMovies1(this.searchData.start).then((res) =>{
        this.movies = res.data;

      })
    },
    changePage(val){
      this.searchData.start = this.calcStart(val,this.searchData.number)
      this.setList()
    },
    calcStart(val,number){
      return (val - 1) * number
    },
    goMovie(movie) {
      this.$router.push({ name: 'showMovie', params: { movieID: movie.id } });
    },
    getCount(){
      API.getCount().then((res) =>{
        this.totalCount = res.data
      })
    },
  },
  components: {
    Tags
  },
  beforeMount() {
    this.load();
    this.getCount();
  },

};
</script>


<style>
.video-avatar {
  width: 100%;
  height: 250px;
}
.video-title {
  margin: 4px 0px 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.video-bottom {
  margin-top: 20px;
}
.video-info {
  color: #909399;
}
.movie-card {
  cursor: pointer;
  margin: 20px 0px;
}
.fengyeqi{
  text-align:center;
}
</style>