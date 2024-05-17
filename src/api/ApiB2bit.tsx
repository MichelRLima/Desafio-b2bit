import axios from 'axios'

const ApiB2bit = axios.create({
    baseURL: "https://api.homologation.cliqdrive.com.br/auth"
})

export default ApiB2bit