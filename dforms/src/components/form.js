import FormDatasexy from './formJsonData.js';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    function submit(e) {
        e.preventDefault();
        console.log("form submitted", formData);
    }

    return (<div className="form-container">
        <form className="form" onSubmit={submit}>

            {FormDatasexy.map((formD, index) => {
                if (formD.options && formD.type==='select' && formD.options.length > 0) { return (
                    <div className='bro' key={index} hidden={
                        formD.showIf !== undefined &&
                        formD.dependsOn &&
                        !(formD.showIf && typeof formD.dependsOn === 'string' && formD.showIf && formD?.showIf === formData[formD?.dependsOn])}>
                            <label>{formD.name}</label>
                            <br></br>

                            {
                                formD.options?.map((options) => {
                                    return (
                                        <label htmlFor={options.label}>
                                        <input id={options.label}  required={formD.validation?.required} name={formD.name} type="radio" value={options.value} checked={formData?.[formD.name] === options.value} onChange={handleChange}></input>
                                            {options.label}
                                        </label>
                                    )
                                })
                            }
                        </div>
                )} else if(formD.type==='text') {
                    return (
                        <div className='bro' hidden={
                            false
                        }
                        >
                            <label htmlFor={formD.name}>{formD.name}: </label>
                            <input id={formD.name} type='text' required={formD?.validation?.required} pattern={formD?.validation?.pattern} placeholder='' alt='' name={formD.name} value={formData?.[formD.name]} onChange={handleChange}/>
                            <div>{formD?.validation?.message}</div>
                        </div>
                    )
                }
            })}

            {/* <label htmlFor="text">Text: </label>
            <input id="text" type='text' placeholder='' alt='' name="text" value={formData?.text} onChange={handleChange}/>

            <label htmlFor="Password">Password: </label>
            <input id="Password" type='Password' placeholder='' alt='' name="Password" value={formData?.Password} onChange={handleChange}/>

            <label htmlFor="email">email: </label>
            <input id="email" type="email" name="email" value={formData?.email} onChange={handleChange}></input>

            <label htmlFor="number">number: </label>
            <input type="number" name="number" min="1" max="100" id="number" value={formData?.number} onChange={handleChange}></input>

            <label htmlFor="tel">tel: </label>
            <input type="tel" name="tel" id="tel"></input>



            <label htmlFor="Music">
                <input id="Music" name="checkbox" value={formData?.checkbox} onChange={handleChange} type="checkbox" value="Music"></input>
                Music
            </label>

            <label htmlFor="Work">
                <input id="Work" name="checkbox" value={formData?.checkbox} onChange={handleChange} type="checkbox" value="Work"></input>
                Work
            </label>

            <label htmlFor="car">
                <input id="car" name="checkbox" value={formData?.checkbox} onChange={handleChange} type="checkbox" value="car" required></input>
                Car
            </label> */}

            <button type='submit'>Submit</button>
        </form>
    </div>);
}

export default Form;