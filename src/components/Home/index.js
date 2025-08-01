import LogoTitle from '../../assets/images/logo-k.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                eerthi,
                <br />
                programmer
                </h1>
                <h2>Computer Science, 2027 at UMass Amherst</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home