import axios from 'axios'

const axiosGet = async (url, params) => {
  const getData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        accept: 'application/json',
      },
      params,
    })
    return data
  }
  return getData()
}

const axiosPost = (url, data) => {
  axios.post(url, data)
}

export { axiosGet, axiosPost,}
