// src/commands/setup-project.ts
import { Command } from "@oclif/core";
import { execSync } from "node:child_process";
import * as fs from "node:fs";
// import * as path from "node:path";

export default class SetupProject extends Command {
  static description = "Set up a new Blockchain project";

  async run() {
    // Define the project folder name
    const projectName = "blockchain-starter";

    // Create the project folder structure
    fs.mkdirSync(projectName);

    // Change the working directory to the project folder
    process.chdir(projectName);

    // Initialize a new project with 'yarn init'
    execSync("yarn init -y", { stdio: "inherit" });

    // Add project dependencies
    execSync(
      "yarn add hardhat chai ethers mocha date-fns ts-node typescript typechain",
      { stdio: "inherit" }
    );

    // Initialize the project with 'npx hardhat init'
    execSync("npx hardhat init", { stdio: "inherit" });

    // Inform the user that the project setup is complete
    this.log(`Project "${projectName}" set up successfully.`);
  }
}
