
export default function ProjectCard ({project}){

    return (
        <a className="projectLinks" href={project.url}>
        <div className="card project">
            <div className="card-body project">
                <h2 className="projectTitle">{project.title}</h2>
                <p>{project.description}</p>
                <h5>{project.tech}</h5>
            </div>
        </div>
        </a>
    )
}