import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
    value: string,
}

const initialState: LanguageState = {
    value: 'es-ES',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer