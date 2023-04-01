import { trpc } from '@app/utils/trpc'

const Product = () => {
    const query = trpc.sayHi.useQuery()
    const userQuery = trpc.users.get.useQuery()

    return (
        <>
            <h3>status : {query.status}</h3>
            <div>Product: {query.data}</div>
            <button type="button" onClick={() => query.refetch()}>
                click me
            </button>
        </>
    )
}

export default Product
