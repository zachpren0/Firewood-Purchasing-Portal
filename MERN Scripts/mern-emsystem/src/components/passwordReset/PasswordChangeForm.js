import {useState} from 'react';
import axios from 'axios';

/*Used in EmpLogin.js*/
const PasswordChangeForm = () => {
    const[data, setData] = useState({
        Username:""
    });
    const[error, setError] = useState("");


    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5001/api/pwreset";
            const {data: res} = await axios.post(url, data);
            console.log(JSON.stringify(res));
            setError(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div className="empLoginDiv ">
                <form onSubmit={handleSubmit}>
                        <h1>Reset password</h1>
                        <input
                            type="text"
                            className="textboxStyle"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                        /><br></br>
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Sign In
                        </button>
                    </form> 
               
        </div>

    );
};

export default PasswordChangeForm;