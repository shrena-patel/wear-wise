import { useUser } from '@clerk/clerk-react'
// import { useQueryClient } from '@tanstack/react-query'

import Items from './Items'
import AddItem from './AddItem'

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()
  const userDetails = {
    clerk_id: user?.id,
    name: user?.username,
    phone: user?.phoneNumbers[0].phoneNumber,
    email: user?.emailAddresses[0].emailAddress,
    profile_image: user?.imageUrl,
  }
  // const queryClient = useQueryClient()

  // const addUserMutation = useMutation({
  //   mutationFn: (userToAdd: UserData) => addUser(userToAdd),
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  // })

  // useEffect(() => {
  //   console.log(user, 'user in useEffect')
  //   user && addUserMutation.mutate({
  //     clerk_id: user.id,
  //     name: user.username,
  //     phone: user.phoneNumbers[0].phoneNumber,
  //     email: user.emailAddresses[0].emailAddress,
  //     profile_image: user.imageUrl,
  //   })
  // }, [user])
  
  if (!isLoaded) {
    return null
  }

  if (isSignedIn) {
    return (
      <>
      <p>Hello {user.username}! Here are your items:</p>
      <Items user={userDetails}/>
      <AddItem />
      </>
    )
  }
  // user.emailAddresses[0].emailAddress is the email
  return (
    <>
      <p>Welcome to Wear Wise! Sign in to view your items</p>
    </>
  )
}
