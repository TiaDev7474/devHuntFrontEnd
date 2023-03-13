
export const useToken = async() =>{
  const token = await localStorage.getItem('token')
  return token
}