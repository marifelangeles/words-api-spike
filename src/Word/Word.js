import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import Header from './Header';
import SelectedWord from './SeletedWord';
import PartOfSpeech from './PartOfSpeech';
import Pronunciation from './Pronunciation';



class Word extends Component {

    getDefinition = () => {
        const wordResults = this.props.word.results;
        // get random word only if definition exists --> definition needed for MVP
        // if so, return first definition 
        if (wordResults) {
            console.log('wordResults', wordResults);
            const definition = wordResults[0].definition;
            return definition;
        } else {
            this.props.getRandomWord();
        }
    }

    
    

    handleNewWord = () => {
        console.log('in handleNewWord');
        this.props.getRandomWord();
    }

    render() {

        return (
            <div>
                <Grid container spacing={8}>
                    <Grid container>
                        <Header />
                    </Grid>
                    <Grid container>
                        <SelectedWord />
                    </Grid>
                    <Grid container spacing={16}>
                        <PartOfSpeech />
                        <Pronunciation />
                    </Grid>
                    <Grid container>
                        <Grid item sm={12}>
                            <p>{this.getDefinition()}</p>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item sm={12}>
                            <Button
                                onClick={this.handleNewWord}
                                color="primary"
                            >
                                New Word
              </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Word);
