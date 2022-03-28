# Fisheye-fromReact-toNext
## Getting started with Next 
I migrate my react [Fisheye](https://github.com/Vincent-Wirwicki/Fisheye-React-routing-hooks) to NextJs.  
Everyting is almost the same I made some minor changes.  
From NextJs I used [StaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) [StaticPath](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) and [image](https://nextjs.org/docs/api-reference/next/image#required-props) components

## Changes
Nav component :
- Unique tags change depending on the page
- On home page you can filter photographers by tags
- On profile page you can filter photos

Removed dependecies :
- Tailwind is gone
- Express is gone too, replace by StaticProps and Paths
