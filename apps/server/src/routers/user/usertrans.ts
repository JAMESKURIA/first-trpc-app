export function getUserById(id: number) {
    return {
        id: 1,
        name: 'James',
    }
}

export function getAllUsers() {
    return [
        {
            id: 1,
            name: 'James',
            password: 'abc',
        },
        {
            id: 2,
            name: 'Chege',
            password: 'abc',
        },
    ]
}
