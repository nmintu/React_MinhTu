import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        userName: '',
        btnConnect: 'bg-primary',
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        enableBtnFollowed: (state) => {
            state.isFollowed = true;
        },
        disBtnFollowed: (state) => {
            state.isFollowed = false;
        },
        setBtnConnect: (state, action) => {
            state.btnConnect = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
})

export const { openModal, closeModal, enableBtnFollowed, disBtnFollowed, setBtnConnect, setUserName } = modalSlice.actions;
export default modalSlice.reducer;