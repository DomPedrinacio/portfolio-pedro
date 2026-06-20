import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p className="footer-left">
                    © {new Date().getFullYear()} Pedro Campos
                </p>
                <p className="footer-right">
                    Built with React &amp;{' '}
                    <a
                        href="https://finanzen-xmwi.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FinanZen
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
