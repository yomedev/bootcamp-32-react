import  usersJson  from './users.json'

const ALL_SKILLS_VALUE = 'all';

export const usersInitialState = {
  data: usersJson,
  isModalOpen: false,
  isAvailable: false,
  skills: ALL_SKILLS_VALUE,
  search: ''
}