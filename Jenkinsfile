node('nodejs') {
  stage('test') {
    checkout scm
    sh """
    npm i
    npm test
    """
  }
  stage('build') {
    openshiftBuild(buildConfig: 'node-hello', showBuildLogs: 'true')
  }
  stage('deploy') {
    openshiftDeploy(deploymentConfig: 'node-hello')
  }
}