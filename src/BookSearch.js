import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { searchBooks } from './api';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const { data: books, isLoading, error } = useQuery({
    queryKey: ['books', query],
    queryFn: () => searchBooks(query),
    enabled: !!query,
  });

  return (
    <div className=''>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">Book Search</h1>
        </div>

        <div className="flex justify-center gap-2 mt-8 mb-8"><button onClick={() => navigate('/bookshelf') } className="bg-purple-500 px-4 py-1 text-white rounded">Go to My Bookshelf</button></div>
        <div className="relative mt-2 rounded-md flex justify-center gap-8 mb-4 "><input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
        className="block border-dashed w-1/2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 "
      /></div>
      {isLoading && <p className='flex justify-center items-center'>Loading....</p>}
      {error && <p>Error fetching books</p>}
      {books && (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {books.map((book) => (
            <div key={book.key} className="group relative h-[220px] border bg-gray-200 rounded-lg cursor-pointer">
                                    
                                    
               <div className='ml-2 mt-2 '>                   
                                
              <h3 className="text-sm text-gray-700">{book.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{book.author_name ? book.author_name.join(', ') : 'Unknown author'}</p>
              <p className="text-sm font-medium text-gray-900">
                                        Edition Count:{book.edition_count}
                                    </p>
              <button onClick={() => addToBookshelf(book)} className="bg-purple-500 px-4 py-1 text-white rounded mt-2">Add to Bookshelf</button>
            </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default BookSearch;
