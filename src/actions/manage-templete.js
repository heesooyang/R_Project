import axios from 'axios'

export const FETCH_TEMPLATES = 'fetch_templates'
export const CREATE_TEMPLATE = 'create_template'
export const DELETE_TEMPLATE = 'delete_template'
export const FETCH_TEMPLATE = 'fetch_template'
export const UPDATE_TEMPLATE = 'update_template'

const MY_URL = 'http://localhost:8080/apis/v1/templates'


export function fetchTemplates() {
  const request = axios.get(`${MY_URL}?offset=0&limit=25&sortCreatedAt=desc`)
  // return (dispatch) => {
  //   request.then(({data}) => {dispatch({
  //     type: FETCH_TEMPLATES,
  //       payload: data
  //   }) });
  // };
  return {
    type: FETCH_TEMPLATES,
    payload: request
  }
}
//request에 바로 .then을 달았을때는 request가 undifined된다...... 프로미스객체를 더 파보고 프로미스객체를 처리하는 axios의 get확인하고 javascript의 const 정의하는부분도 다시확인해보기.
export function fetchTemplate(id) {
  const request = axios.get(`${MY_URL}/${id}`);



  return {
    type: FETCH_TEMPLATE,
    payload: request
  }
}

export function createTemplate(values, callback) {
  // const request = axios.post(`${MY_URL}`, {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: values
  // })
  console.log('액션크리에이트템플릿', values)
  const request = axios.post(`${MY_URL}`, values)
    .then(() => callback())

  return {
    type: CREATE_TEMPLATE,
    payload: request
  }
}

export function deleteTemplate(id, callback) {
  const request = axios.delete(`${MY_URL}/${id}`)
    .then(() => callback())
  console.log('딜리트액션리퀘스트', request)
  return {
    type: DELETE_TEMPLATE,
    payload: id
  }
}

export function updateTemplate(id, callback) {
  const request = axios.put(`${MY_URL}/${id}`)
    .then(()=> callback())
  return{
    type: UPDATE_TEMPLATE,
    payload: request
  }
}