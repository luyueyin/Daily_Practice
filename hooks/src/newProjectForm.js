import React, { useState } from "react";
import "./App.css";
import { TextField, Button, Row, RightRow } from "./Styled";

export default function NewProjectForm(props) {
const { addProject } = props;
const initialFormState = {
    name: "",
    description: "",
};
const [formData, setFormData] = useState(initialFormState);

function changeHander(event) {
    // console.log("updating form data:", event.target.value);
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
}
    function submitHander(event) {
        event.preventDefault();
        console.log(formData)
        addProject(formData);
        setFormData({
        name: "",
        description: "",
        });
    }

    return (
        <form onSubmit={submitHander}>
        <Row>
            <label>Name:</label>
            <TextField
                name="name"
                value={formData.name}
                onChange={changeHander}
            ></TextField>
        </Row>
        <Row>
            <label>Description:</label>
            <TextField
                name="description"
                value={formData.description}
                onChange={changeHander}
            ></TextField>
        </Row>
        <RightRow>
            <Button>Add Projects</Button>
        </RightRow>
        </form>
    );
}
