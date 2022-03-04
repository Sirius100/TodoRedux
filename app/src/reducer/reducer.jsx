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
      return {...state, ...action.payload, ...{visibleForm:!state.visibleForm}, ...{numberTodo:action.numberTodo}}

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
    default:
      throw new Error("ошибка в reducer")
  }
}
