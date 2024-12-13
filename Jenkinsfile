pipeline {
    agent any  // Run on any available agent
    
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm  // This command checks out the source code from the repository
            }
        }
        stage('Test') {
            steps {
                sh 'sudo apt install nodejs'

                sh 'node -v'
                sh 'sudo apt install npm'
            }
        }

       
    }
}
