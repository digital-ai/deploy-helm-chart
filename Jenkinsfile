#!groovy
@Library('jenkins-pipeline-libs@master')
import com.xebialabs.pipeline.utils.Branches

pipeline {
    agent none

    options {
        buildDiscarder(logRotator(numToKeepStr: '20', artifactDaysToKeepStr: '7', artifactNumToKeepStr: '5'))
        timeout(time: 1, unit: 'HOURS')
        timestamps()
        ansiColor('xterm')
    }

    environment {
        REPOSITORY_NAME = 'deploy-helm-chart'
        RELEASE_EXPLICIT = "25.1.0-${getBranch()}"
        LINUX_JDK_NAME = 'OpenJDK 17.0.2'
    }

    stages {
        stage('Validate Deploy Helm Chart') {
            stage('Lint and Unit test Deploy Helm Chart') {
                agent {
                    node {
                        label 'xld'
                    }
                }

                tools {
                    jdk env.LINUX_JDK_NAME
                }

                steps {
                    checkout scm
                    sh "./gradlew clean runHelmUnitTest --info"
                }
            }
            // stage('Validate Readme Deploy Helm Chart') {
            //     agent {
            //         node {
            //             label 'xld'
            //         }
            //     }

            //     tools {
            //         jdk env.LINUX_JDK_NAME
            //     }

            //     steps {
            //         checkout scm
            //         sh "./gradlew clean buildReadmeDocker --info"
            //     }
            // }
        }
        stage('Build Deploy Helm Chart') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean devSnapshot publish -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
                sh "ls build"
                sh "ls build/xld"
                archiveArtifacts artifacts: 'build/xld/digital-deploy-*.tgz', fingerprint: true
            }
        }
        stage('Build Deploy Helm Operator Image') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishOperatorToDockerHub -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
            }
        }
        stage('Build Deploy Helm Operator Bundle') {
            agent {
                node {
                    label 'xld'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishBundleToDockerHub -x updateDocs -x buildReadme -x test --info"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
                archiveArtifacts artifacts: 'build/xld/bundle/*', fingerprint: true
            }
        }
    }
    post {
        success {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend color: "good", tokenCredentialId: "slack-token", message: "Deploy Helm Chart master build *SUCCESS* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo'
                }
            }
        }
        failure {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend color: "danger", tokenCredentialId: "slack-token", message: "Deploy Helm Chart master build *FAILED* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo'
                }
            }
        }
    }
}

def getBranch() {
    // on simple Jenkins pipeline job the BRANCH_NAME is not filled in, and we run it only on master
    return env.BRANCH_NAME ?: 'master'
}
