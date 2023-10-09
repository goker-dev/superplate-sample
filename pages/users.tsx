import React from "react";
import {Header, Footer} from "@components";
import {OpenAPI, UserSearchControllerService} from "@rest";
import {withSessionSsr} from "lib/withSession";

type Props = {
    data?: any
    user?: any
    children?: React.ReactNode
}
const Users: React.FC = ({data, user}: Props) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header user={user}/>
            <div className="w-75 mx-auto p-4">
                {/*{JSON.stringify(props.data.content, null,  2 )}*/}
                {data.content.content.map((i: any) => <div key={`key-user-${i.id}`}>
                    <h3>{i.name} {i.surname}</h3>
                    <p>{i.phoneNumber}</p>
                    <p>{i.email}</p>
                    <p>{i.gender}</p>
                    <p>{i.status}</p>
                </div>)}
            </div>
            <Footer/>
        </div>
    );
};

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({req, res}) {

        // @ts-ignore
        OpenAPI.TOKEN = req.session?.tokens?.access;
        if (!OpenAPI.TOKEN) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/login",
                }
            }
        }
        const data = await UserSearchControllerService.searchMerchant('STAFF')
        // Fetch data from external API
        // const res = await fetch(`https://.../data`)
        // const data = await res.json()
        // Pass data to the page via props
        // @ts-ignore
        return {props: {data, user: req.session?.user}}
    },
);

export default Users;
