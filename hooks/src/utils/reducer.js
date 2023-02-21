export default function reducer(state, action) {
    switch (action.type) {
        case 'setProjects': {  // always returns an object
            return {
                ...state, // it creates a copy of the current state object
                projects: action.data  // make a change to the projects / `action.data` contain the updated state values
            }
        } 
        case 'addproject': {
            return {
                ...state,
                projects: [action.data, ...state.projects]
            }
        }
        default: return state // return the current state - protect from incorrect or invalid action 
    }
}