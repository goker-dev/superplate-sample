import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {Header, Footer} from "@components";
import {CredentialControllerService, OpenAPI} from "@rest";
import axios from "axios";

// https://react-hook-form.com/ts
type FormValues = {
    pinCode: string;
    passport: string;
    token: string;
};

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm<FormValues>({
        defaultValues: {
            passport: "",
            token: "",
        },
    });

    useEffect(() => {
        // TODO request to replace token and passport on backand
        setValue('token', localStorage.getItem('passport') || '')
        setValue('passport', localStorage.getItem('token') || '')
        // setValue('timestamp', localStorage.getItem('timestamp') || '')

    }, [])

    const onSubmit = async (data: FormValues) => {
        console.dir(`Form values: ${data}`);

        const BASE = 'http://localhost:3000'
        try {
            const res = await axios.post(BASE + '/api/verify', data)
            console.log({res});
            location.href = '/users'
        } catch (error) {
            alert(JSON.stringify(error, null, 2))
        }

        // if(res.code === 200) {
        //   localStorage.setItem('access', res.content.access)
        //   localStorage.setItem('refresh', res.content.refresh)
        //   localStorage.setItem('user', JSON.stringify(res.content.refresh))
        //   // localStorage.setItem('timestamp', res.content.timestamp)
        // } else {
        //   alert(JSON.stringify(res,null, 2))
        // }
    };

    // @ts-ignore
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <div className="w-50 mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Pin Code</label>
                        <input className="form-control" {...register("pinCode")} />
                    </div>

                    {errors.pinCode && <span>This phoneNumber is required</span>}
                    <div className="form-group">
                        <label>Passport</label>
                        <input
                            className="form-control"
                            {...register("passport")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Token</label>
                        <input className="form-control" {...register("token")} />
                    </div>

                    <button className="btn btn-dark w-100" type="submit">Verify</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;
