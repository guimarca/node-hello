# Node.js Hello World for OpenShift

This is a "Hello World" node.js app with an OpenShift Jenkins pipeline.

## OpenShift deployment

1. [Install minishift](https://docs.okd.io/latest/minishift/getting-started/installing.html) and [start it](https://docs.okd.io/latest/minishift/getting-started/quickstart.html)

2. Create a project

3. Create an app: choose 'Node.js' from the catalog, indicating this repo url

    3.1 Go to the Environment tab and set `PORT=8080`

You should see 1 POD running and serving the app.

4. Create another app, choosing 'Jenkins Ephemeral' from catalog

5. Create a new Pipeline Job. In the Pipeline block, select:

    5.1. Definition: 'Pipeline script from SCM'

    5.2. SCM: 'Git'

    5.3. Repositories: Repository url -> this repo url, Branch: */master (or whatever branch you want to build)

    5.4. Script path: 'Jenkinsfile'

The pipeline Job is set. If your cluster has visibility from the Internet, you can configure a Webhoon in GitHub (check the address under Builds > (your app) > Configuration). In the Jenkins job,  check the 'GitHub hook trigger for GITScm polling' in the build trigger block in order to build the app automatically after a push to the selected branch.

## Run It

`npm start`

By default listens on port 3000, can be customized throug `PORT` env variable:

`PORT=8080 npm start`

## Test

`npm test`
