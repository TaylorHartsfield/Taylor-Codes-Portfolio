import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import TaylorResume from "../assets/TaylorResume.pdf";

export default function Resume(){

    return(
        <Document file = {TaylorResume}>
            <Page pageNumber={1}/>
        </Document>
    )
}