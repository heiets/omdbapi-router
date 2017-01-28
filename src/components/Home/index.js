import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements[0].value.toLowerCase();
        if (!value) return false;
        /*eslint-disable no-unused-vars*/
        fetch(`http://www.omdbapi.com/?s=${value}`)
            .then((r) => {
            r.json()
            })
            .then((r) => {
                    if (r == undefined) return false;
                    let newArr = [];
                    r.Search.map((v,i) => newArr.push(
                        <div className='item' key={i} style={{background: `url(${v.Poster})`}}>
                            <div className='title'><Link to={`/${v.imdbID}`}>{ v.Title }</Link></div>
                            </div>
                    ));
                    this.setState({ arr: newArr});
                }
            );
    }
    render() {
        return (
            <div className='flex-container'>
                <form className='col-md-12' onSubmit={::this.handleSubmit}>
                    <input type='text' placeholder='Movie name'/>
                    <button type='submit'>GO</button>
                </form>
                <div className='result'> {this.state.arr} </div>
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}
