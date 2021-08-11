import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [itemsList, setItems] = useState(items)

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <div className='section-center'>
          {itemsList.map((item) => {
            return <Menu key={item.id} item={item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
