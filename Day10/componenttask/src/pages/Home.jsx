

const Home = ({products}) => {
    
  return (
    <>
    <div className="bg-blue-300 p-4 flex gap-4 justify-center">
        {products.map((items,i)=>(
            <div key={i} className="bg-white h-30 w-30 text-center text-blue-800 py-5">
                <h1>{items.prodName}</h1>
                <h1>{items.category}</h1>
                <h1>{items.price}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default Home