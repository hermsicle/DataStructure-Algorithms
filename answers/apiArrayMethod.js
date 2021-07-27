/*
In this challenge you are to do an api call and filter out all the names that has a 'k'
Then you want to map out all the filtered names and return just the name, and email 
*/

const getUsers = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const json = await response.json()
    
    const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(({name,email})=>({name,email}))
    
    return result
    
}

(async function() {
    try{
        console.log(await getUsers())   
        
    }catch(err){
        console.log(err)
    }
})();