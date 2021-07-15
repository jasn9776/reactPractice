import {useState} from 'react'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const SearchBar3 = ({onSearch}) => {

    const [text, setText] = useState('');
    const [patientID, setPatientID] = useState(false);


    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter a query')
            return
        }

        // var url = "http://20.191.211.229:5000/v1/datafiles?patient_id=" + patientID + `${filetype ? `&filetype=${filetype}`: ""}`
        // + `${minSize ? `&minsize=${minSize}`: ""}` + `${maxSize ? `&maxsize=${maxSize}`: ""}` 
        // + `${sampleType ? `&sampletype=${sampleType}`: ""}` + "&show_metadata=true";
        
        // var url = `${patientID ? "paitentID" :  "sampleID"}` + `${text}`;
        // console.log(`${filetype ? `filetype=${filetype}`: ""}`)
        var url = '';
        console.log(age)
        if (age === 1) {
            url += "patient";
        } else if (age === 2) {
            url += "sample";
        } 

        url += text;
        console.log(text)
        console.log(patientID)
        onSearch(url)
        // setText('')

    }

    return (
        <form className='search-form' onSubmit=
        {onSubmit}>
            <div className='input-form'>
                <label>SearchQuery</label>
                <input type='text' placeholder='Query'
                 value={text} onChange={(e) =>
                setText(e.target.value)} />

            </div> 


            <div className='check-box'>
                <label>Searchby PatientID</label>
                <input type='checkbox' 
                checked={patientID}
                value={patientID} 
                    onChange={(e) => setPatientID(e.currentTarget.checked)}
                />
            </div>         

            <input type='submit' value='Search'
            className='btn btn-block' />

            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            >
            <MenuItem value={1}>PatientID</MenuItem>
            <MenuItem value={2}>SampleID</MenuItem>
            <MenuItem value={3}>FileName</MenuItem>
            </Select>

        </form>
    )
}

export default SearchBar3