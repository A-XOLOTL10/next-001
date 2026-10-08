
const UserDetails = async ({params}: {params: Promise<{ id: string }>}) => {
    const { id } = await params;
  return (
    <div>
      <h1>Show User Details</h1>
      <p>User ID: {id}</p>
    </div>
  )
}

export default UserDetails
