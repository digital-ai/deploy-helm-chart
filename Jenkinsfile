#!groovy
@Library('jenkins-pipeline-libs@master')
import com.xebialabs.pipeline.utils.Branches

pipeline {
    agent none

    options {
        buildDiscarder(logRotator(numToKeepStr: '5', artifactDaysToKeepStr: '7', artifactNumToKeepStr: '20'))
        timeout(time: 1, unit: 'HOURS')
        timestamps()
        ansiColor('xterm')
    }

    environment {
        REPOSITORY_NAME = 'deploy-helm-chart'
        RELEASE_EXPLICIT = "${getCurrentVersion()}-${getBranch()}"
        LINUX_JDK_NAME = 'OpenJDK 17.0.2'
    }

    parameters {
        booleanParam(name: 'RUN_BUNDLE_BUILD', defaultValue: false, description: 'If the build should run operator bundle build.')
        string(name: 'RELEASE_APP_EXPLICIT', defaultValue: getNightly(), description: 'The tag of the application images.')
    }

    stages {
        stage('Lint and Unit test Deploy Helm Chart') {
            agent {
                node {
                    label 'xld && linux'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean runHelmUnitTestDocker -x updateDocs -x test --info --stacktrace"
            }
        }
        stage('Validate Readme Deploy Helm Chart') {
            agent {
                node {
                    label 'xld && linux'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean buildReadmeDocker -x updateDocs -x test --info --stacktrace"
            }
        }
        stage('Build Deploy Helm Chart') {
            agent {
                node {
                    label 'xld && linux'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean devSnapshot publish -x updateDocs -x test --info --stacktrace"
                script {
                    if (fileExists('build/version.dump') == true) {
                        currentVersion = readFile 'build/version.dump'
                        env.version = currentVersion
                    }
                }
                archiveArtifacts artifacts: 'build/xld/digitalai-deploy-*.tgz', fingerprint: true
            }
        }
        stage('Build Deploy Helm Operator Image') {
            agent {
                node {
                    label 'xld && linux'
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishOperatorToDockerHub -x updateDocs -x test --info --stacktrace"
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
                    label 'xld && linux'
                }
            }

            when {
                anyOf {
                    expression {
                        params.RUN_BUNDLE_BUILD
                    }
                }
            }

            tools {
                jdk env.LINUX_JDK_NAME
            }

            steps {
                checkout scm
                sh "./gradlew clean publishBundleToDockerHub -x updateDocs -x test --info --stacktrace"
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
                    slackSend color: "good", tokenCredentialId: "slack-token", message: "Deploy Helm Chart master build *SUCCESS* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo-internal'
                }
            }
        }
        failure {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend color: "danger", tokenCredentialId: "slack-token", message: "Deploy Helm Chart master build *FAILED* - <${env.BUILD_URL}|click to open>", channel: 'team-apollo-internal'
                }
            }
        }
    }
}

def getCurrentVersion() {
    return '25.1.0'
}

def getBranch() {
    // on simple Jenkins pipeline job the BRANCH_NAME is not filled in, and we run it only on master
    return env.BRANCH_NAME ? env.BRANCH_NAME.toLowerCase() : 'master'
}

def getNightly() {
    return "${getCurrentVersion()}-${java.time.LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("Mdd"))}.113"
}