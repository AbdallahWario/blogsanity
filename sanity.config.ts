import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';


const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basepath:'/studio',
  name: 'IsioloTimes_Content_Studio',
  title: 'IsioloTimes',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
        // logo:Logo,
        navbar: StudioNavbar,

    }
  },

  theme:myTheme,
})
