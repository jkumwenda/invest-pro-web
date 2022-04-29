const token = localStorage.getItem('token')
const headers = {'Content-Type': 'application/json', Authorization: 'Bearer ' + token, }

export const get = async (axios,url) => {
    let data = await axios.$get(url, {
        headers: headers,
    })
    return data
}

export const post = async (axios,url, formData) => {
    let data = await axios.$post(url, formData, {
        headers: headers,
    })
    return data
}

export const update = async (axios,url, formData) => {
    let data = await axios.$put(url, formData, {
        headers: headers,
    })
    return data
}

export const destroy = async (axios,url) => {
    let data = await axios.$delete(url, {
        headers: headers,
    })
    return data
}