import Eggy from './eggman.js';
import '../styling/error.css';

export default function Error() {
    return (
    <div className='error-container'>  
        <Eggy position="bottom-right" message="Wow!! Looks like you found an easter egg! ~How utterly useless~" />
        <div className="error-code">404 ERROR: you're not supposed to be here!</div>
        <img className='easter-egg' src="/images/easter-egg.png" alt="easter egg" />
    </div> 
    )
} 