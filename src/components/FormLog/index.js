import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../services/firebase'
import Spinner from '../spinner'
import MsgError from '../MsgError'
import './FormLog.css'
import Boton from '../Button'
import Input from '../Input'


export default function FormLog({campos, title = null,btnText="Submit",login=false, register=false}) {

  const formfields = campos.map(a => a.id)
  const hookinit = {}
  for(const key of  formfields){
    hookinit[key] = ''
  }
  const [form, setForm] = useState(hookinit)
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState({show: false, msg: ''})
  const [showSuccess, setShowSuccess] = useState(false)

  let history = useHistory()


  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    if(register){
      firebase.auth.createUserWithEmailAndPassword(form.mail,form.pass)
      .then( (data)=>{
        console.log("Auth",data)
        firebase.db.collection("usuarios")
        .add({
          nombre: form.name,
          apellido: form.lastname,
          username: form.username,
          telefono: form.tel,
          userId: data.user.uid
        }).then((data) => {
          console.log("Register", data)
          setLoading(false)
        })
      })
      .catch( (error)=>{
        setLoading(false)
        console.log('Error firebase register',error)
      })
    }
    if(login){
      firebase.auth.signInWithEmailAndPassword(form.mail,form.pass)
      .then( (data) => {
        console.log("login Succes", data)
        setLoading(false)
        history.push('/productos')
      })
      .catch( (error) =>{
        console.log("login Fail",error)
        setLoading(false)
        setShowError({
          show: true,
          msg: error.message
        })
      })
    }
  }
  const handleChange = (e) => {

    const value = e.target.value
    const name = e.target.name

    setForm({
      ...form,
      [name] : value
    })
  }


  return(
    <>
      <div className="form-box">
        {showError.show && <MsgError msg={showError.msg} />}
        {!loading &&
          <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            { campos.map(inp => {
              return(
                <Input tipo={inp.tipo} titulo={inp.titulo} id={inp.id} value={form[inp.id]} onChange={handleChange} />
              )
            }) }
            <Boton texto={btnText} tipo="submit"/>
          </form>
      }
      {loading && 
        <div className="loading-content">
          <Spinner />
        </div>
      }
    </div>
    </>
  )
}
