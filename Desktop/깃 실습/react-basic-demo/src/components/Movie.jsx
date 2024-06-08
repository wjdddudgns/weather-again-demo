import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie( {title, poster_path, vote_average }) {
    return (
        <div className="movie-container">
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

/*
    React라는 객체를 가져오고 이미지의 기본 URL을 https://...으로 정의
    Movie라는 함수컴포넌트를 정의하고 title, poster_path, vote_average를 props를 통해 받아옴
    리턴을 시켜주는데
    div태그를 이용해 공간을 만든 다음
    이미지 경로를 설정하고 IMG_BASE_URL을 기본 URL과 합쳐 이미지    경로 생성
    movie-info라는 클래스 이름을 지정하고 이는 영화제목이나 평점이 표시
    그리고 span태그를 사용해 평균 평점을 표시
*/