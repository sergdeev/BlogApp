import defaultState from "../fixtures"
import { DELETE_ARTICLE } from '../constants'


export default (articlesState = defaultState, action) => {
    const { type, payload } = action;
    switch(type){
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id);
    }
    return articlesState;
}