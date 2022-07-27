import { DefaultTheme } from 'react-native-paper';
export default {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        primary: '#3BAFDA',
        accent: '#F1556C',
        gulfBlue: '#031956',
        athensGray: '#EEEFF1',
        alabaster: '#FBFBFB',
        white: '#FFFFFF',
        shark: '#202226',
        shipGray: '#3D3E49',
        zircon: '#F3F6FF',
        azureRadiance: '#3e80ff',
        hotMagenta: '#ff3ee6',
        deepskyblue: '#3ecdff',
        pigeonPost: '#bac5e9',
        valencia: '#E24C4B',
        caribbeanGreen: '#09DB93',
        // sticky notes
        persianPink: '#ff7eb9',
        violetRed: '#ff65a3',
        turquoiseBlue: '#7afcff',
        paleCanary: '#feff9c',
        goldenFizz: '#fff740',
        // sticky notes
        //pastel color
        pastelPink: '#FFD3E1',
        hawkesBlue: '#DDE3FD',
        oysterBay: '#D4F4F6',
        perfume: '#E0C3FC',
        perano: '#A6C1EE',
        frenchLilac: '#FDCBF1',
        //https://dribbble.com/shots/16758734-Onboarding-Miongi-Apps-Halloween-Edition
        lavenderRose: "#f990dc",
        fuchsiaBlue: "#855fce",
        jaffa: "#ff9647",
        //https://dribbble.com/shots/16758734-Onboarding-Miongi-Apps-Halloween-Edition
        text: 'black',
    },
    fonts: {
        light: {
            fontFamily: "ReadexProLight",
            fontWeight: "normal"
        },
        medium: {
            fontFamily: "ReadexProMedium",
            fontWeight: "normal"
        },
        regular: {
            fontFamily: "ReadexProRegular",
            fontWeight: "normal"
        },
        thin: {
            fontFamily: "ReadexProExtraLight",
            fontWeight: "normal"
        }
    },
    roundness: 12,
};

// color name ref : https://www.hexdictionary.com/color/031956

// black: '#1B1D21',
// jumbo: '#75777C',
// silverChalice: '#B0B0B0',
// lightgray: '#CDCFD2',


// cerulean: '#3BAFDA',
// fog: '#D5D0FF',
// moonRaker: '#DFDBFF',
// titanWhite: '#EEEBFF',
// magnolia: '#F5F4FF',
// wildWaterMelon: '#F1556C',
// emerald: '#19CC85',
// lightningYellow: '#FAC319',
