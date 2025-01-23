import fetch from "../utils/fetch.js"
import SubmitButton from "./submitbutton/SubmitButton.jsx";
//Al hacer click en el botón del form, realizar llamada GET a la api de Rick and Morty

const Form = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('');
        console.log(response);

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <SubmitButton />
        </form>
    )
    }

export default Form;