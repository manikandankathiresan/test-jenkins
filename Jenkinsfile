pipeline {
    agent any  // Run on any available agent
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm  // This command checks out the source code from the repository
            }
        }
        
        // You can add additional stages like Build, Test, Deploy, etc.
        stage('Test') {
            steps {
                sh 'sudo npm install'
            }
        }

    }
}
