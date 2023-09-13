pipeline {
    agent any

    tools {
        nodejs 'node 20'    
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
