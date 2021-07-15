import {useState} from 'react'

const SearchBar2 = ({onSearch}) => {

    const [text, setText] = useState('');
    const [patientID, setPatientID] = useState(false);
    const [filetype, setFileType] = useState("");
    const [minSize, setMinSize] = useState("");
    const [maxSize, setMaxSize] = useState("");
    const[sampleType,setSampleType] = useState("");
    const [genome, setGenome] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter a query')
            return
        }

        var url = "http://20.191.211.229:5000/v1/datafiles?patient_id=" + patientID + `${filetype ? `&filetype=${filetype}`: ""}`
        + `${minSize ? `&minsize=${minSize}`: ""}` + `${maxSize ? `&maxsize=${maxSize}`: ""}` 
        + `${sampleType ? `&sampletype=${sampleType}`: ""}` + "&show_metadata=true";
        
        console.log(`${filetype ? `filetype=${filetype}`: ""}`)
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

                <input type='text' placeholder='min file size'
                 value={minSize} onChange={(e) =>
                setMinSize(e.target.value)} />

                <input type='text' placeholder='max file size'
                 value={maxSize} onChange={(e) =>
                setMaxSize(e.target.value)} />

                <input type='text' placeholder='file type'
                 value={filetype} onChange={(e) =>
                setFileType(e.target.value)} />

                <input type='text' placeholder='sample type'
                 value={sampleType} onChange={(e) =>
                setSampleType(e.target.value)} />
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

        </form>
    )
}

export default SearchBar2