pipeline {
    agent any
    tools {
        nodejs 'NodeJS 22'
    }
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') {
    steps {
        bat 'dir src'
        bat 'npx jest src/App.test.js --watchAll=false'
    }
}
    }
}