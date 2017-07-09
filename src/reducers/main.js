import init from '../initialState'
// import 'babel-core/polyfill'

const state_update = (state = init.main, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case "ROUTE": {
			newstate.path = action.path
			return newstate
		}
		case "filter_projects": {
			newstate.projects = action.projects
			return newstate
		}
		default:
			return state || init.main
	}
}

export default state_update
