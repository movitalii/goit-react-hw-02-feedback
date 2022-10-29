import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {   
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    voteGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1
            }
        });
    };

    voteNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        });
    };

    voteBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        });
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;

        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage() {
        let goodPercentage = 0;
        const totalFeddbacks = this.countTotalFeedback();
        const goodFeddbacks = this.state.good;

        if (totalFeddbacks !== 0) {
            goodPercentage = Math.round((goodFeddbacks * 100) / totalFeddbacks);
        }        

        return goodPercentage;
    }

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className={css.feedback}>
                <h2 className={css.title}>Please leave feedback</h2>
                <div className={css.feedback_options}>
                    <button type="button" className={css.option_btn} onClick={this.voteGood}>Good</button>
                    <button type="button" className={css.option_btn} onClick={this.voteNeutral}>Neutral</button>
                    <button type="button" className={css.option_btn} onClick={this.voteBad}>Bad</button>
                </div>
                <div className={css.statistics}>
                    <h2 className={css.title_stat}>Statistics</h2>
                    
                        {total
                            ?
                            <div className={css.votes}>
                                <span className={css.vote}>Good: {this.state.good}</span>
                                <span className={css.vote}>Neutral: {this.state.neutral}</span>
                                <span className={css.vote}>Bad: {this.state.bad}</span>
                                <span className={css.vote}>Total: {total}</span>
                                <span className={css.vote}>Positive feedback: { positivePercentage }%</span>
                            </div>                            
                            
                            : <span className={css.no_votes}>There is no feedback</span>
                        }                       
                                        
                </div>
            </div>
        );
    };
};

export default Feedback;