import profile from "./images/profile-pic.png"
import resume from "./images/Vaibhav_Resume_.pdf"

const Home = () => {
    return (
        <>
            <div className="header-text">
                <div>
                    <p>Full stack Developer</p>
                    <h1>Hi, I'm <span>Vaibhav</span> <br /> Raj From India</h1>
                    <a href={resume} className="btn btn2" style={{ fontSize: "18px" }} download="Vaibhav">Download CV</a>
                </div>
                <img src={profile} alt="Profile" />
            </div>
        </>
    )
}

export default Home