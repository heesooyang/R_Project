import { CREATE_REPLACEMENT } from '../actions/manage-replacement'
import _ from 'lodash'


export default function (state = [
  // replacements:{
  // title: "",
  // keyword: "",
  // maxValue: 3}
], action) {
  console.log("replace action type is",action.type);
  console.log("replace action payload",action.payload);
  switch (action.type) {

    case CREATE_REPLACEMENT:
      return[
        {
        title: action.payload.title,
        keyword: action.payload.keyword,
        maxByte: action.payload.maxByte,
        isEssential: action.payload.isEssential
      },
        ...state];

    default:
      return state;
  }
}