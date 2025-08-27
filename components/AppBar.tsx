import React from 'react'

interface AppBarProps {
  title?: string
  children?: React.ReactNode
}

const AppBar = ({ title = 'EComm', children }: AppBarProps) => (
  <header className='app-bar'>
    <h1 className='font-semibold text-xl'>{title}</h1>
    <div>{children}</div>
  </header>
)

export default AppBar
