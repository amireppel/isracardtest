import { applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import newsReducer, { newsInitialState } from './news';
import favouritesReducer, {favouritesInitialState} from './favourites';


const appMiddleware = compose(applyMiddleware(ReduxThunk));
const initialState = {
    news: newsInitialState,
    favourites: favouritesInitialState
};

const mainReducer = combineReducers({
    news: newsReducer,
    favourites: favouritesReducer

})

export {
    mainReducer as default,
    initialState,
    appMiddleware
};
