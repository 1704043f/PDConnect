import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { updateStepperCount } from '../actions/Stepper';
import { userStylesheet } from '../styles';
import BottomNav from '../components/commons/userBottomNav'

const styles = theme => ({
    container: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

function getSteps() {
    return ['About You', 'Your Life', 'Your Family', 'Medications', 'Surgeries', 'Symptoms - Motor', 'Symptoms - Non-Motor', 'Review'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Tell us about yourselves`;
        case 1:
            return 'Thank you! Now a little bit about your daily routines.';
        case 2:
            return `Please tell us more about your family background`;
        case 3:
            return `Now, your medications?`;
        case 4:
            return `Any surgery procedures`;
        case 5:
            return `Almost there! We need more info about your symptoms`;
        case 6:
            return `We also like to know more about your non-motor symptoms`;
        case 7:
            return `These are some treatments you can talk to your neurologist. `;
        default:
            return 'Unknown step';
    }
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
    };
    componentDidMount() {
        this.props.updateStepperCount();
    }
    handleNext = () => {
        console.log("handleNext")
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        console.log("handleBack")
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes, onPage, stepper } = this.props;
        const { stepperCount, pageImg, totalSteps, pageName, title, subtitle} = stepper;
        console.log("stepper props : ", this.props);
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            onPage!== 'Unknown step' ? 
                <div>
                    <div className={classes.spacingContainer}></div>
                    <Grid container spacing={24}className={classes.stepperContainer}>
                        <Grid item xs={12} >
                            <h2 className={classes.stepperCounter}>Step {stepperCount} of {totalSteps}</h2> 
                            <h3 className={classes.stepperPageName}>{pageName}</h3>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={pageImg} alt={pageName} />
                        </Grid>
                        <Grid item xs={12}>
                            <h2 className={classes.stepperTitle}>{title}</h2>
                            {subtitle ? <hr /> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <span className={classes.stepperTitle}>{subtitle}</span>
                        </Grid>
                    </Grid>

                    <BottomNav handleBack={this.handleBack} handleNext={this.handleNext}/>

                </div>
            :
            null
            
        );
    }
}

function mapStatsToProps(state) {
    //console.log(state);
    return {
        user: state.user,
        currentTreatments: state.currentTreatments,
        previousTreatments: state.previousTreatments,
        userChoice: state.userChoice,
        symptom: state.symptom,
        sideEffect: state.sideEffect,
        stepper: state.stepper,
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

VerticalLinearStepper = withStyles(userStylesheet)(VerticalLinearStepper);

export default connect(mapStatsToProps, { updateStepperCount })(VerticalLinearStepper);