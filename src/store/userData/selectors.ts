import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getUserData = (state: TState) => state.userData;

// const getUserEmail = createSelector(getUserData, (state) => state.email);
export const getUserEmail = createSelector(getUserData, ({ email }) => email);
export const getUserToken = createSelector(getUserData, ({ token }) => token);
