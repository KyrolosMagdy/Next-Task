import axios from 'axios';
import Card from '../components/card.component';
import React, { useState, useEffect } from 'react';

const MainPage = ({ news }) => {
  const [dataToMap, setDataToMap] = useState(news);
  const [skip, setSkip] = useState(20);
  const [limit, setLimit] = useState(20);
  const [isReady, setIsReady] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false);
  // const [imageLoaded, setImageLoaded] = useState(0);

  const handlePhotosBeenLoaded = (state) => {
    return setIsReady(state);
  };

  const handleWindowResize = () => {
    if (typeof window != undefined) {
      const isMobile = window.innerWidth >= 320 && window.innerWidth <= 1024;
      // update state
      setIsOnMobile(isMobile);
    }
  };

  let imageLoaded = 0;

  const handleLoadedImage = async () => {
    imageLoaded++;
    if (imageLoaded + 1 >= skip) {
      setIsReady(true);
    }
  };

  const getCardsData = async () => {
    try {
      const res = await axios.get(
        `http://80.240.21.204:1337/news?skip=${skip}&limit=${limit}`
      );
      setDataToMap([...dataToMap, ...res.data.news]);
    } catch (err) {
      console.log('ERROR: ', err);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 1000
    ) {
      if (isReady) {
        setIsReady(false);
        return getCardsData();
      }
    }
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div style={{ backgroundColor: 'whitesmoke', paddingTop: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className={`position-fixed ${isOnMobile && 'd-none'}`}
              style={{
                height: '50rem',
                backgroundColor: 'white',
                marginTop: '1rem',
                minWidth: '17%',
              }}
            ></div>
          </div>
          <div className={`${isOnMobile ? 'col-12' : 'col-6'}`}>
            {dataToMap.map((data) => {
              const randomId =
                Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, '')
                  .substr(2, 10) + data._id;
              return (
                <Card
                  cardData={data}
                  key={randomId}
                  setIsReady={handlePhotosBeenLoaded}
                  handleLoadedImage={handleLoadedImage}
                  skip={skip}
                  isOnMobile={isOnMobile}
                />
              );
            })}
          </div>
          <div className="col">
            <div
              className={`position-fixed ${isOnMobile && 'd-none'}`}
              style={{
                height: '50rem',
                backgroundColor: 'white',
                marginTop: '1rem',
                minWidth: '17%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainPage.getInitialProps = async () => {
  const response = await axios.get(
    'http://80.240.21.204:1337/news?skip=0&limit=20'
  );

  return response.data;
};

export default MainPage;
