import axios from 'axios';

const baseURL = 'http://localhost:3000/users';

const getAll = () => {
  return axios
    .get(baseURL)
    .then(res => res.data);
}

const create = newObject => {
  return axios
    .post(baseURL, newObject)
    .then(res => res.data);
}

const update = (id, newObject) => {
  return axios
    .put(`${baseURL}/${id}`, newObject)
    .then(res => res.data);
}

export default { 
  getAll, 
  create, 
  update 
}