const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('cr project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create error porject', action.error)
      return state
      
    default:
      console.log("default")
      return state      
  }
}

export default projectReducer