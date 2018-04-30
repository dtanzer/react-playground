import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

export const reducer = combineReducers({
	squares: squaresReducer,
	edges: edgesReducer,
});

const edgesInitialState = fromJS([
	{ x: 0,    y: 0,   squareX: 0,  squareY: 0,  },
	{ x: 1024, y: 0,   squareX: 50, squareY: 0,  },
	{ x: 0,    y: 768, squareX: 0,  squareY: 50, },
	{ x: 1024, y: 768, squareX: 50, squareY: 50, },
]);

function edgesReducer(state = edgesInitialState, action) {
	return state
}

const squaresInitialState = fromJS([
	{ x: 316, y: 281, },
	{ x: 632, y: 437, },
]);

function squaresReducer(state = squaresInitialState, action) {
	switch(action.type) {
		case 'SQUARE_MOVED':
			return state
				.updateIn([action.id, 'x'], x => x+action.dx)
				.updateIn([action.id, 'y'], y => y+action.dy);
		}
	return state;
}
