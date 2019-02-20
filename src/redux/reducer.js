import {combineReducers} from 'redux';
import posts from '../data/posts';

const comments = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_COMMENT': 
		if(!state[action.postId]){
			return {...state, [action.postId]:[action.comment]};
		} else {console.log(...state[action.postId])
			return {...state, [action.postId]: [...state[action.postId], action.comment]}
		}
		default: return state;
	}
}

const post = (state = posts, action) => {
	// console.log(action)
	switch(action.type) {
		case 'REMOVE_PHOTO': return [...state.slice(0, action.index), ...state.slice(action.index+1)];
		case 'ADD_PHOTO': return [...state, action.post];
		default: return state;
	}
}

export default combineReducers({comments, post});