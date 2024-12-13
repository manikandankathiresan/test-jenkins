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

        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }



        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}
