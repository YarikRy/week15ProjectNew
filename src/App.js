import React, {useState, useEffect} from 'react'
import './App.css';
import MemberForm from './Components/NewMemberForm';
import MemberList from './Components/MemberList';
import UpdateForm from "./Components/UpdateForm"
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {
  const GYM_ENDPOINT = 'http://localhost:3000/member'

  const [member, setMember] = useState([{}])

  const [newMemberName, setNewMemberName] = useState('')
  const [newMemberAge, setNewMemberAge] = useState('')
  const [newMemberWeight, setNewMemberWeight] = useState('')

  const [updatedName, setUpdatedName] = useState('')
  const [updatedAge, setUpdatedAge] = useState('')
  const [updatedWeight, setUpdatedWeight] = useState('')

  const getUsers = async () => {
    const resp = await fetch(GYM_ENDPOINT)
    const json = await resp.json()
    setMember(json)
  }

  useEffect(() => {
    getUsers()
  })

  const deleteUser = (id) => {
    fetch(`${GYM_ENDPOINT}/${id}`, {
      method: 'DELETE'
    }).then(() => getUsers())

  }

  const updateUser = (e, userObject) => {

    e.preventDefault()
    let updatedUserObject = {
      ...userObject,
      memberName: updatedName,
      memberAge: updatedAge,
      memberWeight: updatedWeight,
    }

    fetch(`${GYM_ENDPOINT}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject),
      headers: {'Content-Type': 'application/json'}
    }).then(() => getUsers())

    setUpdatedName('')
    setUpdatedAge('')
    setUpdatedWeight('')
  }

  const postNewUser = (e) => {
    e.preventDefault()
    fetch(GYM_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
          memberName: newMemberName,
          memberAge: newMemberAge,
          memberWeight: newMemberWeight,
        }
      )
    }).then(() => getUsers())
    setNewMemberName('')
    setNewMemberAge('')
    setNewMemberWeight('')
  }

  return (
    <div className="App">
      <div className='topBar'>
        Gym
      </div>
      <div>
      <MemberForm 
      setNewMemberName={setNewMemberName} 
      setNewMemberAge={setNewMemberAge}
      setNewMemberWeight={setNewMemberWeight}
      newMemberName={newMemberName}
      newMemberAge={newMemberAge}
      newMemberWeight={newMemberWeight}
      />
      <button className='btn btn-success btn-lg mt-2' onClick={(e) => postNewUser(e)}>Post</button>
      </div>
      <div>
        {member.map((user, index) => (
          <>
          <div className='border border-dark border-3 mt-3'>
          <MemberList 
          member={member}
          />
          <button className='btn btn-danger btn-lg mt-2' onClick={() => deleteUser(user.id)}>Delete</button>

          <UpdateForm 
          setUpdatedName={setUpdatedName} 
          setUpdatedAge={setUpdatedAge}
          setUpdatedWeight={setUpdatedWeight}
          updatedName={updatedName}
          updatedAge={updatedAge}
          updatedWeight={updatedWeight}
          />
          <button className='btn btn-success btn-lg mt-2' onClick={(e) => updateUser(e, user)}>Update</button>
          </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
