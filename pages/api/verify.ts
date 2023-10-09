import {CredentialControllerService, OpenAPI} from "@rest";
import {withSessionRoute} from "lib/withSession";

async function route(req:any, res:any) {
    OpenAPI.BASE = 'http://localhost:3000/api'
    const {body: data} = req
    const {code, message, content} = await CredentialControllerService.loginVerify(
        data.pinCode,
        data.passport,
        data.token,
    );
    if (code === 200) {
        req.session.tokens = {
            access: content.access,
            admin: content.refresh,
        };
        req.session.user = (function(token) {
                const base64 = (token.split('.')[1]).replace('-', '+').replace('_', '/');
                return JSON.parse(Buffer.from(base64, 'base64').toString());
            })(content.access)

        await req.session.save();
        res.send({ok: true});
    } else
        res.status(code).send({message})
}

export default withSessionRoute(route);