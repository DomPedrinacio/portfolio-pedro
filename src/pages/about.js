import React from 'react'
import '../styles/about.css'

function About() {
    return (
        <section className="page-section about">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-white">Sobre</span>
                    <span className="title-accent"> Mim</span>
                </h2>

                <p className="about-intro">
                    Meu nome é Pedro Campos — desenvolvedor focado em criar interfaces acessíveis,
                    rápidas e agradáveis de usar. Já passei por experiências profissionais reais,
                    projetos pessoais ambiciosos e até empreendi criando soluções completas
                    para pequenos negócios.
                </p>

                <p className="about-intro">
                    Gosto de transformar ideias em produtos funcionais, seja no front-end,
                    no back-end ou no desenvolvimento de sistemas completos. Fora do código,
                    sou fã de jogos Souls Like, estudo segurança da informação, curto explorar
                    frameworks novos e toco violão nas horas vagas.
                </p>

                {/* ==== TRILHA PROFISSIONAL ==== */}
                <h3 className="sub">Trilha Profissional</h3>

                <div className="timeline">

                    <div className="timeline-item">
                        <div className="timeline-left">Freelancer</div>
                        <div className="timeline-center">
                            <span className="timeline-date">Desde 2022</span>
                        </div>
                        <div className="timeline-right">
                            Criação de sites, aplicações e sistemas internos — atuando tanto no front-end quanto no back-end, conforme a necessidade dos clientes.
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-left">DAKMARK — Estágio — Front-End</div>
                        <div className="timeline-center">
                            <span className="timeline-date">2022 - 20223</span>
                        </div>
                        <div className="timeline-right">
                            Desenvolvimento de uma dashboard financeira completa usando HTML, CSS, JS, Python e integração com XLSX.
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-left">Devs Systems — CEO</div>
                        <div className="timeline-center">
                            <span className="timeline-date">2023 — Atual</span>
                        </div>
                        <div className="timeline-right">
                            Desenvolvimento de dois sistemas SaaS para uma barbearia: primeira versão com HTML, CSS, JS e Python + MySQL; nova versão com React e backend Python atualizado.
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-left">Método Telecom — Suporte Técnico</div>
                        <div className="timeline-center">
                            <span className="timeline-date">2024 — Atual</span>
                        </div>
                        <div className="timeline-right">
                            Suporte técnico e desenvolvimento de soluções internas, automações e melhorias em ferramentas utilizadas pela empresa.
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
