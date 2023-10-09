import {withSessionRoute} from "lib/withSession";

async function route (req:any, res:any) {
    const {user, tokens} = req.session
    if (user) {
        res.json({
            isLoggedIn: true,
            tokens,
            ...user,
        });
    } else {
        res.json({
            isLoggedIn: false,
        });
    }
};
export default withSessionRoute(route);