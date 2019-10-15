import { GET_COUNTRIES } from '../actions/actions-countries';
import countries from '../data/countries.json';

const initialState = {
    countries: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return ({ ...state, countries })
    }
    return state;
};

export default countriesReducer;