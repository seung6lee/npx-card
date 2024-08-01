#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Seungjun Lee'),
  handle: chalk.cyan('@seung6lee'),
  labelWork: chalk.white.bold('      Job:'),
  work: chalk.white('A 10th grade student'),
  labelFutureWork: chalk.white.bold('      Future Job:'),
  futureWork: chalk.white('CEO, Neuroengineer'),
  labelInstagram: chalk.white.bold('   Instagram:'),
  instagram: chalk.cyan('https://www.instagram.com/seung6lee'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/seung6lee'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('Coming Soon'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://seung6lee.com'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx seung6lee'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const futureWorking = `${data.labelFutureWork}  ${data.futureWork}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  futureWorking +
  newline +
  instagraming +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
