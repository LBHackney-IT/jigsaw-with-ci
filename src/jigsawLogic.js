const axios = require("axios");

const loginUrl = 'http://localhost:3001';

export const doLogin = async (username, password) => {
  const { data } = await axios.post(`${loginUrl}/authorise`, {
    email: username,
    password: password,
  });
  localStorage.setItem("token", data);
  console.log(data);
  return data.token;
};

export const getData = async () => {
  const { data } = await axios.post(`${loginUrl}/fetchData`, {
    bearerToken: localStorage.getItem("token"),
  });

  return data;
};
