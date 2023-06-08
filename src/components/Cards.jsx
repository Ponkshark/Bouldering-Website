import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import {useState} from 'react'
import { useEffect } from 'react';
import axios from "axios";

function Cards() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [centers, setCenters] = useState([]);
    async function fetchData() {
        const centers = await axios.get('https://localhost:7115/api/BoulderingLocations');
        setCenters(centers.data);
    }

    const YourComponent = () => {
      useEffect(() => {
        fetchData();
      }, []);
  }

  YourComponent();

  return (
    <div className='cards'>
        <h1>Check out these climbing centers!</h1>
        <div className="cards__container" onClick={handleClick}>
            {/* <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                      src="/images/bouldercenter1.jpg"
                      title="Vertical Dreams"
                      label="Norwich"
                      path='/centers'
                      text='With locations across the United Kingdom, Vertical Dreams is a state-of-the-art bouldering gym that caters to climbers of all levels. With innovative climbing walls, top-notch facilities, and expert coaching, Vertical Dreams is the perfect place to hone your skills.'
                    />
                    <CardItem 
                      src="/images/bouldercenter2.jpg"
                      title="Climb Nation"
                      label="Ipswich"
                      path='/centers'
                      text='Climb Nation is a bouldering center located in the heart of Ipswich, England. With walls up to 4.5 meters high and a range of climbing challenges, Climb Nation is a popular destination for both experienced climbers and beginners looking to try something new.'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                      src="/images/bouldercenter3.jpg"
                      title="The Grip Zone"
                      label="Cromer"
                      path='/centers'
                      text='The Grip Zone is a bouldering center in Cromer, that features walls completely covered in holds, offering climbers a unique and challenging experience. With regular events and workshops, The Grip Zone is the perfect place to meet other climbers and develop your skills.'
                    />
                    <CardItem 
                      src="/images/bouldercenter4.jpg"
                      title="The Chimney"
                      label="Great Yarmouth"
                      path='/centers'
                      text='The Chimney is a bouldering center along the coastline situated in Great Yarmouth, that is known for its cutting-edge climbing walls and challenging routes. With a focus on innovation and creativity, The Chimney is a favorite destination for serious climbers looking to push their limits.'
                    />
                    <CardItem 
                      src="/images/bouldercenter5.jpg"
                      title="Gravity Heights"
                      label="Watton"
                      path='/centers'
                      text='Located in Watton, Norfolk, Gravity Heights is a bouldering gym that offers a variety of climbing challenges, from easy slab climbs to difficult overhangs. The gym also features a fitness area and yoga studio, making it a great place to work on your overall health and fitness.'
                    />
                </ul> */}
                {/* <button onClick={fetchData}>Fetch API</button> */}
                {centers.map((center, i) => {
                return <div  className="cards__wrapper" key={center.id}>
                  <ul className="cards__items">
                    <CardItem
                      src={center.src}
                      title={center.title}
                      label={center.label}
                      path={center.path}
                      text={center.text}
                    />
                    {i < centers.length - 1 && <hr/>}
                  </ul>
                </div>
                })}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Cards