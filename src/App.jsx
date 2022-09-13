import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'

function App() {

  const [show, setShow] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)

  const getImageUrl = async () => {
    let response = await fetch('https://picsum.photos/200/300')

    setImageUrl(response.url)
    setLoading(false)
  }

  useEffect(() => {
    getImageUrl()
  }, [])
  
  if (loading) return <p>loading</p>

  return (
    <>
      <Header setShow={setShow}/>
      {
        show && <Login setShow={setShow}/>
      }
      <img src={imageUrl} alt="Random image" />
    </>
  )
}

export default App
