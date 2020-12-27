import PageRouter from "./components/navigation/PageRouter";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./components/navigation/NavBar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <PageRouter/>
            </Router>
        </div>
    );
}

export default App;
