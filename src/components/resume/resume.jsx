import TaylorResume from "../assets/TaylorResume.pdf";


export default function Resume(){

    return(
        <div className="content-container">
            <object type="application/pdf"
                    data={TaylorResume}>
            </object>
        </div>
    )
}