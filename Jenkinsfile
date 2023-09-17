pipeline {
    agent any

    tools {
        nodejs 'node 20'    
    }
    
    stages {
        stage('Dependencias') {
            steps {
                echo 'Descargando dependencias...'
                sh 'cd frontend && npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'cd frontend && npm run test'
            }
        }
        stage('Start server') {
            steps {
                echo 'Starting...'
                sh 'cd frontend && npm run dev'
            }
        }
        stage('e2e') {
            steps {
                echo 'Testing...'
                sh 'cd frontend && npm run e2e'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'cd frontend && npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
