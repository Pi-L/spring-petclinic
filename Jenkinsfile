pipeline {
    agent any
    stages {
        stage('TEST_BUILD') {
            parallel {
                stage ('Tests') {
                    steps {
                        sh('./mvnw test')
                    }
                }
                stage ('Build') {
                    steps {
                        sh('./mvnw clean install -DskipTests')
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
