import axios from 'axios';

const instance= axios.create({baseURL:'https://react-burger-5dfdd.firebaseio.com/'})

export default instance;