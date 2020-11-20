import axios from "axios";
import { useState } from "react";
import TextBox from "../components/Textbox";

export default function SearchBox() {
    const [value, setValue] = useState("");
    const [dataset, setDataset] = useState([]);

    const onChange = async (event) => {
        setValue(event.target.value);

        // fetch data from backend
        const response = await axios.post('http://localhost:5000/autoSearch/v1/api/getAutoSearch', {
            "searchTerm": event.target.value
        })

        if (response.status == 200) {
            setDataset(response.data);
        } else {
            console.error(response);
            setDataset([]);
        }
    }

    return <TextBox onChange={onChange} value={value} name="SearchBox" dataset={dataset} />
}