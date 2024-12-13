pipeline {
    agent {
        docker {
            image 'node:16'  // Use the official Node.js Docker image
            args '-u root'   // Optional: Run as root (if needed for installing npm globally)
        }
    }
    stages {
        stage('Install npm') {
            steps {
                sh 'npm install'  // Run npm install directly
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
    }
}
