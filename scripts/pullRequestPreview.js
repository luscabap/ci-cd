/* eslint-disable prettier/prettier */
const { execSync } = require("child_process")
console.log("[DEPLOY_PREVIEW]: START");
const command = 'yarn deploy:staging';
const output = execSync(command, { encoding: "utf8" });
const outputLines = output.split("\n")
const DEPLOY_URL = [outputLines.length - 1]
console.log("[DEPLOY_PREVIEW]: END");

console.log(`You can see the deploy preview on: ${DEPLOY_URL}`);

