export default function Eggy(props) {
    let message = props.message;
    let positionX = props.positionX;
    let positionY = props.positionY;
    console.log(positionX, positionY);

    // let style = {

    // }
    return (
            <div className="eggy-container" style={{position: 'absolute', right:positionX, top:positionY}}>
                <img className="eggy-picture" src="/images/eggy.png" style={{height: '200px', width: '200px'}}/>
                <p className="eggy-message">{message}</p>
            </div> 
    )
}