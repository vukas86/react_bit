// const data = {
//     email: "dev@dev.com",
//     password: "developer",
//   };


  

 const getCandidates = () => {
  return  fetch('http://localhost:3333/api/candidates')
  .then((res) => res.json())
 }



const getToken = (email, password) => {
    return fetch("http://localhost:3333/login", {
        method: "POST", 
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify( {
            email: email,
            password: password,
          })
    })
    .then(data => data.json())
}



 export {getCandidates, getToken}