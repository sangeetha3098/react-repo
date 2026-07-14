const Product = (props) => {
    const [name, price, status] = props.product
    return (
        <>
            <div className="flex gap-10 justify-center items-center m-4">

                <div className='bg-purple-300 w-60 h-50 p-2 rounded'>
                    <h1>Product name is {name}</h1>
                    <p >Product Price is {price}</p>
                    <p>Product stock is {status}</p>
                </div>

            </div>
        </>
    )
}

export default Product