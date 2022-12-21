import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {
  const [closeForm, setCloseForm] = useState(true)
 
  const {
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useCrud()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {

    getAllUser()
  }, [])



  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={()=> setCloseForm(false)} className='app_btn'>Open form</button>
      <div className={`form-container ${closeForm && 'close_form'}`}>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}
      />
      </div>
      <div className='user_container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App