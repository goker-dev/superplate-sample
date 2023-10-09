import React from "react";
import { useForm } from "react-hook-form";
import { Header, Footer } from "@components";
import { withSessionSsr } from "@lib";
import axios from "axios";
import {
    CredentialLoginRequest_Internal,
} from "@rest";

// https://react-hook-form.com/ts
type FormValues = CredentialLoginRequest_Internal;

type Props = {
    user?: any;
    children?: React.ReactNode;
};

const Login = ({ user }: Props) => {
    // const {user} = useUser({
    //     redirectTo: '/dashboard',
    //     redirectIfFound: true,
    // });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            phoneNumber: "",
            phoneCountryCode: "90",
            password: "",
            captcha: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        const res = await axios("/api/login", {
            method: "POST",
            data,
        })
            .then(async (res) => {
                console.log({ res });
                return res;
            })
            .catch((err) => {
                console.log("err", { err });
                return err;
            });

        if (res.code === 200) {
            localStorage.setItem("passport", res.content.passport);
            localStorage.setItem("token", res.content.token);
            localStorage.setItem("timestamp", res.content.timestamp);
            location.href = "/verify";
        }

        return true;
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header user={user} />
            <div className="w-50 mx-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            className="form-control"
                            {...register("phoneNumber")}
                        />
                    </div>

                    {errors.phoneNumber && (
                        <span>This phoneNumber is required</span>
                    )}
                    <div className="form-group">
                        <input
                            type="hidden"
                            className="form-control"
                            {...register("phoneCountryCode")}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("password")}
                        />
                    </div>
                    <button className="btn btn-dark w-100" type="submit">
                        Login
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req, res }) {
        // @ts-ignore
        const user = req.session?.user || null;

        if (user) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/dashboard",
                },
            };
        }

        return {
            props: {
                user,
            },
        };
    },
);

export default Login;
