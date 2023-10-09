import {useEffect} from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import axios from "axios";

type Props = {
    redirectTo?: string
    redirectIfFound?: boolean
}

export function useUser({
                            redirectTo,
                            redirectIfFound,
                        }: Props) {
    // @ts-ignore
    const {
        data: user,
        mutate,
        error
    } = useSWR("/api/user", ()=>axios.get('http://localhost:3000/api/user').then(res => res));

    useEffect(() => {
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
        if (!redirectTo || !user) return

        if (
            // If redirectTo is set, redirect if the user was not found.
            // @ts-ignore
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            // If redirectIfFound is also set, redirect if the user was found
            // @ts-ignore
            (redirectIfFound && user?.isLoggedIn)
        ) {
            Router.push(redirectTo).then()
        }
    }, [user, redirectIfFound, redirectTo])

    return {user, mutate, error}
}