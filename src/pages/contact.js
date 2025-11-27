import React from 'react'
import '../styles/contact.css';

function Contact() {
    return (
        <section className="page-section contact">
            <div className="container">

                {/* Título */}
                <h2 className="section-title">
                    <span className="title-white">Get</span>
                    <span className="title-accent"> In Touch</span>
                </h2>

                {/* Subtítulo */}
                <p className="contact-subtitle">
                    Abaixo estão meus principais canais de contato.
                    Sinta-se à vontade para chamar em qualquer um deles.
                </p>

                {/* Redes Sociais */}
                <div className="contact-socials">

                    <a href="https://github.com/DomPedrinacio"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card">
                        <span className="icon">🐙</span>
                        <div>
                            <h4>GitHub</h4>
                            <p>DomPedrinacio</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/pedro-augusto-576470236/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card">
                        <span className="icon">💼</span>
                        <div>
                            <h4>LinkedIn</h4>
                            <p>Pedro Augusto</p>
                        </div>
                    </a>

                    <a href="https://wa.me/5531984400167"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card">
                        <span className="icon">📱</span>
                        <div>
                            <h4>WhatsApp</h4>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/dompedrinacio?igsh=MTJ4am8waXB1MHcw&utm_source=qr"
                        target="_blank"
                        rel="noreferrer"
                        className="social-card">
                        <span className="icon">📸</span>
                        <div>
                            <h4>Instagram</h4>
                            <p>@dompedrinacio</p>
                        </div>
                    </a>

                    <a href="mailto:pedroafmcampos@gmail.com"
                        className="social-card">
                        <span className="icon">✉️</span>
                        <div>
                            <h4>Email</h4>
                            <p>pedroafmcampos@gmail.com</p>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Contact;
