import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Movie from './components/Movie';
import { getNowPlayingMovies } from './apis';

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  
  const { isLoading, error, data } = useQuery({
    queryKey: [page],
    queryFn: () => getNowPlayingMovies(page),
    onSuccess: (res) => {
      setTotal(res.total_results);
    },
  });
  if(isLoading) 
    return <div>Loading...</div>;
  
  if(error instanceof Error)
    return <div>An error has occured : {error.messgae}</div>;
    
  return (
    <div>
      <div className='app-container'>
        {data.results.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
