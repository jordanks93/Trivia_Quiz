import "./assets/css_reset.css"
import "./assets/styles.css";
import Button from '@material-ui/core/Button';
import questions from "./assets/questions.jpg"
import { Link } from 'react-router-dom';

function MakeTake() {
    return (
        <div>
            <br /><br />
            <div className="WelcomeBox">
                <h1 className="smallHeader"><br />MAKE OR TAKE A QUIZ<br />&nbsp;</h1>
                <p className="space">
                    <Button type="submit" variant="outlined" color="primary">
                        <Link to="/makequiz">
                            Make Your Own Quiz
                    </Link>
                    </Button>
                </p>

                <p className="space">
                    <Button type="submit" variant="outlined" color="primary">
                        <Link to="/selectquiz">
                            Take a Quiz
                    </Link>
                    </Button>
                </p>

                <img className="imgRoundBorder" src={questions} alt="Quiz Questions"></img>
                <h6>Free Use Photo by Olya Kobruseva from Pexels</h6>

                <br></br>

            </div>
        </div>
    );
}

export default MakeTake;