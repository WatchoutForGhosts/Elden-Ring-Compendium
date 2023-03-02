/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/armors.js":
/*!***********************!*\
  !*** ./src/armors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getArmorsData\": () => (/* binding */ getArmorsData),\n/* harmony export */   \"renderArmorsPage\": () => (/* binding */ renderArmorsPage)\n/* harmony export */ });\n\r\nasync function getArmorsData() {\r\n    const api = 'https://eldenring.fanapis.com/api/armors';\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const armorData = await response.json();\r\n        const allArmors = armorData.data;\r\n        allArmors.map(armor => createArmors(armor));\r\n        console.log(armorData);\r\n        console.log(allArmors);\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction createInputAndButton() {\r\n    const main = document.querySelector('main');\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('armors-input-container');\r\n    main.appendChild(inputContainer);\r\n\r\n    const armorsInput = document.createElement('input');\r\n    armorsInput.classList.add('armors-input');\r\n    armorsInput.placeholder = 'Search armors by name...'\r\n    inputContainer.appendChild(armorsInput);\r\n\r\n    const armorsButton = document.createElement('button');\r\n    armorsButton.classList.add('armors-button');\r\n    armorsButton.textContent = 'Search';\r\n    armorsButton.addEventListener('click', function() {\r\n        main.textContent = '';\r\n        validateInput(armorsInput, armorsInput);\r\n    })\r\n    inputContainer.appendChild(armorsButton);\r\n\r\n    armorsInput.addEventListener('keyup', function(e) {\r\n        if (e.keyCode === 13) {\r\n            main.textContent = '';\r\n            validateInput(armorsInput, armorsInput)\r\n        }\r\n    })\r\n}\r\n\r\nfunction validateInput(input, search) {\r\n    const main = document.querySelector('main');\r\n\r\n    if (input.value === '') {\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const armorSearchErrorContainer = document.createElement('div');\r\n        armorSearchErrorContainer.classList.add('armor-search-error-container');\r\n        main.appendChild(armorSearchErrorContainer);\r\n        const armorSearchError = document.createElement('p');\r\n        armorSearchError.classList.add('armor-search-error');\r\n        armorSearchError.textContent = 'Please enter a name so we know what to search for.'\r\n        armorSearchErrorContainer.appendChild(armorSearchError);\r\n      } else {\r\n        searchArmors(search.value);\r\n    }\r\n}\r\n\r\nfunction createPageButtons() {\r\n    const main = document.querySelector('main');\r\n\r\n    const pageButtonsContainer = document.createElement('div');\r\n    pageButtonsContainer.classList.add('page-buttons-container');\r\n    main.appendChild(pageButtonsContainer);\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        const pageButton = document.createElement('button');\r\n        pageButton.classList.add('armor-page-button');\r\n        pageButton.textContent = [i + 1];\r\n        pageButtonsContainer.appendChild(pageButton);\r\n        pageButton.addEventListener('click', function() {\r\n            pageSelection([i]);\r\n        });\r\n    }\r\n}\r\n\r\nasync function pageSelection(index) {\r\n    const main = document.querySelector('main');\r\n\r\n    const api = `https://eldenring.fanapis.com/api/armors?limit=60&page=${index}`;\r\n    \r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const armorData = await response.json();\r\n        const pageOfArmors = armorData.data;\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        pageOfArmors.map(page => createArmors(page));\r\n    \r\n    } catch(error) {\r\n        console.log('error');\r\n    }\r\n}\r\n\r\nasync function searchArmors(searchQuery) {\r\n    const api = `https://eldenring.fanapis.com/api/armors?name=${searchQuery}`;\r\n\r\n    const main = document.querySelector('main');\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const armorData = await response.json();\r\n        const singleArmor = armorData.data[0];\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        createArmors(singleArmor);\r\n    } catch(error) {\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const errorContainer = document.createElement('div');\r\n        errorContainer.classList.add('error-container');\r\n        main.appendChild(errorContainer);\r\n        const errorMessage = document.createElement('p');\r\n        errorMessage.classList.add('error-message');\r\n        errorMessage.textContent = \"We couldn't seem to find that armor. Please try another search.\"\r\n        errorContainer.appendChild(errorMessage);\r\n    }\r\n}\r\n\r\nfunction createArmors(data) {\r\n    const main = document.querySelector('main');\r\n\r\n    const armorContainer = document.createElement('div');\r\n    armorContainer.classList.add('boss-container');\r\n    main.appendChild(armorContainer);\r\n\r\n    const armorImg = document.createElement('img');\r\n    armorImg.src = data.image;\r\n    if (!data.image) {\r\n        armorImg.src = 'images/noimage.jpg';\r\n    }\r\n    armorImg.classList.add('armor-img');\r\n    armorContainer.appendChild(armorImg);\r\n\r\n    const armorName = document.createElement('p');\r\n    armorName.textContent = data.name;\r\n    armorName.classList.add('armor-name');\r\n    armorContainer.appendChild(armorName);\r\n\r\n    const armorLocation = document.createElement('p');\r\n    armorLocation.textContent = data.location;\r\n    armorLocation.classList.add('armor-location');\r\n    armorContainer.appendChild(armorLocation);\r\n\r\n    const armorDesc = document.createElement('p');\r\n    armorDesc.textContent = data.description;\r\n    armorDesc.classList.add('armor-description');\r\n    armorContainer.appendChild(armorDesc);\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderArmorsPage() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    createInputAndButton();\r\n    createPageButtons();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://elden-ring-app/./src/armors.js?");

/***/ }),

/***/ "./src/bosses.js":
/*!***********************!*\
  !*** ./src/bosses.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBossesData\": () => (/* binding */ getBossesData),\n/* harmony export */   \"renderBossesPage\": () => (/* binding */ renderBossesPage)\n/* harmony export */ });\n\r\nasync function getBossesData() {\r\n    const api = 'https://eldenring.fanapis.com/api/bosses?limit20&page=0';\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const allBosses = bossData.data;\r\n        allBosses.map(boss => createBosses(boss));\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction createInputAndButton() {\r\n    const main = document.querySelector('main');\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('bosses-input-container');\r\n    main.appendChild(inputContainer);\r\n\r\n    const bossesInput = document.createElement('input');\r\n    bossesInput.classList.add('bosses-input');\r\n    bossesInput.placeholder = 'Search bosses by name...'\r\n    inputContainer.appendChild(bossesInput);\r\n\r\n    const bossesButton = document.createElement('button');\r\n    bossesButton.classList.add('bosses-button');\r\n    bossesButton.textContent = 'Search';\r\n    bossesButton.addEventListener('click', function() {\r\n        main.textContent = '';\r\n        validateInput(bossesInput, bossesInput);\r\n    })\r\n    inputContainer.appendChild(bossesButton);\r\n\r\n    bossesInput.addEventListener('keyup', function(e) {\r\n        if (e.keyCode === 13) {\r\n            main.textContent = '';\r\n            validateInput(bossesInput, bossesInput)\r\n        }\r\n    })\r\n}\r\n\r\nfunction validateInput(input, search) {\r\n    const main = document.querySelector('main');\r\n\r\n    if (input.value === '') {\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const bossSearchErrorContainer = document.createElement('div');\r\n        bossSearchErrorContainer.classList.add('boss-search-error-container');\r\n        main.appendChild(bossSearchErrorContainer);\r\n        const bossSearchError = document.createElement('p');\r\n        bossSearchError.classList.add('boss-search-error');\r\n        bossSearchError.textContent = 'Please enter a name so we know what to search for.'\r\n        bossSearchErrorContainer.appendChild(bossSearchError);\r\n      } else {\r\n        searchBosses(search.value);\r\n    }\r\n}\r\n\r\nfunction createPageButtons() {\r\n    const main = document.querySelector('main');\r\n\r\n    const pageButtonsContainer = document.createElement('div');\r\n    pageButtonsContainer.classList.add('page-buttons-container');\r\n    main.appendChild(pageButtonsContainer);\r\n\r\n    for (let i = 0; i < 5; i++) {\r\n        const pageButton = document.createElement('button');\r\n        pageButton.classList.add('boss-page-button');\r\n        pageButton.textContent = [i + 1];\r\n        pageButtonsContainer.appendChild(pageButton);\r\n        pageButton.addEventListener('click', function() {\r\n            pageSelection([i]);\r\n        });\r\n    }\r\n}\r\n\r\nasync function pageSelection(index) {\r\n    const main = document.querySelector('main');\r\n\r\n    const api = `https://eldenring.fanapis.com/api/bosses?limit=20&page=${index}`;\r\n    \r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const pageOfBosses = bossData.data;\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        pageOfBosses.map(page => createBosses(page));\r\n    \r\n    } catch(error) {\r\n        console.log('error');\r\n    }\r\n}\r\n\r\nasync function searchBosses(searchQuery) {\r\n    const api = `https://eldenring.fanapis.com/api/bosses?name=${searchQuery}`;\r\n\r\n    const main = document.querySelector('main');\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const bossData = await response.json();\r\n        const singleBoss = bossData.data[0];\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        createBosses(singleBoss);\r\n    } catch(error) {\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const errorContainer = document.createElement('div');\r\n        errorContainer.classList.add('error-container');\r\n        main.appendChild(errorContainer);\r\n        const errorMessage = document.createElement('p');\r\n        errorMessage.classList.add('error-message');\r\n        errorMessage.textContent = \"We couldn't seem to find that boss. Please try another search.\"\r\n        errorContainer.appendChild(errorMessage);\r\n    }\r\n}\r\n\r\nfunction createBosses(data) {\r\n    const main = document.querySelector('main');\r\n\r\n    const bossContainer = document.createElement('div');\r\n    bossContainer.classList.add('boss-container');\r\n    main.appendChild(bossContainer);\r\n\r\n    const bossImg = document.createElement('img');\r\n    bossImg.src = data.image;\r\n    if (!data.image) {\r\n        bossImg.src = 'images/noimage.jpg';\r\n    }\r\n    bossImg.classList.add('boss-img');\r\n    bossContainer.appendChild(bossImg);\r\n\r\n    const bossName = document.createElement('p');\r\n    bossName.textContent = data.name;\r\n    bossName.classList.add('boss-name');\r\n    bossContainer.appendChild(bossName);\r\n\r\n    const bossLocation = document.createElement('p');\r\n    bossLocation.textContent = data.location;\r\n    bossLocation.classList.add('boss-location');\r\n    bossContainer.appendChild(bossLocation);\r\n\r\n    const bossDesc = document.createElement('p');\r\n    bossDesc.textContent = data.description;\r\n    bossDesc.classList.add('boss-description');\r\n    bossContainer.appendChild(bossDesc);\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderBossesPage() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    createInputAndButton();\r\n    createPageButtons();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://elden-ring-app/./src/bosses.js?");

/***/ }),

/***/ "./src/creatures.js":
/*!**************************!*\
  !*** ./src/creatures.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCreaturesData\": () => (/* binding */ getCreaturesData),\n/* harmony export */   \"renderCreaturesPage\": () => (/* binding */ renderCreaturesPage)\n/* harmony export */ });\n\r\nasync function getCreaturesData() {\r\n    const api = 'https://eldenring.fanapis.com/api/creatures';\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const creatureData = await response.json();\r\n        const allCreatures = creatureData.data;\r\n        allCreatures.map(creature => createCreatures(creature));\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction createInputAndButton() {\r\n    const main = document.querySelector('main');\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('creatures-input-container');\r\n    main.appendChild(inputContainer);\r\n\r\n    const creaturesInput = document.createElement('input');\r\n    creaturesInput.classList.add('creatures-input');\r\n    creaturesInput.placeholder = 'Search creatures by name...'\r\n    inputContainer.appendChild(creaturesInput);\r\n\r\n    const creaturesButton = document.createElement('button');\r\n    creaturesButton.classList.add('creatures-button');\r\n    creaturesButton.textContent = 'Search';\r\n    creaturesButton.addEventListener('click', function() {\r\n        main.textContent = '';\r\n        validateInput(creaturesInput, creaturesInput);\r\n    })\r\n    inputContainer.appendChild(creaturesButton);\r\n\r\n    creaturesInput.addEventListener('keyup', function(e) {\r\n        if (e.keyCode === 13) {\r\n            main.textContent = '';\r\n            validateInput(creaturesInput, creaturesInput)\r\n        }\r\n    })\r\n}\r\n\r\nfunction validateInput(input, search) {\r\n    const main = document.querySelector('main');\r\n\r\n    if (input.value === '') {\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const creatureSearchErrorContainer = document.createElement('div');\r\n        creatureSearchErrorContainer.classList.add('creature-search-error-container');\r\n        main.appendChild(creatureSearchErrorContainer);\r\n        const creatureSearchError = document.createElement('p');\r\n        creatureSearchError.classList.add('creature-search-error');\r\n        creatureSearchError.textContent = 'Please enter a name so we know what to search for.'\r\n        creatureSearchErrorContainer.appendChild(creatureSearchError);\r\n      } else {\r\n        searchCreatures(search.value);\r\n    }\r\n}\r\n\r\nfunction createPageButtons() {\r\n    const main = document.querySelector('main');\r\n\r\n    const pageButtonsContainer = document.createElement('div');\r\n    pageButtonsContainer.classList.add('page-buttons-container');\r\n    main.appendChild(pageButtonsContainer);\r\n\r\n    for (let i = 0; i < 6; i++) {\r\n        const pageButton = document.createElement('button');\r\n        pageButton.classList.add('creature-page-button');\r\n        pageButton.textContent = [i + 1];\r\n        pageButtonsContainer.appendChild(pageButton);\r\n        pageButton.addEventListener('click', function() {\r\n            pageSelection([i]);\r\n        });\r\n    }\r\n}\r\n\r\nasync function pageSelection(index) {\r\n    const main = document.querySelector('main');\r\n\r\n    const api = `https://eldenring.fanapis.com/api/creatures?limit=20&page=${index}`;\r\n    \r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const creatureData = await response.json();\r\n        const pageOfCreatures = creatureData.data;\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        pageOfCreatures.map(page => createCreatures(page));\r\n    \r\n    } catch(error) {\r\n        console.log('error');\r\n    }\r\n}\r\n\r\nasync function searchCreatures(searchQuery) {\r\n    const api = `https://eldenring.fanapis.com/api/creatures?name=${searchQuery}`;\r\n\r\n    const main = document.querySelector('main');\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const creatureData = await response.json();\r\n        const singleCreature = creatureData.data[0];\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        createCreatures(singleCreature);\r\n    } catch(error) {\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const errorContainer = document.createElement('div');\r\n        errorContainer.classList.add('error-container');\r\n        main.appendChild(errorContainer);\r\n        const errorMessage = document.createElement('p');\r\n        errorMessage.classList.add('error-message');\r\n        errorMessage.textContent = \"We couldn't seem to find that creature. Please try another search.\"\r\n        errorContainer.appendChild(errorMessage);\r\n    }\r\n}\r\n\r\nfunction createCreatures(data) {\r\n    const main = document.querySelector('main');\r\n\r\n    const creatureContainer = document.createElement('div');\r\n    creatureContainer.classList.add('creature-container');\r\n    main.appendChild(creatureContainer);\r\n\r\n    const creatureImg = document.createElement('img');\r\n    creatureImg.src = data.image;\r\n    if (!data.image) {\r\n        creatureImg.src = 'images/noimage.jpg';\r\n    }\r\n    creatureImg.classList.add('creature-img');\r\n    creatureContainer.appendChild(creatureImg);\r\n\r\n    const creatureName = document.createElement('p');\r\n    creatureName.textContent = data.name;\r\n    creatureName.classList.add('creature-name');\r\n    creatureContainer.appendChild(creatureName);\r\n\r\n    const creatureLocation = document.createElement('p');\r\n    creatureLocation.textContent = data.location;\r\n    creatureLocation.classList.add('creature-location');\r\n    creatureContainer.appendChild(creatureLocation);\r\n\r\n    const creatureDesc = document.createElement('p');\r\n    creatureDesc.textContent = data.description;\r\n    creatureDesc.classList.add('creature-description');\r\n    creatureContainer.appendChild(creatureDesc);\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderCreaturesPage() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    createInputAndButton();\r\n    createPageButtons();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://elden-ring-app/./src/creatures.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createHome() {\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.classList.add('home-container');\r\n\r\n    const homeHeaderContainer = document.createElement('div');\r\n    homeHeaderContainer.classList.add('home-header-container');\r\n    homeContainer.appendChild(homeHeaderContainer);\r\n\r\n    const homeHeader = document.createElement('h1');\r\n    homeHeader.classList.add('home-header');\r\n    homeHeader.textContent = 'Greetings Tarnished';\r\n    homeHeaderContainer.appendChild(homeHeader);\r\n\r\n    const homeP1 = document.createElement('p');\r\n    homeP1.classList.add('home-p');\r\n    homeP1.textContent = 'Welcome to the Elden Ring Compendium. Our goal is to provide the Tarnished of the Lands Between with a referential tool to assist in their journey to become Elden Lords.';\r\n    homeHeader.appendChild(homeP1);\r\n\r\n    return homeContainer;\r\n}\r\n\r\nfunction renderHome() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://elden-ring-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderApp() {\r\n    const content = document.querySelector('.content');\r\n    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild(createMain());\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\nrenderApp();\n\n//# sourceURL=webpack://elden-ring-app/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _bosses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bosses */ \"./src/bosses.js\");\n/* harmony import */ var _creatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creatures */ \"./src/creatures.js\");\n/* harmony import */ var _weapons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weapons */ \"./src/weapons.js\");\n/* harmony import */ var _armors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./armors */ \"./src/armors.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createNavbar() {\r\n    const navHeader = document.createElement('header');\r\n    navHeader.classList.add('nav-header');\r\n\r\n    const logoContainer = document.createElement('div');\r\n    logoContainer.classList.add('logo-container');\r\n    navHeader.appendChild(logoContainer);\r\n\r\n    const logo = document.createElement('button');\r\n    logo.classList.add('logo');\r\n    logo.textContent = 'Elden Ring Compendium';\r\n    logo.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    logoContainer.appendChild(logo);\r\n\r\n    const navBar = document.createElement('nav');\r\n    navBar.classList.add('navbar');\r\n    navHeader.appendChild(navBar);\r\n\r\n    const bossesBtn = document.createElement('button');\r\n    bossesBtn.classList.add('nav-button');\r\n    bossesBtn.textContent = 'Bosses';\r\n    bossesBtn.addEventListener('click', function() {\r\n        (0,_bosses__WEBPACK_IMPORTED_MODULE_1__.getBossesData)();\r\n        (0,_bosses__WEBPACK_IMPORTED_MODULE_1__.renderBossesPage)();\r\n    });\r\n    navBar.appendChild(bossesBtn);\r\n\r\n    const creaturesBtn = document.createElement('button');\r\n    creaturesBtn.classList.add('nav-button');\r\n    creaturesBtn.textContent = 'Creatures';\r\n    creaturesBtn.addEventListener('click', function() {\r\n        (0,_creatures__WEBPACK_IMPORTED_MODULE_2__.getCreaturesData)();\r\n        (0,_creatures__WEBPACK_IMPORTED_MODULE_2__.renderCreaturesPage)();\r\n    })\r\n    navBar.appendChild(creaturesBtn);\r\n\r\n    const weaponsBtn = document.createElement('button');\r\n    weaponsBtn.classList.add('nav-button');\r\n    weaponsBtn.textContent = 'Weapons';\r\n    weaponsBtn.addEventListener('click', function() {\r\n        (0,_weapons__WEBPACK_IMPORTED_MODULE_3__.getWeaponsData)();\r\n        (0,_weapons__WEBPACK_IMPORTED_MODULE_3__.renderWeaponsPage)();\r\n    })\r\n    navBar.appendChild(weaponsBtn);\r\n\r\n    const armorsBtn = document.createElement('button');\r\n    armorsBtn.classList.add('nav-button');\r\n    armorsBtn.textContent = 'Armors';\r\n    armorsBtn.addEventListener('click', function() {\r\n        (0,_armors__WEBPACK_IMPORTED_MODULE_4__.getArmorsData)();\r\n        (0,_armors__WEBPACK_IMPORTED_MODULE_4__.renderArmorsPage)();\r\n    })\r\n    navBar.appendChild(armorsBtn);\r\n\r\n    const itemsBtn = document.createElement('button');\r\n    itemsBtn.classList.add('nav-button');\r\n    itemsBtn.textContent = 'Items';\r\n    navBar.appendChild(itemsBtn);\r\n\r\n    const locationsBtn = document.createElement('button');\r\n    locationsBtn.classList.add('nav-button');\r\n    locationsBtn.textContent = 'Locations';\r\n    navBar.appendChild(locationsBtn);\r\n\r\n    const hamburgerBtn = document.createElement('div');\r\n    hamburgerBtn.classList.add('hamburger-btn');\r\n    navHeader.appendChild(hamburgerBtn);\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n        const hamburgerLine = document.createElement('div');\r\n        hamburgerLine.classList.add('hamburger-line');\r\n        hamburgerBtn.appendChild(hamburgerLine);\r\n    }\r\n\r\n    hamburgerBtn.addEventListener('click', function() {\r\n        navBar.classList.toggle('navbar-active');\r\n    })\r\n\r\n    const navButtons = [\r\n        bossesBtn,\r\n        creaturesBtn,\r\n        weaponsBtn,\r\n        armorsBtn,\r\n        itemsBtn,\r\n        locationsBtn,\r\n    ]\r\n    navButtons.forEach(button => button.addEventListener('click', function() {\r\n        if (navBar.classList.contains('navbar-active')) {\r\n            navBar.classList.remove('navbar-active');\r\n        }\r\n    }))\r\n\r\n    return navHeader;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);\n\n//# sourceURL=webpack://elden-ring-app/./src/navbar.js?");

/***/ }),

/***/ "./src/weapons.js":
/*!************************!*\
  !*** ./src/weapons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeaponsData\": () => (/* binding */ getWeaponsData),\n/* harmony export */   \"renderWeaponsPage\": () => (/* binding */ renderWeaponsPage)\n/* harmony export */ });\n\r\nasync function getWeaponsData() {\r\n    const api = 'https://eldenring.fanapis.com/api/weapons';\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const weaponData = await response.json();\r\n        const allWeapons = weaponData.data;\r\n        allWeapons.map(weapon  => createWeapons(weapon));\r\n        console.log(weaponData);\r\n        console.log(allWeapons);\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction createInputAndButton() {\r\n    const main = document.querySelector('main');\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('weapons-input-container');\r\n    main.appendChild(inputContainer);\r\n\r\n    const weaponsInput = document.createElement('input');\r\n    weaponsInput.classList.add('weapons-input');\r\n    weaponsInput.placeholder = 'Search weapons by name...'\r\n    inputContainer.appendChild(weaponsInput);\r\n\r\n    const weaponsButton = document.createElement('button');\r\n    weaponsButton.classList.add('weapons-button');\r\n    weaponsButton.textContent = 'Search';\r\n    weaponsButton.addEventListener('click', function() {\r\n        main.textContent = '';\r\n        validateInput(weaponsInput, weaponsInput);\r\n    })\r\n    inputContainer.appendChild(weaponsButton);\r\n\r\n    weaponsInput.addEventListener('keyup', function(e) {\r\n        if (e.keyCode === 13) {\r\n            main.textContent = '';\r\n            validateInput(weaponsInput, weaponsInput)\r\n        }\r\n    })\r\n}\r\n\r\nfunction validateInput(input, search) {\r\n    const main = document.querySelector('main');\r\n\r\n    if (input.value === '') {\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const weaponSearchErrorContainer = document.createElement('div');\r\n        weaponSearchErrorContainer.classList.add('weapon-search-error-container');\r\n        main.appendChild(weaponSearchErrorContainer);\r\n        const weaponSearchError = document.createElement('p');\r\n        weaponSearchError.classList.add('weapon-search-error');\r\n        weaponSearchError.textContent = 'Please enter a name so we know what to search for.'\r\n        weaponSearchErrorContainer.appendChild(weaponSearchError);\r\n      } else {\r\n        searchWeapons(search.value);\r\n    }\r\n}\r\n\r\nfunction createPageButtons() {\r\n    const main = document.querySelector('main');\r\n\r\n    const pageButtonsContainer = document.createElement('div');\r\n    pageButtonsContainer.classList.add('page-buttons-container');\r\n    main.appendChild(pageButtonsContainer);\r\n\r\n    for (let i = 0; i < 8; i++) {\r\n        const pageButton = document.createElement('button');\r\n        pageButton.classList.add('weapon-page-button');\r\n        pageButton.textContent = [i + 1];\r\n        pageButtonsContainer.appendChild(pageButton);\r\n        pageButton.addEventListener('click', function() {\r\n            pageSelection([i]);\r\n        });\r\n    }\r\n}\r\n\r\nasync function pageSelection(index) {\r\n    const main = document.querySelector('main');\r\n\r\n    const api = `https://eldenring.fanapis.com/api/weapons?limit=40&page=${index}`;\r\n    \r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const weaponData = await response.json();\r\n        const pageOfWeapons = weaponData.data;\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        pageOfWeapons.map(page => createWeapons(page));\r\n    \r\n    } catch(error) {\r\n        console.log('error');\r\n    }\r\n}\r\n\r\nasync function searchWeapons(searchQuery) {\r\n    const api = `https://eldenring.fanapis.com/api/weapons?name=${searchQuery}`;\r\n\r\n    const main = document.querySelector('main');\r\n\r\n    try {\r\n        const response = await fetch(api, {mode: 'cors'});\r\n        const weaponData = await response.json();\r\n        const singleWeapon = weaponData.data[0];\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        createWeapons(singleWeapon);\r\n    } catch(error) {\r\n        main.textContent = '';\r\n        createInputAndButton();\r\n        createPageButtons();\r\n        const errorContainer = document.createElement('div');\r\n        errorContainer.classList.add('error-container');\r\n        main.appendChild(errorContainer);\r\n        const errorMessage = document.createElement('p');\r\n        errorMessage.classList.add('error-message');\r\n        errorMessage.textContent = \"We couldn't seem to find that weapon. Please try another search.\"\r\n        errorContainer.appendChild(errorMessage);\r\n    }\r\n}\r\n\r\nfunction createWeapons(data) {\r\n    const main = document.querySelector('main');\r\n\r\n    const weaponContainer = document.createElement('div');\r\n    weaponContainer.classList.add('weapon-container');\r\n    main.appendChild(weaponContainer);\r\n\r\n    const weaponImg = document.createElement('img');\r\n    weaponImg.src = data.image;\r\n    if (!data.image) {\r\n        weaponImg.src = 'images/noimage.jpg';\r\n    }\r\n    weaponImg.classList.add('weapon-img');\r\n    weaponContainer.appendChild(weaponImg);\r\n\r\n    const weaponName = document.createElement('p');\r\n    weaponName.textContent = data.name;\r\n    weaponName.classList.add('weapon-name');\r\n    weaponContainer.appendChild(weaponName);\r\n\r\n    const weaponLocation = document.createElement('p');\r\n    weaponLocation.textContent = data.location;\r\n    weaponLocation.classList.add('weapon-location');\r\n    weaponContainer.appendChild(weaponLocation);\r\n\r\n    const weaponDesc = document.createElement('p');\r\n    weaponDesc.textContent = data.description;\r\n    weaponDesc.classList.add('weapon-description');\r\n    weaponContainer.appendChild(weaponDesc);\r\n\r\n    return main;\r\n}\r\n\r\nfunction renderWeaponsPage() {\r\n    const main = document.querySelector('main');\r\n    main.textContent = '';\r\n\r\n    createInputAndButton();\r\n    createPageButtons();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://elden-ring-app/./src/weapons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;