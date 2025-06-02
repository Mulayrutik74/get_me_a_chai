"use client"
import { SessionProvider } from "next-auth/react"
import React from 'react'

const sessonWraper = ({children }) => {
  return (
    <SessionProvider >
     {children }
    </SessionProvider>
  )
}

export default sessonWraper
