import shortid from "shortid";

//selectors
export const getAllColumns = state => state.columns;
export const getColumnByList = ({ columns }, selectedListId) => columns.filter(column => column.listId === selectedListId);

//actions
const ADD_COLUMN = 'app/columns/ADD_COLUMN';

//action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default columnsReducer;