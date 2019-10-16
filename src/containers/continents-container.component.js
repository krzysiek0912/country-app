import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {    

    chooseContinent = ({ target }) => {
        this.props.dispatch(setContinent(target.value))
    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount = () => {
        this.props.dispatch(setContinent('Europa'));
    }

    render() {
        return (
            <div className="container">
                <select className="form-control" onChange={e => this.chooseContinent(e)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }
}

const mapStateToProps = (store) => ({ 
        visibleCountries: store.countriesReducer.visibleCountries
    });


export default connect(mapStateToProps)(ContinentsContainer);