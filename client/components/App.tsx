import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'

import Home from './Home'

function App() {

  return (
    <>
      <div className="app">
        <h1>Wear Wise</h1>
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
