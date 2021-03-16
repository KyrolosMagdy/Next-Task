import React from 'react';

const Card = ({ cardData }) => {
  console.log('data: ', cardData);
  return (
    <div className="card" style={{ borderRadius: '1rem', marginTop: '1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start ',
          alignItems: 'center',
          padding: '5px',
        }}
      >
        <img
          src={cardData.source.url}
          className="card-img-top"
          alt="..."
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '5px',
          }}
        />
        <h4> {cardData.source.title} </h4>
      </div>

      <div className="card-body">
        <p className="card-text">{cardData.title}</p>
      </div>
      <div>
        <p> {cardData.created_at} </p>
      </div>
      <div className="card-footer">
        {' '}
        {cardData.keywords.map((keyword) => {
          {
            return <p> {keyword.name}</p>;
          }
        })}{' '}
      </div>
    </div>
  );
};

export default Card;
