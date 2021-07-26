import firebase from "./firebase"

export default function getProducto(id){
 const getProdUrl = 'https://jsonfy.com/items/' + id

//  return fetch(getProdUrl).then(res => res.json()
//  .then( producto => {
//    return producto[0]
//  }))
  return firebase.db.doc("productos/"+id).get()
  .then( doc => {
    const {name,description,price,photo_url,stock,sales} = doc.data()
    const id = doc.id
    return {id,name,description,price,photo_url,stock,sales}
  })
}