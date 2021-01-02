import axios from 'axios'

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID ufedRllwmn2RExikrutNpTCc2Cg0AnHNcLLMXP7XgIw'
   }
})