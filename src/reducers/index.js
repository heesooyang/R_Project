import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import TemplateReducer from './sg-reducer-templates'
import MockReducer from './sg-mockdata'
import ReplacementReducer from './sg-reducer-replacements'
import {CREATE_REPLACEMENT} from '../actions/manage-replacement'


const rootReducer = combineReducers({
  templates: TemplateReducer, // { rows : [], count : 0},
  replacements: ReplacementReducer,
  mocks: MockReducer,
  form: formReducer.plugin({
    ReplacementsForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case CREATE_REPLACEMENT:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  })
});

export default rootReducer;