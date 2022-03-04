import React from 'react';
import { Button } from 'react-bootstrap';


export const AddButton = React.memo(({dispatchTask}) => {

  const axios = require('axios').default;

  const requestGet = {
    user: '',
    statusTask: '',
    numberTask: '',
    textTask: '',
  }

  const taskRequest = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      // console.log("response.length: ", response.data[0]);
      return response.data[0];
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      requestGet.user = response.userId;
      requestGet.statusTask = response.completed? "Выполнена": "Не выполнена";
      requestGet.textTask =  response.title;
      requestGet.numberTask = response.id;

      return requestGet;
    });
    dispatchTask({type:'request', payload:requestGet})
  }

  return(
    <>
      <Button variant="danger" onClick={ taskRequest }>
        Запрос
      </Button>
    </>
  )
})
