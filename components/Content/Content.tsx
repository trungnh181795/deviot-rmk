import { FC, ReactNode } from 'react'
import { Container } from '@mui/material'

interface ContentType {
  children: ReactNode
}

const Content: React.FC<ContentType> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      {children}
    </Container>
  )
}

export default Content