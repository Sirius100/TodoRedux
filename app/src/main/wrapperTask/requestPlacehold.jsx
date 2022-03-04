const axios = require('axios').default;

export const taskRequest = async () => {
  await axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    console.log("response.length: ", response.data[0]);
    return response.data[0];
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function (response) {
    return response;
  });
}
