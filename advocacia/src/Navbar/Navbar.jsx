import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    
    <nav>
        <div className='logo-nav'> 
        <img src="lawofdefense2.jpg" alt="logo" />
        </div>
        <div className='links-nav'>
        {/* <Link to='/cliente'>kj</Link> */}
        </div>
    </nav>

  )
}

export default Navbar
