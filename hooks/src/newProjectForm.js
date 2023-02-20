import React, { useState } from "react";

export default function NewProjectForm() {
    const initialFormState = {
        name: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialFormState)

    function changeHander(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form>
            <div>
                <lable>Name:</lable>
                <input 
                    type="text" name="name" value={formData.name} onChange={changeHander} />
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text" name="description" value={formData.description} onChange={changeHander} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}