module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          //component
          "@Atoms": "./src/Components/Atoms/",
          "@Molecules": "./src/Components/Molecules/",
          "@Organisms": "./src/Components/Organisms/",
          //config
          "@Config": "./src/Config/",
          "@Model": "./src/Config/Model",
          "@ViewModel": "./src/Config/ViewModel",
          "@CustomHooks": "./src/Config/CustomHooks/",
          "@Data": "./src/Config/Data/",
          "@Data": "./src/Config/Data/",
          "@Redux": "./src/Config/Redux/",
          "@Actions": "./src/Config/Redux/Actions/",
          "@Reducers": "./src/Config/Redux/Reducers/",
          "@Store": "./src/Config/Redux/Store/",
          "@RootNavigation": "./src/Config/RootNavigation/",
          //Container
          "@Pages": "./src/Container/Pages/",
          "@Templates": "./src/Container/Templates/",
          //utils
          "@Utils": "./src/Utils",
        },
      },
    ],
  ],
};
