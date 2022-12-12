import { createSelector } from "@reduxjs/toolkit"

export const selectUsersList = state => {
  return state.users.data
}

export const selectIsModalOpen = state => state.users.isModalOpen
export const selectSearch = state => state.users.search

// export const selectFilteredUsers = state => {
//   console.log('usersList');
//   const users = selectUsersList(state)
//   const search = selectSearch(state)
//   return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
// }

export const selectFilteredUsers = createSelector([selectUsersList, selectSearch], (users, search) => {
  console.log('usersList');
  return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
})

export const selectOpenToWorkTotal = createSelector(selectFilteredUsers, filteredUsers => {
  return filteredUsers.reduce((acc, user) => {
    if (user.isOpenToWork) {
      acc += 1
    }

    return acc
  }, 0)
})

// export const selectOpenToWorkTotal = state => {
//   const filteredUsers = selectFilteredUsers(state)

//   return filteredUsers.reduce((acc, user) => {
//     if (user.isOpenToWork) {
//       acc += 1
//     }

//     return acc
//   }, 0)
// }