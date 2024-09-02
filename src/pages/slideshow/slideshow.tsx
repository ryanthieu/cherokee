import './slideshow.css';
export const Slideshow = () =>{
    return(
        <div className="curtain-page">
            <div className="stage">
                <div className="curtain-container">
                    <iframe src="https://docs.google.com/presentation/d/1OEGFZOkrLZNbdi2k3bdzduqkiEwYLaqKzqEPMcsAaic/embed?start=true&loop=false&delayms=60000" title="slideshow" frameBorder={0} width={960} height={569} allowFullScreen={true}></iframe>
                </div>
            </div>
        </div>
    );
}