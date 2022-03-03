
const axios = require('axios').default;



export const taskRequest = () => {
  let newTaskResponse = null;
  console.log(" вывод из файла!");
  return axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    console.log("response.length: ", response.data[0]);
    return response.data[0];
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (task) {
    newTaskResponse = task
    console.log('task: ', newTaskResponse);
    return task;
  });
}
