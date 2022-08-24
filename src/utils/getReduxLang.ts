import type { RootState } from '@app/store'
import { store } from '@app/store'

export default function getReduxLang(): string {
    const storeTree: RootState = store.getState()
    const storedLang = storeTree.language.value

    return storedLang
}