import {withSessionRoute} from "lib/withSession";

async function route (req:any, res:any) {
    req.session.destroy();
    res.send({ ok: true });
};
export default withSessionRoute(route);