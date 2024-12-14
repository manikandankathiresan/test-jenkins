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
                // sh 'npm test'
            }
        }

        stage('Build Image') {
            steps {
                echo 'Build docker image'
                sh 'docker build -t my-sample-node-app:1.0 .'
            }
        }

        stage('Check image list') {
            steps {
                sh 'docker images'
            }
        }

stage('Build and Push Docker Image') {
    steps {
        script {
            // Docker login, push, and logout in one stage
            withCredentials([usernamePassword(credentialsId: '7305bc5f-b39e-4626-9e92-455d97856104', 
                                              usernameVariable: 'DOCKERHUB_USER_NAME', 
                                              passwordVariable: 'DOCKERHUB_PASSWORD')]) {

                // Docker login
                sh 'docker login -u $DOCKERHUB_USER_NAME -p $DOCKERHUB_PASSWORD'

                // Build the Docker image (if not already built)
                // Uncomment the line below if you need to develop the image before tagging
                // sh 'docker build -t my-sample-node-app .'

                // Docker tags the image with a repository and version
                sh 'docker tag my-sample-node-app mkprofile98/my-sample-node-app:latest'

                // Docker push (pushes the tagged image to the repository)
                sh 'docker push mkprofile98/my-sample-node-app:latest'

                // Docker logout
                sh 'docker logout'
            }
        }
    }
}



        stage('Remove Image') {
        steps {
            echo 'Remove docker image'
            // sh 'docker rmi my-sample-node-app:1.0'
        }

        }
        stage('Check image-2') {
            steps {
                sh 'docker images'
            }
        }

    }
}
