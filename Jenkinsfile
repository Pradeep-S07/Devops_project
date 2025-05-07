pipeline {
    agent any

    tools {
        nodejs "Node 18"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-user/your-repo.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-web-app .'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
