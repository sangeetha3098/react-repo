import Home from "../pages/Home"

const Products = () => {
    const prod = [
        {prodName:"Kurti",category:"Dress",price:"600"},
       {prodName:"Jean",category:"Dress",price:"1200"},
     {prodName:"T-shirt",category:"Dress",price:"700"},
    ]
  return (
   <>
   <div>
    <Home products={prod} />

   </div>
   </>
  )
}

export default Products