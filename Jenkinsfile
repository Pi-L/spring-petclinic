pipeline {
    agent any

    stages {
        stage('CACHE') {
            steps {
                sh('./mvnw dependency:go-offline')
            }
        }

        stage('TEST_BUILD') {
            parallel {
                stage ('Tests') {
                    steps {
                        sh('./mvnw test')
                    }
                }
                stage ('Build') {
                    steps {
                        sh('./mvnw package -DskipTests -Djacoco.skip=true')
                    }
                }
            }
        }

        stage('DEPLOY') {
            steps {
                sh('echo "DEPLOY"')
            }
        }
    }
}
