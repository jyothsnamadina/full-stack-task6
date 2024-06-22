import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';

const images = [
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFYavpbtGEWygEsVcfbo1ArlHkXRTGI7pVw&s',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIzOAnYugOBeGvmiFW8EbjfE7pcfFuPLExg&s',
   '/images/tajmahal.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBoLRyxPjKpd5JIxVwdbNBOB5GyLqxTzyZw&s',
   '/images/Machu Picchu.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2PrnzfBNXJAd2MOSACylNBDQAphjojjO2w&s',
   '/images/greatwallofchina.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrEvZbwvJVg29nUj2BRXqwSNRlNLuKJrYhw&s',
   'https://t4.ftcdn.net/jpg/03/66/90/39/360_F_366903907_RzCXMYTOdWnfEmm8wZ3fKnfEOLE2Qhmh.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG9jVhwbHPS2ggd4TzVj3XV5O9ebi0eY7IQ&s',
   'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_640.jpg',
   'https://wallpapers.com/images/featured/moonlight-pictures-95q7m44qkjtemaej.jpg',
   
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentIndex(images.indexOf(image));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageItem key={image} image={image} openModal={openModal} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;

