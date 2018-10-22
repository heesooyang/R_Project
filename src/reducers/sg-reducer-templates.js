import { CREATE_TEMPLATE, DELETE_TEMPLATE, FETCH_TEMPLATES, FETCH_TEMPLATE } from '../actions/manage-templete'
import _ from 'lodash'


export default function (state = {
  rows:[],
  count:0,
  row: {
    replacements:[]
  }
}, action) {
  // console.log("action type is",action.type);
  console.log("action payload",action.payload);

  switch (action.type) {

    case FETCH_TEMPLATES: {

      const {data} = action.payload;
      console.log("액션페이로드",action);
      return{
        rows: data.rows,
        count: data.count
      };
    }

    case FETCH_TEMPLATE:
      const {row} = action.payload.data;
      console.log("신ㅇㄹㄴㄹㅇ",action, row)
      return{
        row: row
      };


    case DELETE_TEMPLATE:
      return _.omit(state, action.payload);


    default:
      return state;
  }
}