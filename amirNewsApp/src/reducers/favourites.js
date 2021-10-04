import AsyncStorage from '@react-native-async-storage/async-storage';

const INSERT_FAVOURITES = 'main/favourites/LOAD_FAVOURITES';
const LOAD_STATE = 'main/favourites/LOAD_STATE';

const initialState = {
    articles: [],
    loading: false,

};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case INSERT_FAVOURITES:
            return { ...state, articles: action.articles };
        case LOAD_STATE:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
};
const loadFavourites = (dispatch) => {
    dispatch({ type: LOAD_STATE, loading: true}) 
    AsyncStorage.getItem('@News-list').then((response) => {
        if (response != null) {
            dispatch({type: INSERT_FAVOURITES, articles: JSON.parse(response)})
            dispatch({ type: LOAD_STATE, loading: false}) 
        }
        dispatch({ type: LOAD_STATE, loading: false})

    }).catch(err => { console.log('error') })



};
const insertArticle = (article)=>(dispatch, getState)=>{
    dispatch({ type: LOAD_STATE, loading: true}) 
    const currentList = getState().favourites.articles.concat();
    currentList.unshift(article);
    AsyncStorage.setItem('@News-list',JSON.stringify(currentList)).then(()=>{
        dispatch({type: INSERT_FAVOURITES, articles:currentList})
        dispatch({ type: LOAD_STATE, loading: false}) 
    }).catch(err=>{
        console.log('error')
    })
};

export {
    reducer as default,
    initialState as favouritesInitialState,
    loadFavourites,
    insertArticle
}