import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  // build: {
  //   outDir: 'build',
  // },
  resolve:{
    alias:{
      'src' : path.resolve(__dirname, './src')
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // environment: 'jsdom'
  },
  plugins: [
    react(
      {
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: [
            'babel-plugin-macros',
            // 'macros',
            [
              "@emotion/babel-plugin",
              {
                "sourceMap": true,
                "autoLabel": "dev-only",
                "labelFormat": "[local]",
                "cssPropOptimization": true
              }
            ]
          ]
        },
        // Exclude storybook stories
        exclude: /\.stories\.(t|j)sx?$/,
      }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
