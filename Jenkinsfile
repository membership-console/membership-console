pipeline {
    agent any

    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }

        stage("build") {
            agent {
                docker {
                    image "node:18-alpine"
                    reuseNode true
                }
            }
            steps {
                sh "npm install"
                sh "npm run build:dev"
            }
        }

        stage("deploy") {
            steps {
                sh "rm -rf ${OUTPUT_PATH}"
                sh "mv dist ${OUTPUT_PATH}"
            }
        }
    }
}
