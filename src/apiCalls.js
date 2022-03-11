const axios = require("axios");

const loginUrl = 'http://localhost:3001';

export const doLogin = async (username, password) => {
  const httpResponse  = await axios.post(`${loginUrl}/authorise`, {
    email: username,
    password: password,
  });
  
  let token = httpResponse.data.body;
  localStorage.setItem("token", token);
  
  return token;
};

export const getData = async () => {
  const  httpResponse = await axios.post(`${loginUrl}/fetchData`, {
    bearerToken: JSON.parse(localStorage.getItem("token")),
  });

  
  
  console.log(httpResponse)

  let data = httpResponse.data.body;

  return data;
};
