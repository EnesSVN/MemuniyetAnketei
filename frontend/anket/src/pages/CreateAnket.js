import { useState } from "react";
import { createAnket } from "../api/ApiCalls";
import Input from "../components/Input";
import { useForm } from "react-hook-form"
import {toast} from 'react-toastify'



function CreateAnket() {

    const { register, formState: { errors }, handleSubmit,reset } = useForm()


    const onSubmit = async data => {
        
        try {
            const response = await createAnket(data)
            toast.success('Anket kuruldu')
            reset()
        } catch (error) {
            toast.error('Hata ulustu')
            reset()

        }

    }

    //const className= error ? "form-control is-invalid" : "form-control";
    return (

        <div className="container">
            <h1 className="text-center">Anket</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input name="name" label="Name" errors={errors} register={register} />
                <Input name="surname" label="Surname" errors={errors} register={register} />
                <Input name="email" label="Mail" errors={errors} register={register} type="email" />
                <Input name="message" label="Message" errors={errors} register={register} />


                <button className="btn btn-primary btn-block" type="submit">submit</button>
            </form>

        </div>
    )
}

export default CreateAnket