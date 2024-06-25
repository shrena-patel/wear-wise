import { useQueryClient, useQuery } from "@tanstack/react-query"
import { UserData } from "../../models/users"
import { getItemsByUser } from "../apis/items"

interface Props {
  user: UserData
}
function Items(props: Props) {
  console.log(props.user)
  const clerkUserId = props.user.clerk_id

  const { isLoading, isError, error, data: items } = useQuery({
    queryKey: ['items'],
    // TODO: will need to change to use this, but just hardcoding it for now, until the add item form is working
    // queryFn: () => getItemsByUser(clerkUserId)
    queryFn: () => getItemsByUser('user_2iAjUJaAOFUrkWw0FmOjA1hPeTd')
  })
  console.log(items, 'the items')

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Oh no, something went wrong: {error.message}</p>
  }
  // use useQuery to get all the items associated with that user
  return (
    <>
     <ul>
      {items && items.map((item) => {
        return <li key={item.clerk_id}>{item.name}</li>
      })}
     </ul>
    </>
  )
}

export default Items
