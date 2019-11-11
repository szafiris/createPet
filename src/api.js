let api = "http://shibe.online/api/"
let finalParam = "?count=1&urls=true&httpsUrls=true"

const apiHost = host => { api = host }
const urlDecision = resource => `${api}${resource}`

const HTTP_OK = 200

const throwResponseError = response => {
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const emitNativeError = error => {
  throw error
}

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response
  } else {
    throwResponseError(response)
  }
}

const okCheck = statusCheck([HTTP_OK])

const headers = {
  'Content-Type': 'application/json'
}

const query = (decision) => fetch(`${urlDecision(decision)}?${finalParam}`, {
  headers
}).then(okCheck, emitNativeError)
  .then(response => response.json())

const createPet = decision => query("shibes")

export {
  apiHost,
  createPet
}