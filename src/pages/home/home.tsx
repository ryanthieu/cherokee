import '../../App.css';
import Kaytra3 from '../../images/Kaytra3.png'
import './home.css';
//import Kaytra from '../../images/Kaytra.png'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return(
        <div>
            
            <div className="home-container">
            <br />
            <div className="container">
                <div className="animation-wrapper">
                <div className="typed-out"></div>
                </div>
                <br></br>
            </div>
            
            <div className="content-grid">
                <div className="image-container">
                    <img src={Kaytra3} alt="kaytra" className="homeimage"/>
                    <br></br><br></br>
                </div>
                <div className="text-container">
                    <h3 className="study-classes">Cherokee <br /> <span className="all-in">Tribe</span></h3>
                    <p className="byColor">By: Ryan, Ayan, Ian, Muhammad, Seif, Ansh, and Javier </p>
                    
                </div>
            </div>
            <div className="content-grid">
                <div className="text-container centered">
                    <h3><a href="/curriculum" className="underlinehome">Explore our Curriculum</a></h3>
                </div>
            </div>
            <br /><br />
            <hr />
            <br />
            

            <div className="parent-centered-container">
                <div className="centered-container">
                    <h1>The Cherokee</h1>
                    <p className="para">The Cherokee had a unique identity that allowed them to utilize natural resources to the fullest while navigating interactions with colonists. </p>
                </div>
            </div>
            <hr />
            <div>
                <h1 className="custom-chapter-black">The Cherokee<br /> <mark className="custom-heading-highlight">In One Place</mark></h1>
                <button onClick={() => navigate("/learnmore")} type="button" className="custom-blue-button-rounded">Learn More</button>
                <br /><br /><br />
            </div>
            <hr />
        </div>
            
            
        
        </div>
    );
}