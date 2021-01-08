import { createSelector } from 'reselect'

const selectDirectory = state => state.selectDirectory

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
)