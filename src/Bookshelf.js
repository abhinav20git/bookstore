import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 items-center bg-purple-100">
         <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Bookshelf</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {bookshelf.map((book) => (
          <div key={book.key}  className="group relative h-[220px] border bg-gray-200 rounded-lg cursor-pointer">
            <div className='ml-2 mt-2'>
            <h3 className="text-sm text-gray-700">{book.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{book.author_name ? book.author_name.join(', ') : 'Unknown author'}</p>
            <p className="text-sm font-medium text-gray-900">
                                        Edition Count:{book.edition_count}
                                    </p>
          </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <button onClick={() => navigate('/') } className="bg-purple-500 px-4 py-1 text-white rounded">
            Back to Search
        </button>
        </div>
    </div>
  );
};

export default Bookshelf;
