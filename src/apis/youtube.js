import axios from 'axios'
const KEY = 'AIzaSyDAopqGh_eTKv33g7u1merd_FZKkmy4Zjw'

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})