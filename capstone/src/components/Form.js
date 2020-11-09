import axios from "axios";
import React, { useState } from 'react'
import { selectForm } from '../actions/index'
import { useDispatch } from 'react-redux'


const Form = ({ collection, btnName, clearCollection }) => {



    const dispatch = useDispatch();

    const intiInputs = {
        title: "",
        description: "",
        year: "",
        genre: ""
    }

    const [inputs, setInputs] = useState(intiInputs)
    const [toggle, setToggle] = useState("tvShows")

    const handleToggle = () => {
        toggle === "movies" ? setToggle("tvShows") : setToggle("movies")
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const submit = (event) => {
        event.preventDefault()
        dispatch(collection(inputs))
        axios.post("/insertdb",inputs).then(res => console.log(res.data)).catch()
        setInputs(intiInputs)
    }
    
    return (
        <div className="main">
            <h1>add new {btnName} here :</h1>
            <form name="form" onSubmit={(e) => { submit(e) }} className="mainForm">
                <input
                    type="text"
                    name="title"
                    value={inputs.title}
                    placeholder={`${btnName} Title...`}
                    onChange={handleChange}
                    required />
                <br />
                <input
                    type="text"
                    name="description"
                    value={inputs.description}
                    placeholder={`${btnName} Description...`}
                    onChange={handleChange}
                    required />
                <br />
                <input
                    className='year'
                    type="number"
                    min='1900'
                    max='3000'
                    name="year"
                    value={inputs.year}
                    placeholder={`Year...`}
                    onChange={handleChange}
                    required />
                <br />
                <select className='genre' name="genre" value={inputs.genre} onChange={handleChange}>
                    <option value="unknown">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="drama">Drama</option>
                    <option value="romantic comedy">Romantic Comedy</option>
                    <option value="comedy">Comedy</option>
                    <option value="foreign">Foreign </option>
                    <option value="horror">Horror</option>
                    <option value="mystery">Mystery</option>
                    <option value="satire">Satire</option>
                    <option value="other">Other</option>
                </select>
                <div >
                    <button > Add {btnName}</button>
                    <button onClick={() => { dispatch(selectForm(toggle)); handleToggle(toggle) }}>Toggle Form</button>
                </div>
            </form>

        </div>
    );
};

export default Form;
