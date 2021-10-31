import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} type="text" placeholder="Title Name" />
                <input {...register("description", { required: true })} type="text" placeholder="Description" />
                <input {...register("duration", { required: true })} type="number" placeholder="Day" />
                <input {...register("price", { required: true })} type="number" placeholder="Price" />
                <input {...register("location", { required: true })} type="text" placeholder="Location/Place" />
                <input {...register("location", { required: true })} type="number" placeholder="Seat Allow" />
                <input {...register("img", { required: true })} type="text" placeholder="Image URL" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default AddService;