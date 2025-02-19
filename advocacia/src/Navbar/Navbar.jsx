import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav>
        <div className='logo-nav'> 
        <img src="lawofdefense2.jpg" alt="logo" />
        </div>
        <div className='links-nav'>
        <Link to='/cliente'></Link>
        </div>
    </nav>
    
  )
}

export default Navbar
