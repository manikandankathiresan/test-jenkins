pipeline {
    agent {
        docker {
            image 'node:18'  // Official Node.js Docker image that includes node and npm
            args '-u root'   // Optional: run as root if necessary
        }
    }
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js and npm') {
            steps {
                script {
                    // node:16 already includes npm and node.js
                    echo 'Node.js and npm are already installed!'
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
