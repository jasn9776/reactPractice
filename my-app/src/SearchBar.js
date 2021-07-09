import {useState} from 'react'

const SearchBar = ({onSearch}) => {

    const [text, setText] = useState('');
    const [patientID, setPatientID] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter a query')
            return
        }

        console.log(text)
        console.log(patientID)
        onSearch(text)
        setText('')

    }

    return (
        <form className='add-form' onSubmit=
        {onSubmit}>
            <div className='form-control'>
                <label>SearchQuery</label>
                <input type='text' placeholder='Query'
                 value={text} onChange={(e) =>
                setText(e.target.value)} />
            </div>
            <div className='form-control
            form-control-check'>
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

export default SearchBar