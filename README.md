# buttondown-netlify-function
This is a demo of a simple, custom newsletter subscription form built with Netlify Functions and the Buttondown API. It includes a serverless function, a basic HTML form, and a minimal landing page.

**View the demo site:** [https://buttondown-netlify-functions-demo.netlify.app](https://buttondown-netlify-functions-demo.netlify.app)

## Deploy to Netlify
Deploy your own version of this example site, by clicking the Deploy to Netlify Button below. This will automatically:

- Clone a copy of this repo to your own GitHub account
- Create a new project in your Netlify account, linked to your new repo
- Create an automated deployment pipeline to watch for changes on your repo
- Build and deploy your new site

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andrewstiefel/buttondown-netlify-function)

## Install and run this example locally
You can clone this example repo to explore its features and implementation, and to run it locally.

```
# 1. Clone the repository to your local development environment
git clone git@github.com:netlify/buttondown-netlify-function.git

# 2. Move into the project directory
cd buttondown-netlify-function

# 3. Install the Netlify CLI to let you locally serve your site using Netlify's features
npm install -g netlify-cli

# 4. Serve your site using Netlify Dev to get local serverless functions
netlify dev
```

## Create an environment variable
You must create and add your [Buttondown API key](https://buttondown.email/settings) as an [environment variable](https://docs.netlify.com/environment-variables/overview/) for your Netlify site before the serverless function will work.

## License
[MIT License](/LICENSE)
