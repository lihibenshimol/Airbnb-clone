
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'stay'

export const labels = ['Vineyards', 'Caves', 'Tropical', 'Countryside', 'National parks', 'Barns', 'Ski', 'Historical homes', 'Private rooms', 'Mansions', 'Riads', 'Houseboats', 'OMG', 'ChefKitchens', 'Boats', 'Castles', 'Amazing views', 'Trending', 'Beachfront', 'Top of the world', 'Luxe', 'Domes', 'Lake', 'Cabins', 'Tiny homes', 'Amazing pools', 'Islands', 'Bed & breakfasts', 'Design', 'Off-the-grid', 'Play', 'Farms', 'Beach', 'Lakefront', 'Arctic', 'Iconic cities', 'New', 'Surfing', 'Camping', 'Treehouses', 'Campers', 'Desert', 'Golfing', 'Earth homes', 'A-frames', 'Hanoks', 'Cycladic homes', 'Ryokans', 'Yurts', 'Shepherds huts', 'Casas particulares', 'Minsus', 'Windmills', 'Towers', 'Adapted', 'Containers', 'Creative spaces', 'Grand pianos', 'Trulli', 'Dammusi', 'Skiing']


export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg
}
window.cs = stayService


async function query(filterBy = { txt: '' }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(stayId) {
    // return storageService.get(STORAGE_KEY, stayId)
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    // await storageService.remove(STORAGE_KEY, stayId)
    return httpService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        // savedStay = await storageService.put(STORAGE_KEY, stay)
        savedStay = await httpService.put(`stay/${stay._id}`, stay)

    } else {
        // Later, owner is set by the backend
        stay.owner = userService.getLoggedinUser()
        // savedStay = await storageService.post(STORAGE_KEY, stay)
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    const savedMsg = await httpService.post(`stay/${stayId}/msg`, {txt})
    return savedMsg
}


function getEmptyStay() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





