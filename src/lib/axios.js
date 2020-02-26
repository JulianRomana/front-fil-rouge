import axios from "axios"

const axiosGet = async (url, params) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`, {
    headers: {
      accept: "application/json",
    },
    params,
  })
  return data
}

const axiosPost = async (url, data) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/${url}`, data, {
    headers: {
      accept: "application/json",
    },
  })
}

const axiosDelete = async (url, params) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/${url}`, {
    params,
  })
}

export { axiosGet, axiosPost, axiosDelete }
