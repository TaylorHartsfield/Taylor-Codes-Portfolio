
export default function ProjectCard ({project}){

    return (
       
        <div className="card project">
            <div className="card-body project">
                    <a className="projectLink" href={project.url}>
                        <h2 className="projectTitle">{project.title}</h2>
                    </a>
                <p>{project.description}</p>
                <h5>{project.tech}</h5>
            </div>
        </div>
       
    )
}