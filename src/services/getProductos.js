import firebase from './firebase'

export default function getProductos(){
  // const prodUrl = 'https://jsonfy.com/items'

  // return fetch(prodUrl).then(res => res.json())
  // .then(response =>{
  //   const productos = response.map(prod =>{
  //     const {id,name,description,price,photo_url,stock,sales} = prod
  //     return {id,name,description,price,photo_url,stock,sales}
  //   })
  //   return productos
  // })

  return firebase.db.collection('productos').get()
  .then( (response) => {
    const productos = response.docs.map(doc => {
      const {name,description,price,photo_url,stock,sales} = doc.data()
      const id = doc.id
      return {id,name,description,price,photo_url,stock,sales}
    })
    return productos
  })
  .catch(error => {
    console.log('Error get productos', error)
  })

}