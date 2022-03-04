import React, {useReducer, useContext} from 'react';
import reducer from '../../reducer/reducer';
import { Button } from 'react-bootstrap';
import { ClistTask } from '../listTask/listTask';
import styled from 'styled-components'
import {AppContext} from '../../app/App';
import { baseTheme } from '../../theme/theme';

const Wrapper = styled.div`
  width: 98%;
  height: 98%;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${ props => props.brd ?
   baseTheme.borders.brdDark:
   baseTheme.borders.brdLight };
  padding-top: 1em;
  transition: all, .9s;
  overflow-y: scroll;
`

const AddButton = React.memo(({dispatchTask}) => {

  const axios = require('axios').default;

  const requestGet = {
    user: '',
    statusTask: '',
    numberTask: '',
    textTask: '',
    // visibleForm: false,
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
      // requestGet.visibleForm = !requestGet.visibleForm;

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

export const WrapperTask = () => {

  const [AddTask, dispatchTask] = useReducer(reducer, {visibleForm:false})
  const {themeBgBoolean} = useContext(AppContext)

  return (

      <Wrapper brd={themeBgBoolean.theme}>
        <AddButton dispatchTask={dispatchTask}/>
        <ClistTask mode={AddTask} closeDispatchTask={dispatchTask}/>
      </Wrapper>

  )
}
