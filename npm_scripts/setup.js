import readline from "readline";
import fs from "fs";
import shortId from "shortid";

import { info, success, warning, error } from "./ChalkConfig";

const prompts = [
    "Google Credentials",
    [ "Google APP ID", "APP_ID" ],
    [ "Google APP Secret", "APP_SECRET" ],
    "Mongo Credentials",
    [ "Mongo Host", "MONGO_HOST", "localhost" ],
    [ "Mongo Port", "MONGO_PORT", "27017" ],
    [ "Database", "MONGO_DB" ],
    [ "Username", "MONGO_USER" ],
    [ "Password", "MONGO_PWD" ]
];

const ask = (rl, question, key, defaultValue) => {
    question = `${question}${defaultValue ? ` (${defaultValue})` : ""}: `;
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve({
                [key]: answer || defaultValue
            });
        });
    });
};

const readConfig = () => new Promise((resolve, reject) => {
    fs.readFile(".env", (err, data) => {
        if (err)
            return reject(err);
        data = data.toString();
        resolve(data.split("\n").reduce((acc, line) => {
            const parts = line.split("=");
            return {
                ...acc,
                [parts[0]]: parts[1]
            };
        }, {}));
    });
});

const main = async () => {
    console.log();
    console.log(success("Curio Config"));
    console.log("--------------------------------");
    let env = await readConfig();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for(let i=0; i<prompts.length; i++) {
        if(typeof(prompts[i]) === "string") {
            console.log();
            console.log(info(prompts[i]));
        } else {
            const resp = await ask(
                rl,
                prompts[i][0],
                prompts[i][1],
                env[prompts[i][1]] || prompts[i][2]
            );
            env = {
                ...env,
                ...resp
            };
        }
    }
    rl.close();
    const SALT = shortId.generate();
    const data = Object.keys(env).reduce((acc, cur) =>
        cur ? `${acc}${cur}=${env[cur]}\n` : acc
        , "");
    fs.writeFile(".env", data, err => {
        console.log();
        if(!err)
            console.log(success("Config saved in .env"));
        else
            console.log(error("Unable to save config"));
        console.log("--------------------------------");
    });
}

main();
