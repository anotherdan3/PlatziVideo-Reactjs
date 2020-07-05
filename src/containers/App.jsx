import React, { useState, useEffect } from 'react';
//Components
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
//Styles
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title="My List">
          <Carousel>
            {videos.mylist.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                year={item.year}
                duration={item.duration}
                cover={item.cover}
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Trending">
        <Carousel>
          {videos.trends.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              year={item.year}
              duration={item.duration}
              cover={item.cover}
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>
          {videos.originals.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              year={item.year}
              duration={item.duration}
              cover={item.cover}
            />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
