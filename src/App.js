import React, { Component } from 'react';
import './App.css';
import Title from './components/AppTitle'
import MoviesList from './components/MoviesList'

import stars1 from './img/1star.png'
import stars2 from './img/2stars.png'
import stars3 from './img/3stars.png'
import stars4 from './img/4stars.png'
import stars5 from './img/5stars.png'

let MoviesListLoading

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesList: [{
        title: 'Joker',
        release: '2019',
        imageUrl: 'https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg',
        ratingUrl: stars5,
        rating: 5
      }, {
        title: 'Alita',
        release: '2019',
        imageUrl: 'https://i.etsystatic.com/19472203/r/il/e27854/1763716170/il_794xN.1763716170_mzto.jpg',
        ratingUrl: stars4,
        rating: 4
      }, {
        title: 'El Camino',
        release: '2019',
        imageUrl: 'https://i.redd.it/vxj9weop6hi31.jpg',
        ratingUrl: stars3,
        rating: 3
      }, {
        title: 'Midway',
        release: '2019',
        imageUrl: 'http://www.impawards.com/2019/posters/midway_xlg.jpg',
        ratingUrl: stars2,
        rating: 2
      }],
      isLoading:true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
          isLoading:false
      })
    }, 3000);
}
  
  render() {
    return (
      <div className="App">
        <Title />
        <div className='container'>
         <MoviesList myMovies={this.state.moviesList} isLoading={this.state.isLoading}/>
        </div>
        
      </div>
    );
  }
}

export default App;
