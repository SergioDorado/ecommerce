
export default function getProducto(id){
 const getProdUrl = 'https://jsonfy.com/items/' + id

 return fetch(getProdUrl).then(res => res.json()
 .then( producto => {
   return producto[0]
 }))
}