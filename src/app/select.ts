import type { RootState } from '@app/store'

const getTheme = (state: RootState): string => {
    return state.theme.value
}

// export { getTheme }
export default getTheme