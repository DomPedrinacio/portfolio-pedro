import React from 'react'
import '../styles/about.css'

const techs = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
]

const timeline = [
    {
        role: "Freelancer",
        date: "Desde 2022",
        desc: "Criação de sites, aplicações e sistemas internos — atuando tanto no front-end quanto no back-end, conforme a necessidade dos clientes.",
    },
    {
        role: "DAKMARK — Estágio Front-End",
        date: "2022 – 2023",
        desc: "Desenvolvimento de uma dashboard financeira completa usando HTML, CSS, JS, Python e integração com XLSX.",
    },
    {
        role: "Devs Systems — CEO",
        date: "2023 — Atual",
        desc: "Desenvolvimento de sistemas SaaS para barbearia e outros clientes: stack React + Node.js + MySQL, do zero ao deploy.",
    },
    {
        role: "Método Telecom — Suporte Técnico",
        date: "2024 — Atual",
        desc: "Suporte técnico e desenvolvimento de automações, melhorias em ferramentas internas e soluções para a operação da empresa.",
    },
]

function About() {
    return (
        <section className="about">
            <h2 className="section-title">
                <span className="title-white">Sobre</span>
                <span className="title-accent"> Mim</span>
            </h2>

            <div className="about-bio">
                <p>
                    Meu nome é Pedro Campos — desenvolvedor focado em criar interfaces
                    acessíveis, rápidas e agradáveis de usar. Já passei por estágios
                    profissionais reais, projetos pessoais ambiciosos e empreendi criando
                    soluções completas para pequenos negócios.
                </p>
                <p>
                    Gosto de transformar ideias em produtos funcionais, seja no front-end,
                    no back-end ou em sistemas completos com IA. Fora do código, sou fã
                    de jogos Souls Like, estudo segurança da informação e toco violão.
                </p>
            </div>

            {/* ── TECNOLOGIAS ── */}
            <h3 className="about-sub">Tecnologias</h3>

            <div className="tech-grid">
                {techs.map(t => (
                    <div className="tech-item" key={t.name}>
                        <img src={t.icon} alt={t.name} />
                        <span>{t.name}</span>
                    </div>
                ))}
            </div>

            {/* ── TIMELINE ── */}
            <h3 className="about-sub">Trilha Profissional</h3>

            <div className="timeline">
                {timeline.map((item, i) => (
                    <div className="timeline-item" key={i}>
                        <div className="timeline-header">
                            <span className="timeline-role">{item.role}</span>
                            <span className="timeline-date">{item.date}</span>
                        </div>
                        <p className="timeline-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
