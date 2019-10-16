import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {    

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search = ({target}) => {
        this.props.dispatch(searchCountries(target.value));
    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    render() {
        return (
            <>
                <div className="container search text-center">
                    <input className="form-control form-control-lg" type="text" onChange={this.search}/>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry}/>
            </>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);