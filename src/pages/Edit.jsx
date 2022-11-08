import React, { useState, createRef } from "react";
import {useSearchParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import Text from "../components/Text";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const addText = () => {
        setCount(count + 1);
    }
    const memeRef = createRef();
    return (
        <div>
            <div style={{ width: "500px", height: "auto", border: "1px solid" }} ref={memeRef} className="meme mt-5 mb-5"> 
                <img src={params.get("url")} alt="" width="250px"/> 
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
            <Button onClick={addText} style={{ marginTop : '5px'}} >Add Text</Button>
            <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)} style={{ marginLeft: "5px", marginTop : '5px'}} >
                Save
            </Button>
        </div>
    )
};

export default EditPage;
