#!/usr/bin/env/ node

const chalk = require('chalk');
const _ = require('lodash');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const walk = require('klaw-sync');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const TEMPLATE_PATH = resolve('templates');

const CHOICES = [
  {
    name: 'Component',
    value: 'components',
  },
  {
    name: 'Composition',
    value: 'components',
  },
];

// User prompts
const QUESTIONS = [
  {
    name: 'type',
    type: 'list',
    message: 'What are you making?',
    choices: CHOICES,
  },
  {
    name: 'name',
    type: 'input',
    message: 'What is the component name? (kebab-case without cdr prefix)',
    validate: (input) => {
      if (/^([a-z]+(-[a-z]+)*)$/.test(input)) return true;
      return chalk.red('Component name must be kebab-case');
    },
  },
];

// use answers
inquirer.prompt(QUESTIONS).then((answers) => {
  const { type } = answers;
  const { name } = answers; // test-comp
  const camelName = _.camelCase(name); // testComp
  const pascalName = _.upperFirst(camelName); // TestComp
  const compName = `Cdr${pascalName}`; // CdrTestComp
  const tagName = _.kebabCase(compName); // cdr-test-comp
  const fullName = `cedar-${name}`; // cedar-test-comp
  const outDir = resolve(`src/${type}/${pascalName}`);

  // exit if the component already exists
  if (fs.existsSync(outDir)) {
    console.log(chalk.red.bold(`A component named '${name}' already exists`));
    process.exit(1);
  }

  // copy template files
  fs.copySync(TEMPLATE_PATH, outDir);

  // go through files to update values
  const files = walk(outDir);
  const newName = `Cdr${pascalName}`;
  files.forEach((file) => {
    if (fs.lstatSync(file.path).isDirectory()) {
      return;
    }

    let filePath = file.path;
    // rename files that need it
    if (file.path.indexOf('[name]') > 0) {
      filePath = file.path.replace(/\[name\]/, newName);
      fs.renameSync(file.path, filePath);
    }

    // replace placeholders within files
    fs.readFile(filePath, 'utf-8', (err, contents) => {
      if (err) throw err;

      const rewrite = contents
        .replace(/\{NAME-PASCAL\}/g, pascalName)
        .replace(/\{NAME-TAGNAME\}/g, tagName)
        .replace(/\{NAME-KEBAB\}/g, name)
        .replace(/\{NAME-FULLNAME\}/g, compName)
        .replace(/\{NAME-FULLKEBAB\}/g, fullName);

      fs.writeFile(filePath, rewrite, 'utf-8');
    });
  });

  // Done!
  console.log(chalk.green(`Successfuly generated files for '${name}' at ${outDir}`));
});

