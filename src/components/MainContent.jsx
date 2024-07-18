import { useState } from "react"
import user from "./images/about.png"
import work1 from "./images/chat.png"
import work2 from "./images/ecommerce.png"
// import work3 from "./images/user.png"
import resume from "./images/Vaibhav.pdf"
import Footer from "./Footer"

const MainContent = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabname) => {
        setActiveTab(tabname)
    }

    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={user} alt="user-image" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About Me</h1>
                            <p className="me">Hi! I'm Vaibhav Raj, a passionate full-stack developer with a degree in Bachelor of Engineering in Computer Science from Sant Longowal Institute of Engineering and Technology. I specialize in building dynamic and responsive web applications using the MERN stack, with skills in React.js, Node.js, Express.js, MongoDB and Python. I have a strong foundation in both frontend and backend development, and I enjoy tackling new challenges and learning continuously. I look forward to contributing my skills and enthusiasm to a dynamic development team and working on innovative projects.</p>

                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === "skills" ? 'active-link' : ""}`} onClick={() => opentab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === "experience" ? 'active-link' : ""}`} onClick={() => opentab('experience')}>Experience</p>
                                <p className={`tab-links ${activeTab === "education" ? 'active-link' : ""}`} onClick={() => opentab('education')}>Education</p>
                            </div>
                            <div className={`tab-contents ${activeTab === "skills" ? 'active-tab' : ""}`} id="skills">
                                <ul>
                                    <li><span>Programming Languages</span><br />JavaScript, Python</li>
                                    <li><span>Frontend Technologies</span><br />HTML, CSS, React.js, Tailwind CSS, Daisy UI, Material UI</li>
                                    <li><span>Backend Technologies</span><br />Node.js, Express.js</li>
                                    <li><span>Database</span><br />MongoDB, MySQL, PostgreSQL</li>
                                    <li><span>Tools & Platforms</span><br />Git, GitHub, RESTful APIs</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "experience" ? 'active-tab' : ""}`} id="experience">
                                <ul>
                                    <li><span>June 2024 - Current</span><br />Virtual Internship at Extion Infotech.</li>
                                </ul>
                            </div>

                            <div className={`tab-contents ${activeTab === "education" ? 'active-tab' : ""}`} id="education">
                                <ul>
                                    <li><span>August 2022 - Current</span><br />Bachelor of Engineering from Sant Longowal Institute of Engineering and Technology</li>
                                    <li><span>August 2019 - June 2022</span><br />Diploma from Sant Longowal Institute of Engineering and Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services">
                <div className="container">
                    <h1 className="sub-title">My Services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Full Stack Development</h2>
                            <p style={{ fontSize: "16px" }}>Passionate full stack developer skilled in Javascript, dedicated to crafting robust and user-centric web applications. Excited about leveraging cutting-edge technologies to create seamless digital experiences. Committed to delivering scalable solutions that exceed client expectations. Ready to bring innovation and efficiency to your web projects.</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-crop-simple"></i>
                            <h2>API Integration and Automation</h2>
                            <p style={{ fontSize: "16px" }}>Aspiring developer with a focus on Python, specializing in API integration and automation solutions. Passionate about leveraging technology to streamline operations and enhance user experiences. Dedicated to delivering customized automation strategies that optimize processes and drive efficiency. Excited to contribute innovative solutions to your projects.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={work1} alt="project" />
                            <div className="layer">
                                <h3>Whisper</h3>
                                <p>A chat web app that enables users to send real time messages seamlessly. .</p>
                                <a href="https://whisper-bzec.onrender.com" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            <img src={work2} alt="project" />
                            <div className="layer">
                                <h3>Shopee</h3>
                                <p> A Shopping Website where user can login and shop various products.</p>
                                <a href="https://github.com/VaibhavTiwary/E-Commerce" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>

                        <div className="work">
                            {/* <img src={work3} alt="project" /> */}
                            <h1 style={{ textAlign: "center" }}>coming soon...</h1>
                            <div className="layer">
                                <h3>Coming soon</h3>
                                {/* <p>The app connects to the talented people around the world. Download it from play store.</p> */}
                                <p>Currently Working on a python project!!</p>
                                <a href="/"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <a href="/" className="btn">See more</a> */}
                </div>
            </div>

            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact me</h1>
                            <p><i className="fas fa-paper-plane"></i> vaibhavtiwary7766@gmail.com</p>
                            <p><i className="fas fa-phone-square-alt"></i> 8102153469</p>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/vaibhav_tiwary_/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/rvbhv/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/VaibhavTiwary" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                            <a href={resume} download="Vaibhav" className="btn btn2">Download CV</a>
                        </div>

                        <div className="contact-right">
                            <form>
                                <input type="text" name="Name" placeholder="Your Name" required />
                                <input type="email" name="Email" placeholder="Your Email" required />
                                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn btn2">Submit</button>

                            </form>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainContent;
