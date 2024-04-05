import { useState } from 'react';

const images = [
  { id: 1, src: '/path/to/image-1.jpg', alt: 'Image description 1' },
  { id: 2, src: '/path/to/image-2.jpg', alt: 'Image description 2' },
  { id: 3, src: '/path/to/image-3.jpg', alt: 'Image description 3' },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (img) => {
    setSelectedImg(img);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} className="rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out" onClick={() => openLightbox(img.src)} />
        ))}
      </div>
      {selectedImg && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeLightbox}>
          <img src={selectedImg} alt="Selected" className="max-w-full max-h-full z-50" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
