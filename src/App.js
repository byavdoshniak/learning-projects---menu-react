import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [category, setCategory] = useState('all')

  const checkCategory = (item) => {
    if (item === 'breakfast') {
      setCategory('breakfast')
    } else if (item === 'lunch') {
      setCategory('lunch')
    } else if (item === 'shakes') {
      setCategory('shakes')
    } else if (item === 'all') {
      setCategory('all')
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button className='filter-btn' onClick={() => checkCategory('all')}>
            All
          </button>
          <button
            className='filter-btn'
            onClick={() => checkCategory('breakfast')}
          >
            Breakfast
          </button>
          <button className='filter-btn' onClick={() => checkCategory('lunch')}>
            Lunch
          </button>
          <button
            className='filter-btn'
            onClick={() => checkCategory('shakes')}
          >
            Snakes
          </button>
        </div>
        <div className='section-center'>
          {category === 'all'
            ? items.map((item) => {
                return <Menu key={item.id} item={item} />
              })
            : items
                .filter((item) => item.category === category)
                .map((item) => {
                  return <Menu key={item.id} item={item} />
                })}
        </div>
      </section>
    </main>
  )
}

export default App
