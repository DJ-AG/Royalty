import { createSelector } from 'reselect'

const selectCollection = state => state.collection


export const selectCollectionSelection = createSelector(
    [selectCollection],
    collection => collection.shopData
)