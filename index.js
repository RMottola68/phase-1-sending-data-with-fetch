let submitData = (name, email) => {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            userName: name,
            userEmail: email
        })

    }
    
    return fetch("http://localhost:3000/users", config)
    .then(res => res.json())
    .then(data => {
        let list = document.querySelector('script');
        let li = document.createElement('li');

        li.innerText = data.id
        list.append(li);
        
    })
    .catch(error => {
        let list = document.querySelector('script');
        let errorMsg = document.createElement('h1')
        errorMsg.innerText = error.message
        list.append(errorMsg)
        console.log(error.message)
    })
}

submitData('john', 'test.com');


// const config = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };

// fetch("http://localhost:3000/dogs", config)
// .then(res => res.json)
// .then(data => {
//     console.log(data);
// })