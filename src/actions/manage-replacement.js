import axios from 'axios'

export const CREATE_REPLACEMENT = 'create_replacement'


export function createReplacement(values) {
  console.log("replace action values",values);
  return {
    type: CREATE_REPLACEMENT,
    payload: values
  };
}