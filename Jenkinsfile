pipeline {
    agent any {
        stages('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'sudo npm install'
            }
        }
    }
}
