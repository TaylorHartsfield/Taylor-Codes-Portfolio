export default function ProjectCard ({project}){

    function handleGithub() {
        window.open(`${project.github}`, "_blank")

    }

    return (
       
        <div className="card project">
            <div className="card-body project">
                    <a className="projectLink" href={project.url}>
                        <h2 className="projectTitle">{project.title}</h2>
                    </a>
                <p>{project.description}</p>
                <h5>{project.tech}</h5>
                <h5 style={{
                    alignContent:"right",
                    justifyContent:"right",
                    paddingTop:"1em"
                }}> 
                    <i style={{
                animationIterationCount: "3",
                alignSelf:"right"

                }}
                onClick={handleGithub} 
                className="fa-brands fa-github fa-2xl fa-bounce"></i>
                </h5>
            </div>
        </div>
       
    )
}