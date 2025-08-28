import Image from 'next/image'

interface AppBarProps {
  title?: string
  children?: React.ReactNode
}

const AppBar = ({ title = 'SwiftShop', children }: AppBarProps) => (
  <header className='app-bar'>
    <div className='flex items-center gap-2'>
      <Image src='/logo.svg' alt='Logo' width={40} height={40} />
      <h1 className='font-semibold text-xl'>{title}</h1>
      <div>{children}</div>
    </div>
  </header>
)

export default AppBar
