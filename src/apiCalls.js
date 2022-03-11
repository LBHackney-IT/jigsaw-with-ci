const axios = require("axios");

const loginUrl = 'http://localhost:3001';

export const doLogin = async (username, password) => {
  const httpResponse  = await axios.post(`${loginUrl}/authorise`, {
    email: username,
    password: password,
  });
  let token = JSON.parse(httpResponse.body.bearerToken);
  localStorage.setItem("token", token);
  console.log(token);
  return token;
};

export const getData = async () => {
  const { data } = await axios.post(`${loginUrl}/fetchData`, {
    bearerToken: localStorage.getItem("token"),
  });

  return data;
};
