import React from 'react';
import '../styles/loading.css';

function LoadingScreen() {
    return (
        <div className="loadingScreen">
            <div className="pedroDev">
                Pedro<span className="logoGlow">Dev</span>
            </div>
            <h5 className="frontEnd">Front end developer</h5>
        </div>
    );
}

export default LoadingScreen;
