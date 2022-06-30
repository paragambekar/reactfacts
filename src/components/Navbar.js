
import ReactLogo from "../images/reactlogo.png"

export default function Headers(){
    return (
        <nav className="navbar-items">
            <div className="logo-title">
                <img src={ReactLogo} className="logo"/>
                <h2>React Facts</h2>
            </div>
            <div className="project-name">
                React Course - Project 1
            </div>
        </nav>
    )
}
