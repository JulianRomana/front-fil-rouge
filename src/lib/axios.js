import axios from "axios"

const axiosGet = async (url, params) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`, {
    headers: {
      accept: "application/json"
    },
    params
  })
  return data
}

const axiosPost = (url, data) => {
  axios.post(url, data)
}

export { axiosGet, axiosPost }
