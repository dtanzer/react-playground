import { fromJS } from 'immutable';

const initialState = fromJS({
	squares: [
		{ x: 316, y: 281, },
		{ x: 632, y: 437, },
	],
	edges: [
		{ x: 0,    y: 0,   squareX: 0,  squareY: 0,  },
		{ x: 1024, y: 0,   squareX: 50, squareY: 0,  },
		{ x: 0,    y: 768, squareX: 0,  squareY: 50, },
		{ x: 1024, y: 768, squareX: 50, squareY: 50, },
	],
});

export function reducer(state = initialState, action) {
	switch(action.type) {
		case 'SQUARE_MOVED':
			return state
				.updateIn(['squares', action.id, 'x'], x => x+action.dx)
				.updateIn(['squares', action.id, 'y'], y => y+action.dy);
		}
	return state;
}
