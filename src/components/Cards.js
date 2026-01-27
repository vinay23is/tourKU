import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/kucampus.jpg'
                text='Explore the beautiful campus of KU'
                label='Adventure'
                path='/services'
                />
                <CardItem
                src='images/kufootball.jpg'
                text='Take a look at the beautiful Jayhawk Football Stadium'
                label='KU Athletics'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/kupic.jpg'
                text='Witness the beauty of the KU campus'
                label='Heritage'
                path='/services'
                />
                <CardItem
                src='images/kucapfed.jpg'
                text='Capitol Federal Hall ranked as one of the best business schools in the nation'
                label='Business School'
                path='/products'
                />
                <CardItem
                src='images/kuwescoe.webp'
                text='Stroll through the beautiful campus of KU'
                label='Wescoe Beach'
                path='/sign-up'
                />
            </ul>
            </div>
    </div>
    </div>
  )
}

export default Cards
