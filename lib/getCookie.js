export const COOKIENAME = process.env.cookiename

const myMatch = new RegExp(`${COOKIENAME}=*.+(;$)?`, 'g')
export const getCookie = (cookies = '') => {
 const cookie = (cookies.match(myMatch) || [])[0]

 return cookie ? cookie.split('=')[1] : null
}