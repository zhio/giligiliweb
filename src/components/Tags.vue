<template>
    <div class="tag">
      <el-card>
        <span>类型</span>
        <el-divider direction="vertical"></el-divider>
            <el-row :v-model="radio1" class="button_style">
              <el-button :value="radio3" :autofocus="true" v-for="genre in genres" :key="genre.id" v-on:click="getData(genre)" round plain type="text" size="mini" >{{genre}}</el-button>
            </el-row>
        
        <el-divider></el-divider>
        <span>区域</span>
        <el-divider  direction="vertical"></el-divider>
              <el-row :v-model="radio2" class="button_style">
                <el-button :autofocus="true" v-for="country in countries" :key="country.id" v-on:click="getData(country)" round plain type="text" size="mini" >{{country}}</el-button> 
            </el-row>
        <el-divider></el-divider>
        <span>年份</span>
        <el-divider direction="vertical"></el-divider>
              <el-row :value="radio3"  class="button_style">
              <el-button  :autofocus="true" v-for="year in year_range" :key="year.id" v-on:click="getData(year)" round plain type="text" size="mini" >{{year}}</el-button> 
              </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {
      genres : ['全部','情色','武侠','灾难','冒险','奇幻','西部','战争','历史','传记','歌舞','音乐','同性','犯罪','恐怖','惊悚','悬疑','动画','科幻','爱情','动作','喜剧','剧情'],
      countries : ['全部','中国大陆', '台湾', '香港','美国', '日本', '韩国','英国', '法国', '德国','意大利', '西班牙', '印度','泰国', '俄罗斯', '伊朗','加拿大', '澳大利亚', '爱尔兰','瑞典','巴西','丹麦'],
      year_range : ['全部','2019,2019', '2018,2018', '2010,2019', '2000,2009', '1990,1999', '1980,1989', '1970,1979','1960,1969', '1,1959'],
     // tags:[
      //   {name:"全部",key:"all"},
      //   {name:"爱情",key:"love"},
      //   {name:"喜剧",key:"xiju"},
      //   {name:"其他",key:"other"}],
        radio1: '1',
        radio2: '2',
        radio3: '3',
    };
    
  },
  methods: {
    getData(val){
        console.log(val)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tag{
  margin: 20px;
}
.button_style{
  display: inline-block;
}
</style>