pipeline {
    agent any  // Run on any available agent
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm  // This command checks out the source code from the repository
            }
        }

        stage('Install npm') {
            steps {
                script {
                    // Run the command directly without sudo
                    sh 'apt update && apt install -y npm'
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
