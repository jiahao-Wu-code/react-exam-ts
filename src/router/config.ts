type RouterDataType = typeof routersData
export type RouterKeys = keyof RouterDataType

export const routersData = {
    login: {
        path: '/login',
        hasMenu: false,
    }
}