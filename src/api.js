let api = "http://shibe.online/api/"
let finalParam = "??count=1&urls=true&httpsUrls=true"
let corsFix = "http://localhost:3000/api"


const query = (decision) => fetch(`${corsFix}${decision}${finalParam}`, {
}).then(response => response.json())

const createPet = decision => query(decision)

export {
  createPet
}