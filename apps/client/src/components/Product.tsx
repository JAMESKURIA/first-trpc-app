import { trpc } from '@app/utils/trpc'
import ReactJson from 'react-json-view'

const Product = () => {
    const query = trpc.sayHi.useQuery()
    const userQuery = trpc.users.getUser.useQuery()

    return (
        <>
            <h3>status : {userQuery.status}</h3>
            <div>
                Product: <ReactJson src={userQuery.data as object} />
            </div>
            <button type="button" onClick={() => userQuery.refetch()}>
                click me
            </button>
        </>
    )
}

export default Product
