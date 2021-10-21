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
                        sh('./mvnw test -Djacoco.skip=true')
                    }
                }
                stage ('Build') {
                    steps {
                        sh('./mvnw package -DskipTests -Djacoco.skip=true')
                    }
                }
            }
        }

        stage('Upload release') {
            steps {
                rtUpload (
                    // Obtain an Artifactory server instance, defined in Jenkins --> Manage Jenkins --> Configure System:
                    serverId: "pil",
                    spec: """{
                            "files": [
                                    {
                                        "pattern": "./target/spring-petclinic-2.5.0-SNAPSHOT.jar",
                                        "target": "pet-klinik/petklinik_jenkins_${GIT_COMMIT.substring(0,8)}.jar"
                                    }
                                ]
                            }"""
                )
            }
        }
    }
}
