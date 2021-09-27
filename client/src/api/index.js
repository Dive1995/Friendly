import axios from 'axios'

const url = 'http://localhost:5000/posts'
const fetchData = async () => {
    const data = await axios.get(url)
}