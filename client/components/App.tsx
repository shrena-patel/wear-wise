// import { useFruits } from '../hooks/useFruits.ts'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'
import Home from './Home'

function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Wear Wise</h1>
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
      <Home/>
    </>
  )
}

export default App
