pipeline {
    agent any  // Run on any available agent

    tools {
        nodejs 'nodejs-16'  // Reference the NodeJS installation you configured in Jenkins
    }

    environment {
        // Set environment variables if needed
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the source code from your repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install the dependencies from package.json
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests using npm (make sure you have a test script in your package.json)
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                // Optionally, build the project (e.g., if you need to compile assets)
                echo 'Building the project...'
            }
        }

        stage('Deploy') {
            steps {
                // Optionally, deploy the project (not implemented in this example)
                echo 'Deploying the project...'
            }
        }
    }

    post {
        always {
            // Always run cleanup tasks, like removing temporary files or reporting
            echo 'Cleaning up...'
        }

        success {
            // Send success notifications or additional steps
            echo 'Tests passed!'
        }

        failure {
            // Send failure notifications or additional steps
            echo 'Tests failed!'
        }
    }
}
