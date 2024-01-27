import React from 'react'

const App = () => {
  return (
    <main className='bg-red-200 w-screen h-screen'>
      <section className='max-w-7xl mx-auto flex flex-col justify-between h-full w-full px-2'>
        <div>
          <h2 className='text-center pt-5 lg:pb-10 text-4xl font-semibold text-purple-700'>All products</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5'>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
              <button>Buy</button>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
            <div>
              <h2>Product Name</h2>
              <p> Price: $40</p>
              <p>Available: 100</p>
            </div>
          </div>
        </div>
        {/* product create section */}
        <div className='bg-purple-500 py-4 px-6 rounded-md'>
          <input type="text" className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Name' />
          <div className='flex gap-4'>
            <input type="number" className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Price' />
            <input type="number" className='py-2 px-4 mb-2 outline-none w-full rounded-md' placeholder='Enter Product Quantity' />
          </div>
          <div className='flex gap-4'>
            <input className='py-2 px-4 mb-2 outline-none w-full rounded-md' type="file" placeholder='Enter Your Product Image' />
            <button className='px-6 bg-green-600 text-lg font-semibold text-white rounded-md '>Create</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App