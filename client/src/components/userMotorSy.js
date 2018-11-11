import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startCase } from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


import { activity_level } from '../constants';
import { relative } from 'upath';
//import { submitUserMotorSy} from '../actions/UserMotorSyAction'


const styles = theme => ({
    root: {
        paddingTop: "20px",
    },
    componentBox: {
        maxWidth: "800px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid lightgrey",
        padding: "30px 30px 30px 30px"
    },
    titleStyle: {
        textAlign: "center",
        lineHeight: "40px"
    },
    textStyle: {
        marginTop: '40px',
        marginBottom: '40px'
    },
    subtitleStyle: {
        lineHeight: "30px"
    },
    medText: {
        fontSize: "20px",
        position: "relative",
        top: "10px"
    },
    medGeneric: {
        fontSize: "18px", 
        fontWeight: "bold",
        lineHeight: "30px"
    }, 
    medTrade: {
        lineHeight: "20px",
        fontSize: "18px"
    },
    medTitleText: {
        marginBottom: "10px"
    },
    medSelectBtn: {
        width: "440px",
        height: "30px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
        fontSize: "16px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    medSelectBtn2: {
        float: "right",
        width: "40px",
        height: "60px",
        marginTop: "4px",
        marginLeft: "25px",
        backgroundColor: "white",
        border: "4px solid grey",
        borderRadius: "50%",
        position: "relative",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    medSelectBtnActive: {
        float: "right",
        width: "40px",
        height: "60px",
        marginTop: "4px",
        marginLeft: "25px",
        backgroundColor: "white",
        border: "8px solid grey",
        borderRadius: "50%",
        position: "relative",
         '&:hover': {
             backgroundColor: "white",
         },
    },
    btnText: {
        fontWeight:"bold",
        color: "grey"
    },
    hr: {
        height: "1px", 
        color:  "lightgrey",
        opacity: 0.5
    },
    columnHeader: {
        float: "right",
        fontSize: "20px",
        fontWeight: "bold"
    },
    labelText: {
        fontSize: "18px"
    },
    inputLabel: {
        fontSize: "18px",
        color: "black"
    },
    iconBtn: {
        float: "right",
        '&:hover': {
            backgroundColor: "white",
        },
    },
    iconHover: {
        fontSize: "28px",
        '&:hover': {
            color: "darkblue",
        },
    },
    selectLabel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    doneIcon: {
        fontSize: "44px", 
        color: "green",
        padding: 0,
        marginTop: -6
    },
    closeIcon: {
        fontSize: "44px", 
        color: "black",
        padding: 0,
        marginTop: -6
    },
    doneOutlineIcon: {
        fontSize: "32px",
        color: "#eeeeee",
        '&:hover': {
            color: "green"
        },
    },
    errorText: {
        fontSize: "15px", 
        color: "red", 
        position: "relative", 
        left: "-45px", 
        top: "32px"
    },
    basicBtn: {
        width: "150px",
        height: "30px",
        marginRight: "25px",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "10px",
        fontSize: "14px",
        '&:hover': {
            backgroundColor: "lightgrey",
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});


 class UserMotorSy extends Component {

    state = {
        medsArray: [],
        answers: [],
        noMeds: false,
        open : false,
        modalTitle : '',
        modalDescription : '',
        redirect: false,
        redirectAddress : 'test',
    }  

    handleSubmit = () => {
        console.log("submit - meds:, ", this.state.medsArray)

        // this.submitUserMotorSy(this.state.medsArray)
        // this.setState({
        //     redirect: true
        // })
       
    }

    handleMedSelect = (index, choice, name) => {
        //console.log("handlemedselect : ", index, " + ", name)
        let tempArray = this.state.answers
        let tempMeds = this.state.medsArray
        if (choice === "ns" || choice === "no") {
            tempArray[index] = choice
            let ind = tempMeds.indexOf(name)
            ind >= 0 ? tempMeds[ind] = null : null

        } 
        else {
            tempArray[index] = choice
            tempMeds.indexOf(name) < 0 ? tempMeds.push(name) : null
        }
        this.setState({
            noMeds: false,
            answers: tempArray, 
            medsArray: tempMeds
        })
    }

    handleClearForm() {
        console.log("clear form")
        this.setState({
            noMeds: false,
            answers: [],
            medsArray: []
        })
    }

    handleBack = () => {
        this.setState({
            redirect: true,
            redirectAddress: '/'
        })
    }

    handleInfoClick = (info) => {
        console.log(info)
    }

    getModalStyle = () => {
        const top = 50;
        const left = 50;
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen = (modalItem) => { 
        console.log(modalItem);
         this.setState({ 
             open: true, 
             modalTitle : modalItem.title,
             modalDescription : modalItem.description
        });
     };

     handleClose = () => {
         this.setState({ open: false });
     };


    render() {

        const { handleSubmit, pristine, submitting, classes } = this.props
        const { redirect, redirectAddress, answers, noMeds } = this.state


        const motorSy= [
            {motorSy: "Motor fluctuations", shortDescription: "Symptoms and ease of movement vary throughout the day even on medications.", description: ""},
            {motorSy: "Early wear off", shortDescription: "Your medications stop working aftr a while and symptoms return before next dose", description: ""},
            {motorSy: "Sudden, unpredictable wear off", shortDescription: "Your medications stop working and symptoms suddenly return without warning", description: ""},
            {motorSy: "Freezing", shortDescription: "Sudden freezing of movement at unpredicatble times", description: ""},
        ]


        if (redirect) { 
            const url = `${redirectAddress}`;
            console.log("redirect to .. " + url);
            return<Redirect to={url} />;
        }

        const TopTitle = (props) => {
            return (
                <div>
                    <h1 className={classes.titleStyle}>{props.title}</h1>
                    <br />
                    <hr className={classes.hr} />
                    <br />

                </div>
            )
        }

        const SubTitle = (props) => {
            return (
                <div>
                    <h3 className={classes.subtitleStyle}>{props.subtitle}</h3>
                    <br />
                    <hr className={classes.hr}/>
                    <br />
                </div>
            )
        }

        const BottomNav= (props) => {
            return (
                <div>
                    <br />
                    <br />
                    <Button type="submit" color="primary" className={classes.basicBtn} onClick={() => this.handleSubmit()}>NEXT</Button>
                    <Button type="button" color="primary" className={classes.basicBtn} onClick={() => this.handleClearForm()}>CLEAR</Button>  
                    <br />
                </div> 
            )
        }

        return (
            <section className={classes.root}>
                <div className={classes.componentBox}>
                    
                    <TopTitle title="Almost done! Lastly, about your symptoms" />

                    <SubTitle subtitle="Patients with Parkinson disease eperience a wide ramge of symptoms. Tell us about any of the following which you may haveb expreinced over the past month by clicking the circles next to the symptom. Click on the help icon for more information about each symptom." />

                    <span><em>Let's start with motor symptoms</em></span>
                    <br />
                    <br />
                    <br />

                    {motorSy.map((sy, index) => {

                        return (
                            <div key={index}>
                                <Grid container spacing={24}>

                                    <Grid item xs={12} sm={12} md={7} >
                                    <span className={classes.medTitleText}>
                                        <span className={classes.medGeneric}>{sy.motorSy}</span>  
                                        <Button className={classes.iconBtn} onClick={() => this.handleOpen({title: sy.motorSy, description: sy.shortDescription}) }>
                                            <HelpIcon color="primary" className={classes.iconHover}/>
                                        </Button>
                                    </span>
                                    <br />
                                    <span className={classes.medTrade} > 
                                        {sy.shortDescription}
                                    </span> 
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={5}>
                                        <Button type="button" className={classes.medSelectBtn2} style={{borderColor: answers[index] === "ns" ? "black" : null}} onClick={() => this.handleMedSelect(index, "ns", sy.motorSy)}>
                                            <span className={classes.btnText}  style={{color: answers[index] === "ns" ? "black" : null}}>not sure</span>
                                        </Button>
                                        <Button type="button" className={classes.medSelectBtn2}  style={{borderColor: answers[index] === "ns" ? "black" : null}} style={{borderColor: answers[index] === "no" ? "black" : null}} onClick={() => this.handleMedSelect(index, "no", sy.motorSy)}>
                                            {answers[index] !== "no" && <span className={classes.btnText}>no</span> }
                                            {answers[index] === "no" && <CloseIcon className={classes.closeIcon} /> }
                                        </Button>
                                        <Button type="button" className={classes.medSelectBtn2}  style={{borderColor: answers[index] === "yes" ? "green" : null}} onClick={() => this.handleMedSelect(index, "yes", sy.motorSy)}>
                                            {answers[index] !== "yes" && <span className={classes.btnText}>yes</span> }
                                            {answers[index] === "yes" && <DoneIcon className={classes.doneIcon} /> }
                                            {answers[index] === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "7px", top: "7px"}} /> }
                                            {answers[index] === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "7px", top: "9px"}} /> }
                                            {answers[index] === "yes" && <DoneIcon className={classes.doneIcon} style={{position: "absolute", left: "7px", top: "10px"}} /> } 
                                        </Button>
                                    </Grid>

                                </Grid>
                                <br />
                            </div>
                        )
                    }) }
   
                    <BottomNav />            
            
                </div>

                <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={this.getModalStyle()}  className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                {this.state.modalTitle}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                {this.state.modalDescription}
                            </Typography>
                        </div>
                </Modal>

            </section>

        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ submitUserMotorSy }, dispatch);
// }


UserMotorSy = withRouter(UserMotorSy)
UserMotorSy = withStyles(styles)(UserMotorSy)
// UserMotorSy = connect(null, mapDispatchToProps)(UserMotorSy)
export default UserMotorSy
