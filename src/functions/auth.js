import axios from "axios";
//functions: buena práctica./

export const createOrUpdateUser = async (authtoken) => {

    return await axios.post(
        `%{proccess.env.REACT_APP_API}/create-or-uodate-user`,
        {},
        {
            headers: {
                authtoken,
            }
        }
    );
};