const access_key = 'caa50a179ed4ed6fb8cafab9be5ebbe9';
const INSERT_NEWS = 'main/newsList/INSERT_NEWS'
const SET_CATEGORY = 'main/newsList/SET_CATEGORY'
const CLEAR_NEWS = 'main/newsList/CLEAR_NEWS';

const initialState = {
    articles: [],
    category: '',
    loading:false,

};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case INSERT_NEWS:
            return { ...state, articles: action.articles, loading: false};
        case SET_CATEGORY:
            return { ...state,category: action.category, loading:true}; 
        case CLEAR_NEWS:
             return initialState;    
        default:
            return state;
    }
};

const insertNews = category => (dispatch) => {
    dispatch({type: SET_CATEGORY, category})
    fetch(`http://api.mediastack.com/v1/news?`
        +`access_key=${access_key}&categories=${category}&languages=en` 
    ).then((response) => response.json())
        .then(({data})=>{
        dispatch({
            type: INSERT_NEWS,
            articles: data,
        });
    }
    ).catch(err => {
        console.log('erorr', err)
    })

};

export {
    reducer as default,
    initialState as newsInitialState,
    insertNews,
    CLEAR_NEWS,
};