import { combineReducers } from 'redux'
import TemplateReducer from './sg-reducer-templates'

const rootReducer = combineReducers({
  templates: TemplateReducer
});

export default rootReducer;