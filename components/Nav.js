import Link from 'next/link'
import NewGameButton from './NewGameButton';

export default function Nav() {
  return (
    <nav>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/">
          <a> CODENAMES</a>
        </Link>
        <NewGameButton />
      </div>
    </nav>
  )
}