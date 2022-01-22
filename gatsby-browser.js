import './src/styles/global.css'


export function onInitialClientRender() { window.scrollTo(0, 0) }

export const shouldUpdateScroll = () => { window.scrollTo(0, 0); return false }