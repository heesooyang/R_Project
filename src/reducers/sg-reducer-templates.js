import { FETCH_TEMPLATES } from '../actions/fetch-templete'
import _ from 'lodash'


export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}