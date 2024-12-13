pipeline{
    agent any
    tools{
        nodejs '21.6.2'
    }
    stages{
        stage('Example'){
            steps{
                sh 'npm version'
            }
        }
    }
}
