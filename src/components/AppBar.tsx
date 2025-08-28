import Image from 'next/image'
import SearchBox from './SearchBox'
import Link from 'next/link'

interface AppBarProps {
  title?: string
}

const AppBar = ({ title = 'SwiftShop' }: AppBarProps) => (
  <header className='app-bar'>
    <div>
      <Link className='flex items-center gap-2' href='/'>
        <Image src='/logo.svg' alt='Logo' width={40} height={40} />
        <h1 className='font-semibold text-xl'>{title}</h1>
      </Link>
    </div>
    <div>
      <SearchBox />
    </div>
  </header>
)

export default AppBar
