pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/xilovesyu/lerna_demo', branch: 'jenkins')
      }
    }

    stage('List Files') {
      steps {
        sh 'ls -la'
      }
    }

  }
}