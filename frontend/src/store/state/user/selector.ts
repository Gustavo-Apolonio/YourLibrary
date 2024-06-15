import { createSelector } from "@reduxjs/toolkit";
import { Interfaces } from "../../../models";

export const getRoot = (state: { user: Interfaces.IUser }) => state.user;

export const getUser = createSelector([getRoot], (state) => state);
export const getId = createSelector([getRoot], (state) => state.id);
export const getUsername = createSelector([getRoot], (state) => state.username);
export const getEmail = createSelector([getRoot], (state) => state.email);
export const getPassword = createSelector([getRoot], (state) => state.password);
