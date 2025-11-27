import React from 'react'
import '../styles/footer.css';


function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <p>© {new Date().getFullYear()} Pedro Campos</p>
                </div>
                <div className="footer-right">
                    <p>Built with React — Front-end focused</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;