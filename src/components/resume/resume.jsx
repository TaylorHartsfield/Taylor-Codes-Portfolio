import TaylorResume from "../assets/TaylorResume2024Canva.pdf";

export default function Resume(){

    return(
        <div className="content-container">
            <object type="application/pdf"
                    data={TaylorResume}
                    style={{minWidth:"1000px",
                            minHeight: "1050px",
                            marginBottom: "3em"}}>
            </object>
        </div>
    )
}