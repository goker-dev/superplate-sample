import React from "react";
import { GetServerSideProps } from "next";
import { Header, Main, Footer, Cards } from "@components";
import { IndexControllerService, OpenAPI } from "@rest";
import Link from "next/link";

const Home: React.FC = (props: any) => {
    console.log({ props });
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
          <nav><Link href='/login'>Login</Link></nav>
            <div className="p-4">
                <h3>API INFO</h3>
                {props.data.code === 200 && (
                    <ul>
                        <li>{props.data.content.environment}</li>
                        <li>{props.data.content.name}</li>
                        <li>{props.data.content.version}</li>
                        <li>{props.data.message}</li>
                    </ul>
                )}
            </div>
            {/*<Main />*/}
            {/*<Cards />*/}
            <Footer />
        </div>
    );
};

// This gets called on every request

export const getServerSideProps: GetServerSideProps = async (context) => {
    // OpenAPI.BASE = 'http://localhost:3000/api'
    const data = await IndexControllerService.index();
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()

    // Pass data to the page via props
    return { props: { data } };
};

export default Home;
