import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import PEDRO from '../img/pedro-perfil-CM.png'

const FINANZEN_URL = 'https://finanzen-xmwi.vercel.app'

function Home() {
    return (
        <section className="home">
            <div className="orb orb-1" aria-hidden="true" />
            <div className="orb orb-2" aria-hidden="true" />

            {/* ── HERO ── */}
            <div className="hero">
                <div className="hero-text">
                    <span className="badge">
                        <span className="badge-dot" />
                        Disponível para projetos
                    </span>

                    <h1 className="hero-title">
                        <a
                            href={FINANZEN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="name-link"
                        >
                            Pedro Campos
                        </a>
                    </h1>

                    <p className="hero-role">Full-stack Developer</p>

                    <p className="hero-bio">
                        Desenvolvedor focado em criar interfaces acessíveis, rápidas e
                        intuitivas. Apaixonado por tecnologia, segurança da informação,
                        games estilo Souls Like e música.
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn-primary">Ver Projetos</Link>
                        <Link to="/contact" className="btn-outline">Entrar em Contato</Link>
                    </div>
                </div>

                <div className="hero-photo-wrap">
                    <a
                        href={FINANZEN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="photo-link"
                        title="Ver FinanZen — meu projeto em destaque"
                    >
                        <div className="photo-ring">
                            <img
                                src={PEDRO}
                                alt="Pedro Campos"
                                className="hero-photo"
                            />
                        </div>
                    </a>
                </div>
            </div>

            {/* ── INFO CARDS ── */}
            <div className="info-grid">
                <div className="info-card">
                    <h3>✨ Habilidades</h3>
                    <ul>
                        <li>React &amp; TypeScript</li>
                        <li>Node.js &amp; APIs REST</li>
                        <li>HTML / CSS responsivo</li>
                        <li>Python &amp; Integrações</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3>🚀 Projetos</h3>
                    <p>
                        Sistemas SaaS, dashboards financeiros, apps com IA e landing
                        pages para clientes reais.
                    </p>
                </div>

                <div className="info-card">
                    <h3>📌 Sobre Mim</h3>
                    <p>
                        Estágio, freelancers e sistemas completos em produção. CEO da
                        microempresa Devs Systems desde 2023.
                    </p>
                </div>

                <div className="info-card">
                    <h3>📨 Contato</h3>
                    <p>
                        Sempre aberto a ideias, parcerias e novos projetos. Vamos criar
                        algo juntos?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home
