import { useUser } from '@clerk/clerk-react'
import Items from './Items'
import AddItem from './AddItem'

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()

  const userDetails = {
    clerk_id: user?.id,
    name: user?.username,
    email: user?.emailAddresses[0].emailAddress,
    profile_image: user?.imageUrl,
  }

  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return (
      <>
        <p>Hello {user.username}! Here are your items:</p>
        <Items user={userDetails} />
        <AddItem />
      </>
    )
  }

  return (
    <>
      <p>Welcome to Wear Wise! Sign in to view your items</p>
    </>
  )
}
