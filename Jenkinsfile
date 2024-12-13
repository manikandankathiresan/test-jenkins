pipeline {
    agent any  // Use any available Jenkins agent

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Dependiencies') {
            steps {
                script {
                    echo 'Install npm'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build Image') {
            steps {
                echo 'Build docker image'
                sh 'docker build -t my-sample-node-app:1.0 .'
            }
        }

        stage('Check image list') {
            steps {
                sh 'docker images'
            }
        }

        stage('Remove Image') {
        steps {
            echo 'Remove docker image'
            sh 'docker rmi my-sample-node-app:1.0'
        }

        stage('Check image-2') {
            steps {
                sh 'docker images'
            }
        }
        }

    }
}
