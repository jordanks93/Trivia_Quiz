import "./assets/css_reset.css"
import "./assets/styles.css";
import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Succeeded() {
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeaderBlue"><br />Account Created<br />&nbsp;</h1>
            <p className="space">
                <Button type="submit" variant="outlined" >
                    <Link to="/register">
                        Sign In
                    </Link>
                </Button>
            </p>

        </div>
    )
}

export default Succeeded;