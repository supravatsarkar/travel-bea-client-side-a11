import React from 'react';
import { useForm } from "react-hook-form";
import '../AddService/AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('http://localhost:5000/addservice', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service Added Successful');
                    reset()
                }
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} type="text" placeholder="Title Name" />

                <input {...register("duration", { required: true })} type="number" placeholder="Day" />
                <input {...register("price", { required: true })} type="number" placeholder="Price $" />
                <input {...register("location", { required: true })} type="text" placeholder="Location/Place" />
                <input {...register("location", { required: true })} type="number" placeholder="Seat Allow" />
                <input {...register("img", { required: true })} type="text" placeholder="Image URL" />
                <textarea {...register("description", { required: true })} type="text" placeholder="Description" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-warning fw-bolder" type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;