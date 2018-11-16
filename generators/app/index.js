'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the laudable ${chalk.red('generator-j-5')} generator!`));

    const prompts = [
      {
        type: 'confirm',
        name: 'generate',
        message: 'Would you like to generate a new project?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('.yo-rc.json'), this.destinationPath('.yo-rc.json'));
  }

  install() {
    // This.installDependencies();
    this.spawnCommand('jhipster', ['--force']);
    // Now you can bind to the dependencies installed event
    // this.on('dependenciesInstalled', function() {
    //  this.spawnCommand('jhipster', ['--force']);
    // });
  }
};
