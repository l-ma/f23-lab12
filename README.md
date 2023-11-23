# Lab 13 - Cloud Deployment

In this recitation, you will practice deploying a project through GCP.

## Deliverables
- [ ] Successfully deploy your app through GCP
- [ ] Show your TA that all tests pass in Github and that the app supports all functionality from the tests
- [ ] Change the front end to make it prettier

Continuous Deployment/Delivery (CD) refers to the practice of automatically deploying code changes to the production environment after they have been tested and approved. Continuous Deployment involves automatically deploying changes to the production environment as soon as they pass automated tests, while Continuous Delivery involves deploying changes to a staging environment for further testing and approval before being deployed to production.

You'll be deploying your app through Google Cloud Platform. The goal here is to make your app accessible over the internet instead of only locally. You'll set up the continuous deployment such that your deployment is updated with the latest version of the app whenever you push code to the main branch of your repository.

## Deploy on Google Cloud Platform

> NOTE: We will not be giving out more coupons. If you still have not set up GCP with the coupon from Lab 8, you will not be able to complete this portion of the lab.

Since you've already redeemed your coupon, all you need to do is deploy on GCP.

1. Create a project called "Lab 12" using the GCP Cloud Console (you can set the location to "Students")
2. Visit the Cloud Run console and select the project you just created using the project selector drop down (top-left)
3. Click on "Create Service"
4. Select "Continuously deploy new revisions from a source repository" and click "Set up with Cloud Build"
5. Set the Source repository to be your fork of this repository - you may need to click on "Manage connected repositories" and authenticate with GitHub if you don't see the repository.
6. Set the Build Type to the "Go, Node.js, Python, ..." option
7. Set the Entrypoint to be `npm install; npm run build; npm start`
8. In the "Authentication" section select "Allow unauthenticated invocations" and hit "Create"
9. Once the deployment is complete, click on the URL of the form *.run.app at the top of the page to view the deployment.

With the setup complete, you'll be able to quickly iterate and any changes you make and push to your fork will be automatically deployed on GCP.

## Making changes

Now it's time to test out your new deployment setup. Let's first extend the functionality of the app. Uncomment the tests we've provided and figure out how to pass all of them. See the section below to know how to run the tests. Once all of the tests are passing, push the changes to your fork. You should see a new deployment of your app. Check to make sure that your app has been successfully updated.

The current front end of your app is quite ugly, change something in the frontend to make it look nicer and push the changes to your fork. You should once again see a new deployment of your app. Check to make sure that your app has been successfully updated. If you don't know what to make prettier, you could change the font of the text, the look of the input box, or the placement of the text and input box on the screen, but we encourage you to get creative and do something fun.

> Note: the two changes above should be separate deployments. If you do not have at least 3 deployments, your TA will ask you to redo the work.

## Seeing the app in your browser

First install the app:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Testing

The repo uses [Jest](https://jestjs.io/) for testing. Current there's one test file for `QueryProcessor` helper, called `_tests_/QueryProcessor.test.ts`.

To run tests, run the following command

```bash
npm run test
```

Jest will run in watch mode, which means it will automatically run your test case as you make changes to your code.