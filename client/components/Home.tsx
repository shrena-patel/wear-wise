import { useUser } from "@clerk/clerk-react"

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return null
  }
  console.log(user)
  if (isSignedIn) {
    // Eventually return the items component, to display the user's items
    return (
      <p>Hello {user.username}! Here are your items:</p>
    )
  }
  // user.emailAddresses[0].emailAddress is the email
  return (
    <>
      <p>Welcome to Wear Wise! Sign in to view your items</p>
    </>
  )
}
