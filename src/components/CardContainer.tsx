import React from 'react';
import CardPost from './CardPost';

import image1 from '@/assets/loginbg.jpg';


const databox = [
  {
    title: "Hello",
    description: "Description",
    imagesrc: image1,
  },
  {
    title: "Hello Again",
    description: "Another description",
    imagesrc: image1,
  }
];

const CardContainer = () => {
  return (
    <div className='w-[60vw] h-screen flex flex-col gap-4 p-4 overflow-y-auto'>
      {databox.map((item, index) => (
        <CardPost 
          key={index} 
          title={item.title} 
          description={item.description} 
          imageSrc={item.imagesrc} 
        />
      ))}
    </div>
  );
};

export default CardContainer;
