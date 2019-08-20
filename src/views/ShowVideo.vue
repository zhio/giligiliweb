<template>
    <div class="psot-video">
        <el-row :gutter="20">
            <el-col :span="16">
                <video-player
                class="video-player-box"
                :options="playerOptions">
                </video-player>
            </el-col>
        </el-row>
        </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'
import * as API from '@/api/video/'
export default {
    name: 'ShowVidoe',
    data() {
        return{
            video : {},
            playerOptions:{
                muted:false,
                fluid:true,
                sources:[{
                    type: 'video/mp4',
                    src: '',
                }]
            }
        }
    },
    methods:{
        load(){
            API.getVideo(this.$route.params.videoID).then((res) => {
                this.video = res.data
                this.playerOptions.sources[0].src = this.video.url;
            })
        }
    },
    components: {
        videoPlayer
    },
    beforeMount(){
        this.load()
    }
}
</script>

<style scoped>

</style>