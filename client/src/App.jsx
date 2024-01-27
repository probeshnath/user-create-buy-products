import React from 'react'

const App = () => {
  return (
    <main className='bg-red-200 w-screen h-screen'>
      <section className='max-w-7xl mx-auto'>
        <div>
          <h2>All products</h2>
        </div>
        {/* product create section */}
        <div>
          <input type="text" placeholder='Enter Product Name' />
          <div>
            <input type="number" placeholder='Enter Product Price' />
            <input type="number" placeholder='Enter Product Quantity' />
          </div>
          <div>
            <input type="file" placeholder='Enter Your Product Image' />
            <button>Create</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App