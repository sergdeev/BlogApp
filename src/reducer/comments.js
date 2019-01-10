import { normalizedComments } from "../fixtures"
import { DELETE_ARTICLE } from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => ({...acc, [comment.id]: comment}), {})

export default (commentsState = defaultComments, action) => {
    const { type, payload } = action;
    switch(type){
        
        
        default: 
            return commentsState;
    }
}