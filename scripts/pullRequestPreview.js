/* eslint-disable prettier/prettier */
const { execSync } = require("child_process")
console.log("[DEPLOY_PREVIEW]: START");
const command = 'yarn deploy:staging';
const output = execSync(command, { encoding: "utf8" });
console.log(output);
console.log("[DEPLOY_PREVIEW]: END");

