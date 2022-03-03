import {taskRequest} from './requestPlacehold';

export default function reducer(state, action) {
  switch(action.type) {
    /*раздел смены темы*/
    case 'changeTheme':
      return {
        btnCaption : state.btnCaption === "Night"? "Light": "Night",
        theme: !state.theme,
      }

    /*раздел вызов формы для ввода задачи*/
    case 'add': // нажатие на кнопку "Add"
    let request = taskRequest();
    console.log("отработал код в reduce");
    var task = null;
    Promise.any([request]).then( (response) => response );
    console.log("task in reducer: ", task);
      return { visibleForm: !state.visibleForm}
    /*раздел изменения статуса задачи (добавить, выполненая задача, удалить задачу)*/
    case 'addTask': {// нажатие на кнопку "Add Task"
      console.log('im run in addTask')
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
