//state
export const state = () => ({
    articles: [],
})

//getters
export const getters = {

}

//actions
export const actions = {
    async getArticles({ commit }) {
        const articles = await this.$content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
            .sortBy('createdAt', 'asc')
            .fetch()

        commit('addArticle', articles);
    },
}

//mutations
export const mutations = {
    addArticle(state, articles) {
        state.articles = articles;
    },
}