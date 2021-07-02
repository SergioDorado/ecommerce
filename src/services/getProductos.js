export default function getProductos(){
  const prodUrl = 'https://jsonfy.com/items'

  return fetch(prodUrl).then(res => res.json())
  .then(response =>{
    const productos = response.map(prod =>{
      const {id,name,description,price,photo_url,stock,sales} = prod
      return {id,name,description,price,photo_url,stock,sales}
    })
    return productos
  })

}