export default function reducer(state, action) {
  switch(action.type) {
    /*раздел смены темы*/
    case 'changeTheme':
      return {
        btnCaption : state.btnCaption === "Night"? "Light": "Night",
        theme: !state.theme,
      }

    /*раздел вызов формы для вывода задания*/
    case 'request': // нажатие на кнопку "Запрос"
      return {...state, ...action.payload, ...{visibleForm:!state.visibleForm}}

    /*раздел изменения статуса задачи (добавить, выполненая задача, удалить задачу)*/
    case 'addTask': {// нажатие на кнопку "Add Task"
      return [
        ...state,
        {
          ...action.payload
        },
      ]
    }/**выполненая задача */
    case 'isComplete':{
      return [
        ...state
      ]
    }/**удалить задачу */
    case 'isDelete':{
      const newState = state.filter((task) => !task.isDelete);
      return [...newState]
    }
    /**айдишник редактируемой задачи*/
    case 'idChangeTask':{
      return action.id;
    }

    case "chahgeTask":{
      const editTask = state.map( task => {
        if(task.id == action.payload.id){
          const actionPayload = {...action.payload}
          console.log("task: ", task);
          console.log("actionPayload: ", actionPayload);
          return {...task, ...actionPayload }
        }
      } )
      console.log("editTask: ", editTask[0]);
      const newState = state.filter((task)=> task.id != action.payload.id)
      console.log("что за хуйня :",[...newState, editTask[0]]);
      return [
        ...newState, editTask[0],
      ]
    }

    default:
      throw new Error("ошибка в reducer")
  }
}
