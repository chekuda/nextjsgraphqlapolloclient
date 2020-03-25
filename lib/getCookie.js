export const COOKIENAME = '_quarantine'

export const getCookie = (cookies = '') => {
 const cookie = (cookies.match(/_quarantine=*.(;$)?/) || [])[0]

 return cookie ? cookie.split('=')[1] : null
}