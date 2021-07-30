import firebase from "./firebase"

export default function getProducto(id){
 
  return firebase.db.doc("productos/"+id).get()
  .then( doc => {
    const {name,description,price,photo_url,stock,sales} = doc.data()
    const id = doc.id
    return {id,name,description,price,photo_url,stock,sales}
  })
}