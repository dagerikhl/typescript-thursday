const chalk = require("chalk");
const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

// Make ShellJS terminate on errors
shell.set("-e");

const SRC_PATH = path.resolve(__dirname, "../src");

const [section, exercise] = process.argv.slice(2);

if (!section) {
  console.log(chalk.yellow("Please specify a section and an exercise"));

  process.exit(1);
}
if (!exercise) {
  console.log(chalk.yellow("Please specify an exercise"));

  process.exit(1);
}

const allSections = fs.readdirSync(SRC_PATH);
const sectionPath = allSections.find((sectionPath) =>
  sectionPath.startsWith(section)
);
if (!sectionPath) {
  console.log(chalk.red(`Section ${section} not found`));

  process.exit(1);
}

const sectionFiles = path.resolve(SRC_PATH, sectionPath);

const allExercises = fs.readdirSync(sectionFiles);
let pathIndicator = ".problem.";
if (process.env.SOLUTION) {
  pathIndicator = ".solution.";
}
const exercisePath = allExercises.find(
  (exercisePath) =>
    exercisePath.startsWith(exercise) && exercisePath.includes(pathIndicator)
);
if (!exercisePath) {
  console.log(chalk.red(`Section ${section}, exercise ${exercise} not found`));

  process.exit(1);
}

const exerciseFile = path.resolve(sectionFiles, exercisePath);

// One-liner for current directory
chokidar.watch(exerciseFile).on("all", (event, path) => {
  const fileContents = fs.readFileSync(exerciseFile, "utf8");

  const containsVitest = fileContents.includes("vitest");

  try {
    console.clear();

    if (containsVitest) {
      console.log(chalk.blue("Running tests..."));
      shell.exec(`vitest run "${exerciseFile}" --passWithNoTests`);
    }

    console.log(chalk.blue("Checking types...\n"));
    shell.exec(
      `tsc "${exerciseFile}" --moduleResolution node --target es2020 --noEmit --strict`
    );

    console.log(
      chalk.green("\nTypecheck complete. You finished the exercise! :D")
    );
  } catch (e) {
    console.log(chalk.red("\nTests or typechecks failed. Please try again :)"));
  }
});
