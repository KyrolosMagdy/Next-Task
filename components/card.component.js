import React, { useState, useEffect } from 'react';

const Card = ({ cardData, handleLoadedImage, isOnMobile }) => {
  const handleLoadingImage = (e) => {
    return handleLoadedImage();
  };
  let imageEl = null;

  const imageRefCb = (image) => {
    if (image) {
      imageEl = image;
      if (image.complete) {
        return handleLoadingImage();
      }
    }
  };

  const imageStyles = isOnMobile
    ? { width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }
    : {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '5px',
      };

  return (
    <div className="card" style={{ borderRadius: '1rem', marginTop: '1rem' }}>
      <div className="m-2">
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
            ref={imageRefCb}
            style={imageStyles}
          />
          <p className={`font-weight-bold ${isOnMobile ? 'h9 mb-0' : 'h4'}`}>
            {' '}
            {cardData.source.title}{' '}
          </p>
        </div>

        <div className="card-body">
          <p className="card-text">{cardData.title}</p>
        </div>
        <div style={{ padding: '20px', paddingTop: '0' }}>
          <p className={`text-secondary ${isOnMobile && 'h12 mb-0'}`}>
            {' '}
            {cardData.created_at}{' '}
          </p>
        </div>
        <div className="card-footer bg-white d-flex flex-wrap">
          {' '}
          {cardData.keywords.map((keyword) => {
            {
              const randomId = Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, '')
                .substr(2, 10);
              return (
                <button
                  className={`m-1 bg-white btn`}
                  style={{
                    borderColor: '#48c788',
                    color: '#48c788',
                    borderRadius: '1rem',
                  }}
                  key={randomId}
                >
                  {' '}
                  <p className={`mb-0 ${isOnMobile && 'h12 p-6 mb-0'}`}>
                    {keyword.name}
                  </p>
                </button>
              );
            }
          })}{' '}
        </div>
      </div>
    </div>
  );
};

export default Card;
