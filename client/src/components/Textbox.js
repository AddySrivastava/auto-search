import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab"

export default function TextBox(props) {

    const { onChange, value, name, dataset } = props;
    return (<div>
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={dataset.map((option) => option.fullName)}
            value={value}
            renderInput={(params) => (
                <TextField {...params} label="Search Username...." variant="outlined" onChange={onChange} width="300px" margin="normal" name={name} autoFocus />
            )}
        />
    </div>)
}