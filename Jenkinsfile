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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
