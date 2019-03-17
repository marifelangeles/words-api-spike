import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


class PartOfSpeech extends Component {

    getPartOfSpeech = () => {
        const wordResults = this.props.word.results;
        // part of speech not necessary for MVP
        if (wordResults) {
            if (wordResults[0].partOfSpeech) {
                return wordResults[0].partOfSpeech;
            }
        }
    }

    render() {
        return (
            <Grid item sm={6}>
                <p>{this.getPartOfSpeech()}</p>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(PartOfSpeech);
