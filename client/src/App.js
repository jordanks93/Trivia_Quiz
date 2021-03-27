import './App.css';
import FooterInfo from './components/FooterInfo';
import HeaderInfo from './components/HeaderInfo';
import Registration from './components/RegistrationForm';
import MakeTake from './components/MakeTake';
import MakeQuiz from './components/MakeQuiz';
import MakeQuizFinish from './components/MakeQuizFinish';
import SelectQuiz from './components/SelectQuiz';
import RandomQuiz from './components/RandomQuiz';
import EndQuiz from './components/EndQuiz';
import ScoreScreen from './components/ScoreScreen';
import CreateAccount from './components/CreateAccount';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './components/WelcomeBox';

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div className="App">
        <HeaderInfo />
        <FooterInfo />
      </div>
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/maketake" component={MakeTake} />
        <Route path="/makequiz" component={MakeQuiz} />
        <Route path="/makequizfinish" component={MakeQuizFinish} />
        <Route path="/selectquiz" component={SelectQuiz} />
        <Route path="/randomquiz" component={RandomQuiz} />
        <Route path="/endquiz" component={EndQuiz} />
        <Route path="/scorescreen" component={ScoreScreen} />
        <Route path="/CreateAccount" component={CreateAccount} />
        {/* welcome needs to remain on the bottom of this list */}
        <Route path="/" component={Welcome} />
      </Switch>

    </Router>
  );
}

export default App;
