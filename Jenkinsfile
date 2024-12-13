pipeline {
    agent any  // Use any available Jenkins agent

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run npm install to install project dependencies
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}
