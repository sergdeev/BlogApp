import defaultState from "../fixtures"

export default (articlesState = defaultState, action) => {
    const { type, payload } = action;
    switch(type){
        case ("DELETE_ARTICLE"):
            return articlesState.filter(article => article.id !== payload.id);
    }
    return articlesState;
}