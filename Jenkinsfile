node('nodejs') {
  stage('build') {
    openshiftBuild(buildConfig: 'node-hello', showBuildLogs: 'true')
  }
  stage('deploy') {
    openshiftDeploy(deploymentConfig: 'node-hello')
  }
}