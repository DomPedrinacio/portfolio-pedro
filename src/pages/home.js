import React from 'react'
import '../styles/home.css'
import PEDRO from '../img/pedro-perfil-CM.png'
import IMGRCT from '../img/React.png'

function Home() {
    return (
        <section className="page-section home">
            <div className="container home-wrapper">

                {/* FOTO */}
                <div className="profile-box">
                    <img
                        src={PEDRO}
                        alt="Pedro Campos"
                        className="profile-photo"
                    />
                </div>

                {/* TEXTO PRINCIPAL */}
                <div className="home-content">

                    <h1 className="title">
                        <span className="title-white">Pedro Campos</span>
                        <span className="title-accent"> — Front-end Developer</span>
                    </h1>

                    <p className="lead">
                        Desenvolvedor front-end focado em criar interfaces acessíveis, rápidas
                        e intuitivas. Apaixonado por tecnologia, segurança da informação,
                        games estilo Souls Like e música — sempre buscando aprender algo novo.
                    </p>

                    {/* GRID DE SPOILERS */}
                    <div className="home-grid">

                        <div className="card">
                            <h3>✨ Habilidades</h3>
                            <ul>
                                <li>React.js & Componentização</li>
                                <li>HTML / CSS / UI Responsiva</li>
                                <li>Python & Integrações</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h3>🧩 Projetos</h3>
                            <p>
                                Sistemas SaaS, dashboards, landing pages e aplicações para
                                clientes reais — incluindo minha microempresa Devs Systems.
                            </p>
                        </div>

                        <div className="card">
                            <h3>📌 Sobre Mim</h3>
                            <p>
                                Minha trajetória inclui estágio como front-end, freelancers e
                                desenvolvimento de sistemas completos em produção.
                            </p>
                        </div>

                        <div className="card">
                            <h3>📨 Contato</h3>
                            <p>
                                Fique à vontade para falar comigo — estou sempre aberto a
                                ideias, projetos e colaborações.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
