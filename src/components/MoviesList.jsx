import React,{Component} from 'react'
import MovieCard from './MovieCard'
import Spinner from './Spinner'
class MoviesList extends Component {

    constructor(props){
        super(props)
        this.state={
            isLoading: false
        }
    }
    render(){
    return (
        <div className='movies'>
            {this.props.myMovies.map((el, key) =><MovieCard myMovie={el} key={key} />)}
        </div>
    )
    }
}
export default Spinner(MoviesList)