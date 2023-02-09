import React from 'react'

interface IProps {
  card: CardsStructure[]
}

export const Card: React.FC<IProps> = ({ card }) => {
  return (
    <>
      {card.map((item: CardsStructure, index: number) => (
        <>
          <div key={index}>word: {item.word}</div>
          <div>translation: {item.translation}</div>
          <div>
            images: <img src={item.images} alt='' />
          </div>
        </>
      ))}
    </>
  )
}
