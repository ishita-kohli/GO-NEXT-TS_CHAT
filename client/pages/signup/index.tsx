import { useState, useContext, useEffect } from 'react'
import { API_URL } from '../../constants'
import { useRouter } from 'next/router'
import { AuthContext, UserInfo } from '../../modules/auth_provider'


const Index = () => {
    const [username,setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()


  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email, password }),
      
      })
      return router.push("/login")
  
    } catch (err) {
      console.log(err)
    }
  }
  

  return (
    <div className='flex items-center justify-center min-w-full min-h-screen'>
      <form className='flex flex-col md:w-1/5'>
        <div className='text-3xl font-bold text-center'>
          <span className='text-blue-500'>welcome!</span>
        </div>
        <input
          placeholder='username'
          className='p-3 mt-8 rounded-md border-2 border-gray-500 focus:outline-none focus:border-blue-500'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='email'
          className='p-3 mt-8 rounded-md border-2 border-gray-500 focus:outline-none focus:border-blue-500'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='p-3 mt-4 rounded-md border-2 border-gray-500 focus:outline-none focus:border-blue-500'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='p-3 mt-6 rounded-md bg-blue-500 font-bold text-white' type='submit' onClick={submitHandler}>
          signup
        </button>
      </form>
    </div>
  )
}

export default Index