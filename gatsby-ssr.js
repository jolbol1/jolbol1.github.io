/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 import * as React from "react"

 export const onRenderBody = ({ setPostBodyComponents }) => {
   setPostBodyComponents([
     <script async type="text/javascript" src="/stars.js" key="stars-js"></script>,
   ])
 }