# 500px Link Resolver for Mixmax

#### To use this resolver in directly in Mixmax:
  1. Open Mixmax Dashboard
  2. Go to Settings > Integrations & API
  3. Scroll all the way to the bottom
  4. Click on Add Link Resolver
  5. Fill out the fields as follows:
    - Description: `500px (500px.com/photo/*)`
    - Regular Expression: `500px.com/photo/[^\/]+\/[^\/]+$`
    - Resolver API URL: `https://mixmax-500px-resolver.herokuapp.com/api/resolver`
  6. Magic
  
#### To run this locally:
  1. Clone this repo
  2. Make sure you have the latest release of `node` and `npm`
  3. Install `nodemon` by running `npm install -g nodemon`
  4. Run `npm install` and then `nodemon`
  5. The resolver endpoint will now be accessible at: `http://localhost:3000/api/resolver`
