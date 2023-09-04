import { useSession, signOut } from 'next-auth/react'
import React from 'react'

const Home = () => {
  const { data } = useSession()

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => signOut()}>sair</button>
    </>
  )
}

export default Home
