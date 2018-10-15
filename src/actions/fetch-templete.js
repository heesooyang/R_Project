import axios from 'axios'

export const FETCH_TEMPLATES = 'fetch_templates'

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=PAPERCLIP1234';

export function fetchTemplates() {

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
      type: FETCH_TEMPLATES,
      payload: request
    };
}