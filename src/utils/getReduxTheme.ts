import type { RootState } from '@app/store'
import { store } from '@app/store'

export default function getReduxTheme(): string {
    const storeTree: RootState = store.getState()
    const storedLang = storeTree.theme.value

    return storedLang
}