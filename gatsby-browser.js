import './src/styles/global.css'
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css" 
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"




export function onInitialClientRender() { window.scrollTo(0, 0) }

export const shouldUpdateScroll = () => { window.scrollTo(0, 0); return false }