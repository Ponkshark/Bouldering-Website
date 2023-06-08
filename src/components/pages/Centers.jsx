import React from 'react';
import '../../App.css';

export default function Centers() {
    return (
        <>
            <h1 className='centers'>Centers</h1>
            <div className="centers-wrapper">
                <div className="centers-item-wrapper" id="climbing-center-1">
                    <div className="centers-item left-item">
                        <h5>Vertical Dreams</h5>
                        <p>With locations across the United Kingdom, Vertical Dreams is a state-of-the-art bouldering gym that caters to climbers of all levels. With innovative climbing walls, top-notch facilities, and expert coaching, Vertical Dreams is the perfect place to hone your skills.</p>
                    </div>
                    <div className="centers-item right-item">
                        <img src="/images/bouldercenter1.jpg" alt="Vertical Dreams Center" className="centers__item__img right-item" />
                    </div>
                </div>
                <div className="centers-item-wrapper" id="climbing-center-2">
                    <div className="centers-item left-item">
                        <img src="/images/bouldercenter2.jpg" alt="Climb Nation Center" className="centers__item__img  left-item" />
                    </div>
                    <div className="centers-item right-item">
                        <h5>Climb Nation</h5>
                        <p>Climb Nation is a bouldering center located in the heart of Ipswich, England. With walls up to 4.5 meters high and a range of climbing challenges, Climb Nation is a popular destination for both experienced climbers and beginners looking to try something new.</p>
                    </div>
                </div>
                <div className="centers-item-wrapper" id="climbing-center-3">
                    <div className="centers-item left-item">
                        <h5>The Grip Zone</h5>
                        <p>The Grip Zone is a bouldering center in Cromer, that features walls completely covered in holds, offering climbers a unique and challenging experience. With regular events and workshops, The Grip Zone is the perfect place to meet other climbers and develop your skills.</p>
                    </div>
                    <div className="centers-item right-item">
                        <img src="/images/bouldercenter3.jpg" alt="The Grip Zone Center" className="centers__item__img right-item" />
                    </div>
                </div>
                <div className="centers-item-wrapper" id="climbing-center-4">
                    <div className="centers-item left-item">
                        <img src="/images/bouldercenter4.jpg" alt="The Chimney Center" className="centers__item__img  left-item" />
                    </div>
                    <div className="centers-item right-item">
                        <h5>The Chimney</h5>
                        <p>The Chimney is a bouldering center along the coastline situated in Great Yarmouth, that is known for its cutting-edge climbing walls and challenging routes. With a focus on innovation and creativity, The Chimney is a favorite destination for serious climbers looking to push their limits.</p>
                    </div>
                </div>
                <div className="centers-item-wrapper" id="climbing-center-5">
                    <div className="centers-item left-item">
                        <h5>Gravity Heights</h5>
                        <p>Located in Watton, Norfolk, Gravity Heights is a bouldering gym that offers a variety of climbing challenges, from easy slab climbs to difficult overhangs. The gym also features a fitness area and yoga studio, making it a great place to work on your overall health and fitness.</p>
                    </div>
                    <div className="centers-item right-item">
                        <img src="/images/bouldercenter5.jpg" alt="Gravity Heights Center" className="centers__item__img right-item" />
                    </div>
                </div>
            </div>
        </>
    );
}