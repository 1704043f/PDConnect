import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { reset, reduxForm } from 'redux-form';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';    


const styles = theme => ({
    root: {

    },
    textTitle: {
        textAlign: "center",
        paddingTop: "20px"
    },
    TextStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    text: {
        fontSize: "20px",
        lineHeight: "32px",
        textAlign: "justify", 
        padding: "20px"
    },
    Btn: {
        width: "150px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px"
    },

});


class InfoNILO extends Component {
    state = {
        redirect: false
    }

    render() {

        const { classes } = this.props
        const { redirect } = this.state
        if (redirect) {
            return (
                <Redirect to={`/result`} />
            )
        }
        return (
            <div>
                <span style={{
                    marginRight: '50px', textAlign: 'center', position: "fixed", top: "10%", left: "5%",
                }}>
                    <Button variant='contained' color='secondary' className={classes.Btn} onClick={() => this.setState({ redirect: true })} className={classes.button}>
                        Back to result
                    </Button>
                </span>
                <div className={classes.textTitle} style={{paddingBottom: "20px"}}>
                    <h1>The NILO-PD Study</h1>
                </div>

                <div>
                    <h3 className={classes.textTitle}>Description</h3>
                    <p className={classes.text}> The NILO-PD study will investigate the safety and tolerability of nilotinib. Nilotiniab is an existing treatment cancer, but a small scale clinical study has shown that it may have benfit in slowing the progression of Parkinson disease as well. The Parkinson Study Group (PSG) is conducting this clinical trial in approximately 25 research institutions across the United States. It aims to enroll enroll 75 participants</p>
                </div> 

                <hr />

                <div>
                    <h3 className={classes.textTitle}>What is involved?</h3>
                    <div className={classes.text}>
                        <p>There will be two cohorts of trial participants, the first will be in the study for 9 months, the second cohort for 15 months. For both cohorts participation will involve: </p>
                        <ul>
                            <li>11 in person visits over the duration of the study</li> 
                            <li>Clinical assessments and completion of study questinnaires</li> 
                            <li>Several blood samples will need to be taken</li>
                            <li>Certain clinic visits will involve a lumbar puncture</li>
                        </ul>
                    </div>
                </div>
                
                <hr />

                <div>
                    <h3 className={classes.textTitle}>Am I eligable?</h3>
                    <div className={classes.text}>
                        <p>You may be eligable for enrollment in the NILO trial if: </p>
                        <ul>
                            <li>You are aged between 40 and 79 years </li> 
                            <li>Have been diagnosed with Parkinson disease for more than 5 years</li> 
                            <li>Are on stable Parkinson disease medications, which must include levodopa, for at least 30 days pror to enrollment. </li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Why should I participate?</h3>
                    <div className={classes.text}>
                    <p> Study participants will receive: </p>
                        <ul>
                            <li>Either the study drug (new potential treatment) or a placebo at no cost.</li> 
                            <li>At present the benefit of receiving the study drug are unknown , but by participating in the trial you will be contributing to the growing body of knowledge about Parkinson disease. </li> 
                            <li>Study related care and consultation with a study doctor.</li> 
                            <li>Study office visits and health assessments.</li>
                            <li>Travel costs and re-imbursement of any other costs incurred relating to the study.</li>
                        </ul> 
                    </div>    
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Who is running the study?</h3>
                    <p className={classes.text}>The Parkinson Study Group (PSG) is conducting this clinical trial with funding from the Michael J Fox Foundation. </p>
                </div>

                <hr />

                <div>
                    <h3 className={classes.textTitle}>Should I discuss this trial with my doctor?</h3>
                    <p className={classes.text}>If you have an interest in participating in this this clinical trial, by all means talk to the doctor who normally looks fater you for Parkinson disease. Your doctor can refer you to participate in the trial, and if you do participate they will certainly need to know. There are also dedicated study physicians who you can contact directly to discuss participating in this trial and they can help with more specific questions about the trial such as what is involved, the benefits and the risks.   </p>
                </div>

                <hr />

                <hr />

                <div>
                    <h3 className={classes.textTitle}>More information</h3>
                    <p className={classes.text}>More information on the NILO trial as well as how to contact a trial physician can be found on the trial website, www.nilopd.org. </p>
                </div>
            </div>
        )
    }
}

InfoNILO = withStyles(styles)(InfoNILO)
export default InfoNILO