import React from 'react';
import BookForm from '../../../components/BookForm';

const Search: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <BookForm />
    </div>
  );
}

export default Search;
