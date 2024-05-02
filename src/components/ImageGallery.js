import React, { useState, useEffect } from 'react';
import './styles.css';
import './logo.png';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 16;

  useEffect(() => {
    loadImages(page);
  }, [page]);

  const loadImages = async (pageNumber) => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`);
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <div className="gallery">
        {images.map(image => (
          <img key={image.id} src={image.download_url} alt={`Image ${image.id}`} />
        ))}
      </div>
      <button onClick={handleLoadMore} className="loadMoreBtn">Load More</button>
    </div>
  );
}

export default ImageGallery;
