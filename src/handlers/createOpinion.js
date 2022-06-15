import { createOpinion } from "../http/opinionAPI";

async function CreateOpinion({name, text, picture}) {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('text', text)
    formData.append('picture', picture)

    createOpinion(formData)
}

export default CreateOpinion;


