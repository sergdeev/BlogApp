import { createSelector } from 'reselect'


export const articlesSelector = state => state.articles;
export const dateRangeSelector = state => state.filters.dateRange;
export const selectedSelector = state => state.filters.selected;

    

export const filteredArticles = createSelector( articlesSelector, dateRangeSelector, selectedSelector,
    (articles, dateRange, selected) => {
        const { from, to } = dateRange;

        return articles.filter((article) => {
            const published = Date.parse(article.date);
            //console.log(selected.value, article.id);
            return (
                (!selected.length ||
                    selected.find((selected) => selected.value === article.id)) &&
                (!from || !to || (published > from && published < to))
                )
        })
});


export const commentsSelector = state => state.comments;
export const idSelector = (_, props) => props.id;

export const createCommentSelector = () =>
    createSelector(commentsSelector, idSelector, (comments, id) => {
        return comments.find((comment) => comment.id === id)
  })
