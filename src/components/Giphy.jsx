import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { ToogleGifModal } from '../redux/slices/app';

const gf = new GiphyFetch('j1QdOMn4EUp65JkAc4jXERMA8IksyJow');

export default function Giphy() {
  const dispatch = useDispatch()
  const gridRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null); // Sửa false thành null cho error
  const [gifs, setGifs] = useState([]);
  const [gridWidth, setGridWidth] = useState(0); // Thêm state để quản lý width

  const fetchGifs = async (offset) => {
    return gf.search(value || 'random', { offset, limit: 10 }); // Thêm giá trị mặc định khi value rỗng
  };

  const debouncedFetchGifs = _.debounce(async () => {
    setLoading(true);
    setError(null);

    try {
      const newGifs = await fetchGifs(0);
      setGifs(newGifs.data);
    } catch (error) {
      setError(error.message); // Lưu message của error để hiển thị
    } finally {
      setLoading(false);
    }
  }, 500) //time(500ms )
  // Lấy width của gridRef khi component mount
  useEffect(() => {
    if (gridRef.current) {
      setGridWidth(gridRef.current.offsetWidth);
    }

    // Optional: Cập nhật width khi cửa sổ thay đổi kích thước
    const handleResize = () => {
      if (gridRef.current) {
        setGridWidth(gridRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch GIFs khi value thay đổi hoặc component mount
  useEffect(() => {
    const fetchInitialGifs = async () => {
      setLoading(true);
      setError(null);

      try {
        const initialGifs = await fetchGifs(0);
        setGifs(initialGifs.data);
      } catch (error) {
        setError(error.message); // Lưu message của error để hiển thị
      } finally {
        setLoading(false);
      }
    };

    fetchInitialGifs();
  }, [value]); // Thêm value vào dependency để fetch lại khi search thay đổi

  const handleGifClick = (gif, e) => {
    e.preventDefault();
    console.log(gif);
    const gifUrl = gif.images.original.url
    console.log(gifUrl);

    dispatch(ToogleGifModal({
      value: true,
      url: gifUrl
    }))
  }
  return (
    <div ref={gridRef} className="w-full mt-3">
      <input
        type="text"
        placeholder="Search for gifs..."
        className="border border-stroke rounded-md p-2 w-full mb-2 outline-none bg-transparent dark:border-strokedark"
        value={value}
        onChange={(e) => {
          setValue(e.target.value),
            debouncedFetchGifs() //goi debounced function 
        }}
      />

      {loading && <p>Loading GIFs...</p>}
      {error && <p className="text-red">Error: {error}</p>}

      <div className="h-48 overflow-auto no-scrollbar">
        {gifs.length > 0 && (
          <Grid
            width={gridWidth}
            columns={8}
            gutter={6}
            fetchGifs={fetchGifs}
            key={value}
            onGifClick={handleGifClick}
            data={gifs}
          />
        )}
      </div>
    </div>
  );
}