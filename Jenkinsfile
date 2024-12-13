pipeline {
    agent any {
        stages('Checkout') {
            steps {
                checkout scm
            }
        }

        stages('Test') {
            steps {
                sh 'sudo npm install'
            }
        }
    }
}
