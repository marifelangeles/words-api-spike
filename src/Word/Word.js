import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import Header from './Header';
import SelectedWord from './SeletedWord';
import PartOfSpeech from './PartOfSpeech';
import Pronunciation from './Pronunciation';
import Definition from './Definition';



class Word extends Component {


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
                        <Definition getRandomWord={this.props.getRandomWord}/>
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
