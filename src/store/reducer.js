import * as actionTypes from './action';

const initialState = {
		isHover: false,
		id: null
};

const reducer = ( state = initialState, action ) => {
		switch ( action.type ) {
				case actionTypes.OVER:
						return {
								...state,
								isHover: true,
								id: action.id
						};
				case actionTypes.OUT:
						return {
								...state,
								isHover: false,
								id: action.id
						};
				default:
						return state;
		}
};

export default reducer;