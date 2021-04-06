import './App.css';

import Header from "./components/Header/Header";
import About from "./components/About/About";

export default () => {
    return(
        <div className={"app"}>
            <Header />

            <About />
        </div>
    )
}