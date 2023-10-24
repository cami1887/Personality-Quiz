import '../styling/eggy.css';

export default function Eggy(props) {
    let message = props.message;
    let position = props.position;
    return (
            <div className={position}>
                <img className="eggy-picture" src="/images/eggy.png" alt="eggy"/>
                <p className="eggy-message">{message}</p>
            </div> 
    )
}