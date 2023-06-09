pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/xilovesyu/lerna_demo', branch: 'jenkins')
      }
    }

  }
}