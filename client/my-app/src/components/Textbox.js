import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab"
import { width } from "@material-ui/system";

export default function TextBox(props) {

    const { onChange, value, name, dataset } = props;
    console.log(dataset);
    return (<div>
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={dataset.map((option) => option.fullName)}
            value={value}
            renderInput={(params) => (
                <TextField {...params} label="USERNAME" variant="outlined" onChange={onChange} width="300px" margin="normal" />
            )}
        />
    </div>)
}