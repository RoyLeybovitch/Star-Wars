function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    let val = localStorage.getItem(key)
    if (!val) return null
    return JSON.parse(val)
}

export default {
    saveToStorage,
    loadFromStorage,
}
