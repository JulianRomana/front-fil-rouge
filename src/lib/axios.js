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

const axiosPost = async (url, params) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/${url}`,
    params,
    {
      headers: {
        accept: "application/json",
      },
    },
  )
  return data
}

const axiosDelete = async (url, params) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/${url}`, {
    params,
  })
}

const axiosPut = async (url, params) => {
  await axios.put(`${process.env.REACT_APP_API_URL}/${url}`, params)
}

export { axiosGet, axiosPost, axiosDelete, axiosPut }
