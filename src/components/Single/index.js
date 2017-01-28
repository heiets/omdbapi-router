import React, { Component } from 'react'

export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            ready: false
        };
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=${this.props.params.single}`)
            .then((r) => r.json())
            .then((r) => this.setState({movie: r, ready: true}));
    }
    render() {
        let template;
        template = (
            <div className={this.state.ready === false ? 'row single hidden' : 'row single'}>
                <div className='col-md-12'>
                    <div className='col-md-4'>
                        <img src={this.state.movie.Poster} alt='Poster'/>
                    </div>
                    <div className='col-md-8 description'>
                        <h3 className='col-md-12'>{this.state.movie.Title}</h3>
                        <ul>
                            <li><span>Country: </span>{this.state.movie.Country}</li>
                            <li><span>Actors: </span>{this.state.movie.Actors}</li>
                            <li><span>Genre: </span>{this.state.movie.Genre}</li>
                            <li><span>Year: </span>{this.state.movie.Year}</li>
                            <li><span>Awards: </span>{this.state.movie.Awards}</li>
                        </ul>
                        <p>{this.state.movie.Plot}</p>
                    </div>
                </div>
            </div>
        )

        return template;
    }
}
