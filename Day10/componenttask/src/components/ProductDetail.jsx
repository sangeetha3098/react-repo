import Product from "../pages/Product"


const ProductDetail = () => {
  const product = ["Kurti", 500, "Available"]
  return (
    <>
      <Product product={product} />
    </>
  )
}

export default ProductDetail
