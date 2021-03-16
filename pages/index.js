import axios from 'axios';
import Card from '../components/card.component';
import React, { useState, useEffect } from 'react';

const MainPage = ({ news }) => {
  const [dataToMap, setDataToMap] = useState(news);
  const [skip, setSkip] = useState(20);
  const [limit, setLimit] = useState(20);

  const handleScroll = () => {
    const innerHieght = window.innerHeight;
    const scrollYInPixels = window.scrollY;
    // this is the current hieght of the app with all the cards it contains
    const applicationHeight = document.body.offsetHeight;
    console.log('Scrolling', document.body.offsetHeight);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div style={{ backgroundColor: 'whitesmoke', paddingTop: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="position-fixed"
              style={{
                height: '50rem',
                backgroundColor: 'white',
                marginTop: '1rem',
                minWidth: '17%',
              }}
            >
              {' '}
              lol
            </div>
          </div>
          <div className="col-6">
            {dataToMap.map((data) => {
              return <Card cardData={data} key={data._id} />;
            })}
          </div>
          <div className="col">
            <div
              className="position-fixed"
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
