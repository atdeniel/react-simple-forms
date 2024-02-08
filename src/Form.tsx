import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            warriorName: "", 
            tribeName: "", 
            email: "", 
            comments: "", 
            isHealer: true,
            warPosition: "",
            skin: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
        alert('Submit: ' + JSON.stringify(formData))
    }
    
    return (
        <>
            <h2>SIMPLE FORM OF HOW IT WORKS REACT FORMS</h2>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>Warrior Name</label><br />
                <input
                    type="text"
                    placeholder="Warrior Name"
                    onChange={handleChange}
                    name="warriorName"
                    value={formData.warriorName}
                />
                <br />
                <br />
                <label>Tribe Name</label><br />
                <input
                    type="text"
                    placeholder="Tribe Name"
                    onChange={handleChange}
                    name="tribeName"
                    value={formData.tribeName}
                />
                <br />
                <br />
                <label>Email</label><br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <br />
                <br />
                <label>Comments</label><br />
                <textarea 
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                />
                <br />
                <br />
                <input 
                    type="checkbox" 
                    id="isHealer" 
                    checked={formData.isHealer}
                    onChange={handleChange}
                    name="isHealer"
                />
                <label htmlFor="isHealer">Are you a Healer?</label>
                <br />
                <br />
                
                <fieldset>
                    <legend>Current War Position</legend>
                    <input 
                        type="radio"
                        id="front"
                        name="warPosition"
                        value="front"
                        checked={formData.warPosition === "front"}
                        onChange={handleChange}
                    />
                    <label htmlFor="front">Front</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="middle"
                        name="warPosition"
                        value="middle"
                        checked={formData.warPosition === "middle"}
                        onChange={handleChange}
                    />
                    <label htmlFor="middle">Middle</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="back"
                        name="warPosition"
                        value="back"
                        checked={formData.warPosition === "back"}
                        onChange={handleChange}
                    />
                    <label htmlFor="back">Back</label>
                    <br />
                </fieldset>
                <br />
                
                <label htmlFor="skin">What is your skin color?</label>
                <br />
                <select 
                    id="skin" 
                    value={formData.skin}
                    onChange={handleChange}
                    name="skin"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}
