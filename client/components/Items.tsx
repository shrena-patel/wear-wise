import { UserData } from "../../models/users"

interface Props {
  user: UserData
}
function Items(props: Props) {
  console.log(props.user)
  // const userDetails = props.user

  // use useQuery to get all the items associated with that user
  return (
    <>
     <p>Some items</p>
    </>
  )
}

export default Items
