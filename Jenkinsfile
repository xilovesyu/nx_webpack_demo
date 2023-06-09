pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/xilovesyu/lerna_demo', branch: 'jenkins')
      }
    }

    stage('List Files') {
      parallel {
        stage('List Files') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Run Build') {
          steps {
            sh 'yarn && yarn build'
          }
        }

      }
    }

  }
}