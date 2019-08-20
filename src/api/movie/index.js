import axios from 'axios'

//读视频详情
const getMovie = id => axios.get(`/api/v1/movie/${id}`).then(res => res.data)
//读视频列表
const getMovies1 = start => axios.get(`/api/v1/movies?start=${start}`).then(res => res.data)
// const getMovues2 = (start) => axios
//         .get('/api/v1/movies',{
//             params:{
//                 start: start,
            
//             },
//         })
//         .then(res =>{
//             res => res.data
//         })

// const getMovies = (limit,start) => axios.get(`/api/v1/movies?limit=${limit}&start=${start}`).then(res => res.data)
const getMovies = () => axios.get('/api/v1/movies').then(res => res.data)
const getCount = () => axios.get('/api/v1/movies/count').then(res => res.data)
export{
    getMovie,
    getMovies,
    getCount,
    getMovies1,
    // getMovues2,
}