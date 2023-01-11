// import { buildLegacyTheme } from "sanity";

// const props={
//     "--my-white":"#fff",
//     "--my-black":"#lalala",
//     "--papafam-brand":"#f7AB0A",
//     "--my-red":"#db4437",
//     "--my-yellow":"#fb400",
//     "--my-green":"#0f9d58",

// };

// export const myTheme = buildLegacyTheme({
//      /* Base theme colors */
// "--black": props["--my-black"],
// "--white":props["--my-white"],
// "--gray":"#666",
// "--component-bg":props["--my-black"],
// "--component-text-color":props["--my-white"],


// "--brand-primary":props["--papafam-brand"],



// "--default-button-color":"#666",
// "--default-button-primary-color":props["--papafam-brand"],
// "--default-button-success-color":props["--my-green"],
// "--default-button-warning-color":props["--my-yellow"],
// "--default-button-danger-color":props["--my-red"],


// "--state-info-color":"#666",
// "--state-success-color":props["--my-green"],
// "--state-warning-color":props["--my-yellow"],
// "--state-danger-color":props["--my-red"],


// "--main-navigation-color":props["--my-black"],
// "--main-navigation-color--inverted":props["--my-white"],
// "--focus-color":props["--papafam-brand"],
// })


import {buildLegacyTheme, defineConfig} from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
})

export default defineConfig({
  // rest of config...,

  theme: myTheme,
})