import React from 'react'

const Category = () => {

  const items =  [{
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
  }]

  return (
    <div className='categories-container'>
      {items.map(item => 
        <div key={item.title} className='category-container'>
          <div className='background-image' style={{ backgroundImage: `url(${item.imageUrl})` }}/>
          <div className='category-body-container'>
            <h2>{item.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Category