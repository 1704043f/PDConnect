
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { PRIMARY_COLOR } from '../../themes.js'

const styles = (theme) => ({
    buttonStyle: {
        float: "right",
        paddingTop: '6px',
        border: "2px solid #000080",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: "bold",
        position: "relative", 
        top: "-45px",
        backgroundColor: PRIMARY_COLOR,
        color: "white",
        [theme.breakpoints.down('xs')]: {
            top: "-45px"
        },
        '&:hover': {
            border: "2px solid #000080",
            backgroundColor: "lightgrey",
            fontWeight: "bold",
            color: "#000080"
        }
    }
})

class resultBackButton extends PureComponent  {
    render() {
        const { classes, targetUrl} = this.props
        return (
            <Link to={targetUrl}>
                <Button type="button" className={classes.buttonStyle}>BACK</Button>
            </Link>
        )
    }
}

resultBackButton = withStyles(styles)(resultBackButton)
export default resultBackButton