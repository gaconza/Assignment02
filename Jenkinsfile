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
                bat 'dir src' // Adiciona isso para listar arquivos em src/
                bat 'npm test -- --watchAll=false'
            }
        }
    }
}