const OPENAPI = "";
const fs = require("fs");
const request = require("request");
const OpenAPI = require("openapi-typescript-codegen");

try {
    request.get(OPENAPI, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            fs.writeFileSync("./spec.json", body);
            OpenAPI.generate({
                input: "./spec.json",
                output: "./rest",
                exportSchemas: true,
                httpClient: "axios",
            }).then(() => {
                console.log("Generate done.");
            });
        } else {
            console.error("Could not get the spec json.");
        }
    });
} catch (e) {
    throw e;
}
