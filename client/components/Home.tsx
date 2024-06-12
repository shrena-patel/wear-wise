import { useUser } from '@clerk/clerk-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserData } from '../../models/users'
import { addUser } from '../apis/users'
import { useEffect } from 'react'

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()

  const queryClient = useQueryClient()

  const addUserMutation = useMutation({
    mutationFn: (userToAdd: UserData) => addUser(userToAdd),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  })

  useEffect(() => {
    console.log(user, 'user in useEffect')
    user && addUserMutation.mutate({
      clerk_id: user.id,
      name: user.username,
      phone: user.phoneNumbers[0].phoneNumber,
      email: user.emailAddresses[0].emailAddress,
      profile_image: user.imageUrl,
    })
  }, [user])
  
  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return <p>Hello {user.username}! Here are your items:</p>
  }
  // user.emailAddresses[0].emailAddress is the email
  return (
    <>
      <p>Welcome to Wear Wise! Sign in to view your items</p>
    </>
  )
}
