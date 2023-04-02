import { trpc } from '@app/utils/trpc'
import ReactJson from 'react-json-view'

const Product = () => {
    const userQuery = trpc.users.getAll.useQuery()

    const updateUserMutation = trpc.users.update.useMutation()

    function updateUser() {
        updateUserMutation.mutate(
            { id: 1, name: 'James' },
            {
                onSuccess: (data) => console.log({ data }),
            }
        )
    }

    return (
        <>
            <h3>status : {userQuery.status}</h3>
            <div>
                Product: <ReactJson src={userQuery.data as object} />
            </div>

            <h3>Mutation status: {updateUserMutation.status}</h3>
            <div>
                Update result:{' '}
                <ReactJson src={updateUserMutation.data as object} />
            </div>
            <button type="button" onClick={updateUser}>
                Update User
            </button>
        </>
    )
}

export default Product
