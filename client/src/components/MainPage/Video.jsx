import React from 'react';

function Video() {

    return (

        <div className="wrapper" style={{ position: 'fixed' }}>
            <div className="full-screen">
                <div className="full-screen__body">
                    <div className="full-screen__title">EFR</div>
                    <div className="full-screen__text">
                        the future is in your hands</div>
                </div>
                <video autoPlay muted loop preload="auto" className="full-screen__video">
                    <source type="video/webm" src="/Pexels Videos 2078401.mp4" />
                    {/* <source type="video/mp4" src="videos/forest.mp4"/> */}
                </video>
            </div >
        </div >
    );
}

export default Video;
