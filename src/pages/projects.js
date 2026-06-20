import React from 'react'
import '../styles/projects.css'

const projects = [
    {
        id: 0,
        title: "FinanZen",
        featured: true,
        desc: "Plataforma SaaS de gestão financeira inteligente com dashboard em tempo real, controle de receitas, despesas e dívidas, assistente de IA por voz e texto (ZEN), sistema de assinaturas e painel admin completo.",
        tech: ["React", "TypeScript", "Node.js", "MySQL", "AI / Groq"],
        link: "https://finanzen-xmwi.vercel.app",
        repo: null,
    },
    {
        id: 1,
        title: "Dev's Systems",
        featured: false,
        desc: "Portfólio da Dev's Systems, empresa de desenvolvimento web focada em soluções personalizadas. Design moderno, responsivo e focado na apresentação dos serviços.",
        tech: ["React", "CSS", "JavaScript"],
        link: "https://devssystems.netlify.app/",
        repo: null,
    },
    {
        id: 2,
        title: "Barbearia Lopes SaaS",
        featured: false,
        desc: "Sistema completo de gestão para barbearia com agendamento de clientes, controle de caixa e dashboard administrativo. Desenvolvido em duas versões com stack atualizado.",
        tech: ["React", "Python", "MySQL"],
        link: null,
        repo: "https://github.com/DevSystemSs/lopes-barber-master",
    },
    {
        id: 3,
        title: "Ioasys Books",
        featured: false,
        desc: "Aplicativo de livros com autenticação, busca avançada e coleção diversificada, consumindo a API pública da Ioasys. Login: books@ioasys.com.br · Senha: ioasysBooks2024",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://desafiofrontendioasys.netlify.app",
        repo: null,
    },
]

function Projects() {
    return (
        <section className="projects">
            <h2 className="section-title">
                <span className="title-white">Meus</span>
                <span className="title-accent"> Projetos</span>
            </h2>
            <p className="projects-subtitle">
                Uma seleção dos sistemas que desenvolvi — de SaaS a apps de IA.
            </p>

            <div className="projects-grid">
                {projects.map(p => (
                    <article
                        key={p.id}
                        className={`project-card${p.featured ? ' featured' : ''}`}
                    >
                        {p.featured && (
                            <span className="featured-badge">⭐ Em Destaque</span>
                        )}

                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>

                        <ul className="project-tech">
                            {p.tech.map(t => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>

                        <div className="project-actions">
                            {p.link && (
                                <a
                                    className="project-link primary"
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver projeto →
                                </a>
                            )}
                            {p.repo && (
                                <a
                                    className="project-link secondary"
                                    href={p.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
