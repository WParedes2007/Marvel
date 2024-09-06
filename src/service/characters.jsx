
import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = "27ce3963137618051ec02952878896ff37961a12"
const public_api_key = "df95a3cc7b3b452678b424028f4fc173"

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()

export const reqCharacters = async (page = 1, limit = 20, search = '') => {
    const offset = (page - 1) * limit
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&limit=${limit}`
    if (search) {
        url += `&nameStartsWith=${encodeURIComponent(search)}`
    }
    const resp = await fetch(url)
    const { data } = await resp.json()
    return data || { results: [], total: 0, limit: 20 }
}