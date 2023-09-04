import React from 'react'
import { AuthButton, Container } from './styles'
import { signIn } from 'next-auth/react'

type AuthButtonsProps = {
  callbackUrl: string
}

const AuthButtons = ({ callbackUrl = '/' }: AuthButtonsProps) => {
  const handleSignIn = (provider?: string) => {
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <img src="/images/icons/github.svg" alt="Github Logo" />
        Entrar com Github
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket Icon" />
        Entrar como visitante
      </AuthButton>
    </Container>
  )
}

export default AuthButtons
