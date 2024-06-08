import { dummy } from "./movieDumm";
import Movie from "./components/Movie";

function App() {
  return (
    <div>
      <div className='app-container'>
        {
          dummy.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

/*
  dummy라는 객체를 가져오고 Movie라는 컴포넌트를 가져옴
  div태그를 2개 이용해 dummy객채의 results를 순회화면서 Moive컴포넌트를 생성
  그리고 Movie컴포넌트 안에 있는 여러요소를 props에 전달
*/