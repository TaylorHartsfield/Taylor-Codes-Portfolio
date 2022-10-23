import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import TaylorResume from "../assets/TaylorResume.pdf";

export default function Resume(){

    function handleOnClick(){
        fetch(TaylorResume).then(respose => {
            respose.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = TaylorResume;
                alink.click();
            })
        })
    }

    function Download(){
        return (
            <button onClick={handleOnClick}>Download Resume PDF</button>
        )
    }

    return(
        <Document file = {TaylorResume}>
            <Download />
            <Page pageNumber={1}/>
        </Document>
    )
}