import Axios from 'axios';

const axiosWithAuth = () => {

    return Axios.create({
        baseURL: 'https://simmr.herokuapp.com',
        headers: {
            authorization : localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;