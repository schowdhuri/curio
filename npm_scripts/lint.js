import { CLIEngine }  from "eslint"

import { success } from "./ChalkConfig";

process.env.NODE_ENV = "linting";

const cli = new CLIEngine({ fix: true });

const report = cli.executeOnFiles([
    "common/**/*.js",
    "client/src/**/*.js",
    "server/**/*.js"
]);

const formatter = cli.getFormatter();

if(!report.errorCount && !report.warningCount) {
    console.log(success("All rules passed"));
} else {
    console.log(formatter(report.results));
}
