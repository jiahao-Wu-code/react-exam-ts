import { configureStore } from '@reduxjs/toolkit'
import subjectSlice from './slice/subjectSlice'
// ...

export const store = configureStore({
    reducer: {
        subject: subjectSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch