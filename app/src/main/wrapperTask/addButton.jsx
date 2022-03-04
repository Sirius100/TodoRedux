import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export const AddButton = React.memo(({dispatchTask}) => {

  const [indexTask, setIndexTask] = useState(0)
  const axios = require('axios').default;

  const requestGet = {
    user: '',
    statusTask: '',
    numberTask: '',
    textTask: '',
  }
  const taskRequest = async () => {
    setIndexTask(indexTask+1)
    await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        if(indexTask < response.data.length){
        return response.data[indexTask]
        }else{throw new Error('новых задач нет')}

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (response) {
        /**
         * записываю данные из ответа в объект requestGet,
         * данные из объекта потом передаю в компонент ClistTask (filename listTask.jsx)
         */
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
