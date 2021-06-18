

export const getData = () => {
    return fetch('https://randomuser.me/api/?results=15 ')
        .then(results => results.json())
}
<<<<<<< HEAD

console.log(getData());
=======
>>>>>>> fe1f80b1a21148fbeafcfb388824405eaab164f3
