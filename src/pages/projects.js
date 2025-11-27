import React from 'react';
import '../styles/projects.css';

const projects = [
    {
        id: 1,
        title: "Dev's Systems",
        desc: "Portfólio da Dev's Systems, empresa de desenvolvimento web focada em soluções personalizadas. Desenvolvido com foco em design moderno, responsividade e clareza na apresentação dos serviços.",
        tech: ["React", "CSS", "JavaScript", "Python"],
        link: "https://devssystems.netlify.app/",
        repo: "#"
    },
    {
        id: 3,
        title: "Barbearia Lopes SAAS",
        desc: "Escrita moderna do sistema com React no front-end e backend Python otimizado.",
        tech: ["React", "Python", "MySQL"],
        link: "https://github.com/DevSystemSs/lopes-barber-master",
        repo: "#"
    },
    {
        id: 4,
        title: "Ioasys Books",
        desc: "Um projeto de aplicativo de livros desenvolvido com React Js, que consome a API pública do Ioasys Books para exibir uma coleção diversificada de livros.",
        tech: ["React", "JavaScript", "CSS"],
        link: "desafiofrontendioasys.netlify.app",
        repo: "#"
    }
];

function Projects() {
    return (
        <section className="page-section projects">
            <div className="container">

                <h2 className="section-title">
                    <span className="title-white">My</span>
                    <span className="title-accent"> Projects</span>
                </h2>

                <div className="projects-grid">
                    {projects.map(p => (
                        <article key={p.id} className="project-card">

                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.desc}</p>

                            <ul className="project-tech">
                                {p.tech.map(t => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>

                            <div className="project-actions">
                                {p.link && p.link !== "#" && (
                                    <a
                                        className="project-link"
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live
                                    </a>
                                )}

                                {p.repo && p.repo !== "#" && (
                                    <a
                                        className="project-link repo"
                                        href={p.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
