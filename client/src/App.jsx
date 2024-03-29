import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState(null)
  // console.log(products)

  // buy product
  const buyProduct = (product) =>{
   
    const productQuantity = parseInt(product.productQuantity) - 1;
    console.log(productQuantity)


    axios.patch(`http://localhost:5000/products/${product._id}`,{productQuantity: productQuantity})
    .then(res => {
      console.log(res)
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  // add product
  const addProducts = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.name.value;
    const productPrice = form.price.value;
    const productQuantity = form.quantity.value;

    const product = {
      productName,
      productPrice,
      productQuantity
    }
    // console.log(product)
    // fetch("http://localhost:5000/products",)
    axios.post("http://localhost:5000/products", product)
      .then(res => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // fetch all products
  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data)
        // console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [addProducts,buyProduct])


  return (
    <main className='bg-red-200 w-screen h-screen'>
      <section className='max-w-7xl mx-auto flex flex-col justify-between h-full w-full px-2'>
        <div>
          <h2 className='text-center pt-5 lg:pb-10 text-4xl font-semibold text-purple-700'>All products: {products?.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5'>
            {
              products?.map((product, inx) => (
                <div key={inx} className='bg-white py-5 px-10 rounded-md'>
                  <h2 className='text-2xl capitalize'>{product?.productName}</h2>
                  <p className='text-sm'> Price: ${product?.productPrice}</p>
                  <p className='text-sm'>Available: {product?.productQuantity}</p>
                  <button onClick={()=> buyProduct(product)} className='bg-green-600 w-full text-white rounded-md'>Buy</button>
                </div>
              ))
            }
          </div>
        </div>
        {/* product create section */}
        <form onSubmit={addProducts} className='bg-purple-500 py-4 px-6 rounded-md'>
          <input type="text" name='name' className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Name' />
          <div className='flex gap-4'>
            <input type="number" name='price' className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Price' />
            <input type="number" name='quantity' className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Quantity' />
          </div>
          <div className='flex gap-4'>
            {/* <input className='py-2 px-4 mb-2 outline-none w-full rounded-md' type="file" placeholder='Enter Your Product Image' /> */}
            <button type='submit' className='px-6 bg-green-600 text-lg font-semibold text-white rounded-md '>Create</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App