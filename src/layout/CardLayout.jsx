import React from 'react'
import CardHeader from '../components/header/CardHeader'
import CardFooter from '../components/footer/CardFooter'

export default function CardLayout({children}) {
  return (
    <div>
        <CardHeader />
        {children}
        <CardFooter />
    </div>
  )
}
