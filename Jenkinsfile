pipeline {
    agent any
    tools {
        nodejs 'NodeJS 23' // Ajustado para a versão que você configurou (23.10.0)
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
                bat 'npm test -- --watchAll=false'
            }
        }
    }
}