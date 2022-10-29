export default function ProjectCard ({project}){

    return (
        <div className="card">
            <img src={project.img} alt="" />
            <div className="card-body">
                <a href={project.url}>
                    <h2>{project.title}</h2>
                </a>
                <p>{project.description}</p>
                <h5>{project.tech}</h5>
            </div>
        </div>
    )
}