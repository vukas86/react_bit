

export const getData = () => {
    return fetch('https://randomuser.me/api/?results=15 ')
        .then(results => results.json())
}
