module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: gameStatusToString, cardTeamToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameStatusToString", function() { return gameStatusToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTeamToString", function() { return cardTeamToString; });
const gameStatusToString = {
  1: "Red's turn",
  2: "Blue's turn",
  3: 'Red Wins',
  4: 'Blue Wins',
  5: 'Your Turn',
  // Green
  6: 'You Win',
  // Green
  7: 'You Lose' // Green

};
const cardTeamToString = {
  0: 'neutral',
  1: 'red',
  2: 'blue',
  3: 'death',
  4: 'green'
};

/***/ }),

=======
>>>>>>> master
/***/ "./database.js":
/*!*********************!*\
  !*** ./database.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);


const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"]('mongodb+srv://barstool:T0qLffUuHsNiDFaX@cluster0-r3emj.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('cs');
    console.log('Connected to Database');
    return next();
  } catch (err) {
    throw new Error('Error connecting to Database. Error: ', err);
  }
}

const middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();
middleware.use(database);
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./pages/api/games.js":
/*!****************************!*\
  !*** ./pages/api/games.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! random-words */ "random-words");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database */ "./database.js");
/* harmony import */ var _words_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../words.json */ "./words.json");
var _words_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../words.json */ "./words.json", 1);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_database__WEBPACK_IMPORTED_MODULE_2__["default"]); // Find a game with token

handler.get(async (req, res) => {
  const {
    token
  } = req.query;

  try {
    const game = await req.db.collection('games').findOne({
      token
    });
    res.json(game);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error loadin game with token: ${token}: ${err}`);
  }
}); // Create new game

handler.post(async (req, res) => {
  const {
    token,
    officialWords
  } = req.body;

  const randomInt = (min, max) => Math.round(min + Math.random() * (max - min));

  const doNotInclude = {};

  const getWord = ({
    isOfficial
  }) => {
    let word = isOfficial ? _words_json__WEBPACK_IMPORTED_MODULE_3__.list[randomInt(0, _words_json__WEBPACK_IMPORTED_MODULE_3__.list.length - 1)] : random_words__WEBPACK_IMPORTED_MODULE_1___default()();

    while (doNotInclude[word]) {
      word = isOfficial ? _words_json__WEBPACK_IMPORTED_MODULE_3__.list[randomInt(0, _words_json__WEBPACK_IMPORTED_MODULE_3__.list.length - 1)] : random_words__WEBPACK_IMPORTED_MODULE_1___default()();
    }

    doNotInclude[word] = true;
    return word;
  };

<<<<<<< HEAD
  let gameStatus = 5;
  if (!green) gameStatus = req.query.firstPlayer || Math.random() >= 0.5 ? 1 : 2; // Fill the board with neutral cards

=======
  const gameStatus = Math.random() >= 0.5 ? 1 : 2;
>>>>>>> master
  const boardMap = [];

  for (let i = 0; i < 5; i++) {
    const row = [];

    for (let j = 0; j < 5; j++) {
      row.push({
        word: officialWords ? getWord({
          isOfficial: true
        }) : getWord({
          isOfficial: false
        }),
        team: 0,
        isRevealed: false
      });
    }

    boardMap.push(row);
  }

  const addCardOwner = int => {
    let x = randomInt(0, 4);
    let y = randomInt(0, 4);

    while (boardMap[x][y].team !== 0) {
      x = randomInt(0, 4);
      y = randomInt(0, 4);
    }

    boardMap[x][y].team = int;
  };

<<<<<<< HEAD
  if (!green) {
    for (let i = 0; i < 9; i++) {
      addCardOwner(gameStatus === 1 ? 1 : 2);

      if (i !== 0) {
        addCardOwner(gameStatus === 1 ? 2 : 1);
      }
    }
  }
=======
  for (let i = 0; i < 9; i++) {
    addCardOwner(gameStatus === 1 ? 1 : 2);
>>>>>>> master

    if (i !== 0) {
      addCardOwner(gameStatus === 1 ? 2 : 1);
    }
  }

  addCardOwner(3);
  const game = {
    token,
    boardMap,
    scoreBoard: {
<<<<<<< HEAD
      red: gameStatus === 2 ? 9 : 8,
      blue: gameStatus === 1 ? 9 : 8,
      gameStatus,
      green: green ? 7 : null
=======
      blue: gameStatus === 1 ? 9 : 8,
      red: gameStatus === 2 ? 9 : 8,
      gameStatus: gameStatus === 1 ? 1 : 2
>>>>>>> master
    },
    players: {
      blue: [],
      red: []
    }
  };

  try {
    await req.db.collection('games').insertOne(game);
    res.json(token);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error adding new game: ${err}`);
  }
}); // Update game

handler.put(async (req, res) => {
  const {
    x,
    y,
    token
  } = req.body;

  try {
    const {
      boardMap,
      scoreBoard
    } = await req.db.collection('games').findOne({
      token
    });
    boardMap[x][y].isRevealed = true;
    const {
      team
    } = boardMap[x][y];
    const {
      gameStatus
    } = scoreBoard;

    if (gameStatus < 3) {
      if (team === 3) {
        scoreBoard.gameStatus = gameStatus === 1 ? 4 : 3;
      } else {
        if (team !== gameStatus) {
          scoreBoard.gameStatus = gameStatus === 1 ? 2 : 1;
        }

        if (team === 1) {
          scoreBoard.red -= 1;

          if (scoreBoard.red === 0) {
            scoreBoard.gameStatus = 3;
          }
        }

        if (team === 2) {
          scoreBoard.blue -= 1;

          if (scoreBoard.blue === 0) {
            scoreBoard.gameStatus = 4;
          }
        }
      }
    }

    if (gameStatus === 5) {
      if (team === 3) {
        scoreBoard.gameStatus = 7;
      }

      if (team === 4) {
        scoreBoard.green -= 1;

        if (scoreBoard.green === 0) {
          scoreBoard.gameStatus = 6;
        }
      }
    }

    await req.db.collection('games').findOneAndUpdate({
      token
    }, {
      $set: {
        boardMap,
        scoreBoard
      }
    }, {
      returnOriginal: false
    });
    res.send(200);
  } catch (err) {
    res.status(500).send();
    throw new Error(`Error on guess: ${err}`);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./words.json":
/*!********************!*\
  !*** ./words.json ***!
  \********************/
/*! exports provided: list, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"list\":[\"Hollywood\",\"Screen\",\"Play\",\"Marble\",\"Dinosaur\",\"Cat\",\"Pitch\",\"Bond\",\"Greece\",\"Deck\",\"Spike\",\"Center\",\"Vacuum\",\"Unicorn\",\"Undertaker\",\"Sock\",\"Loch Ness\",\"Horse\",\"Berlin\",\"Platypus\",\"Port\",\"Chest\",\"Box\",\"Compound\",\"Ship\",\"Watch\",\"Space\",\"Flute\",\"Tower\",\"Death\",\"Foot\",\"Torch\",\"Arm\",\"Figure\",\"Mine\",\"Suit\",\"Crane\",\"Beijing\",\"Mass\",\"Microscope\",\"Engine\",\"China\",\"Straw\",\"Pants\",\"Europe\",\"Boot\",\"Princess\",\"Link\",\"Luck\",\"Olive\",\"Palm\",\"Teacher\",\"Thumb\",\"Octopus\",\"Hood\",\"Tie\",\"Doctor\",\"Wake\",\"Cricket\",\"Millionaire\",\"Spring\",\"Match\",\"Diamond\",\"Centaur\",\"March\",\"Roulette\",\"Dog\",\"Cross\",\"Wave\",\"Duck\",\"Wind\",\"Spot\",\"Skyscraper\",\"Paper\",\"Apple\",\"Oil\",\"Cook\",\"Fly\",\"Cast\",\"Bear\",\"Pin\",\"Thief\",\"Trunk\",\"America\",\"Novel\",\"Cell\",\"Bow\",\"Model\",\"Knife\",\"Knight\",\"Tube\",\"Block\",\"Comic\",\"Fish\",\"Bridge\",\"Moon\",\"Part\",\"Aztec\",\"Smuggler\",\"Train\",\"Embassy\",\"Pupil\",\"Scuba Diver\",\"Ice\",\"Tap\",\"Code\",\"Shoe\",\"Server\",\"Club\",\"Row\",\"Pyramid\",\"Bug\",\"Penguin\",\"Pound\",\"Himalayas\",\"Czech\",\"Rome\",\"Eye\",\"Board\",\"Bed\",\"Tablet\",\"Australia\",\"Green\",\"Egypt\",\"Line\",\"Lawyer\",\"Witch\",\"Parachute\",\"Crash\",\"Gold\",\"Note\",\"Lion\",\"Plastic\",\"Web\",\"Ambulance\",\"Hospital\",\"Spell\",\"Lock\",\"Water\",\"London\",\"Casino\",\"Cycle\",\"Bar\",\"Cliff\",\"Round\",\"Bomb\",\"Giant\",\"Hand\",\"Ninja\",\"Rose\",\"Date\",\"Stream\",\"Missile\",\"Scale\",\"Band\",\"Angel\",\"Press\",\"Berry\",\"Card\",\"Check\",\"Draft\",\"Head\",\"Lap\",\"Orange\",\"Ice Cream\",\"Film\",\"Washer\",\"Pool\",\"Shark\",\"Van\",\"String\",\"Calf\",\"Hawk\",\"Eagle\",\"Needle\",\"Forest\",\"Dragon\",\"Key\",\"Belt\",\"Cap\",\"Lemon\",\"Nurse\",\"Drop\",\"Track\",\"Bank\",\"Germany\",\"Worm\",\"Ray\",\"Capital\",\"Strike\",\"War\",\"Concert\",\"Honey\",\"Canada\",\"Buck\",\"Snowman\",\"Beat\",\"Jam\",\"Copper\",\"Beach\",\"Well\",\"Fair\",\"Tooth\",\"Staff\",\"Bill\",\"Shot\",\"King\",\"Pan\",\"Square\",\"Buffalo\",\"Scientist\",\"Chick\",\"Atlantis\",\"Spy\",\"Mail\",\"Nut\",\"Log\",\"Pirate\",\"Face\",\"Stick\",\"Disease\",\"Yard\",\"Mount\",\"Slug\",\"Dice\",\"Lead\",\"Hook\",\"Carrot\",\"Poison\",\"Stock\",\"New York\",\"State\",\"Bermuda\",\"Park\",\"Turkey\",\"Chocolate\",\"Trip\",\"Racket\",\"Bat\",\"Jet\",\"Shakespeare\",\"Bolt\",\"Switch\",\"Wall\",\"Soul\",\"Ghost\",\"Time\",\"Dance\",\"Amazon\",\"Grace\",\"Moscow\",\"Pumpkin\",\"Antarctica\",\"Whip\",\"Heart\",\"Table\",\"Ball\",\"Fighter\",\"Cold\",\"Day\",\"Court\",\"Iron\",\"Whale\",\"Shadow\",\"Contract\",\"Mercury\",\"Conductor\",\"Seal\",\"Car\",\"Ring\",\"Kid\",\"Piano\",\"Laser\",\"Sound\",\"Pole\",\"Superhero\",\"Revolution\",\"Pit\",\"Gas\",\"Glass\",\"Washington\",\"Bark\",\"Snow\",\"Ivory\",\"Pipe\",\"Cover\",\"Degree\",\"Tokyo\",\"Church\",\"Pie\",\"Point\",\"France\",\"Mammoth\",\"Cotton\",\"Robin\",\"Net\",\"Bugle\",\"Maple\",\"England\",\"Field\",\"Robot\",\"Plot\",\"Africa\",\"Tag\",\"Mouth\",\"Kiwi\",\"Mole\",\"School\",\"Sink\",\"Pistol\",\"Opera\",\"Mint\",\"Root\",\"Sub\",\"Crown\",\"Back\",\"Plane\",\"Mexico\",\"Cloak\",\"Circle\",\"Slip\",\"Limousine\",\"Pass\",\"Theater\",\"Plate\",\"Satellite\",\"Ketchup\",\"Hotel\",\"Tail\",\"Tick\",\"Ground\",\"Police\",\"Dwarf\",\"Fan\",\"Dress\",\"Saturn\",\"Grass\",\"Brush\",\"Chair\",\"Rock\",\"Pilot\",\"Telescope\",\"File\",\"Lab\",\"India\",\"Ruler\",\"Nail\",\"Swing\",\"Olympus\",\"Change\",\"Drill\",\"Glove\",\"Paste\",\"Fall\",\"Fire\",\"Spider\",\"Spine\",\"Soldier\",\"Horn\",\"Queen\",\"Ham\",\"Litter\",\"Life\",\"Temple\",\"Rabbit\",\"Button\",\"Game\",\"Star\",\"Jupiter\",\"Vet\",\"Night\",\"Air\",\"Battery\",\"Genius\",\"Shop\",\"Bottle\",\"Stadium\",\"Alien\",\"Light\",\"Triangle\",\"Bell\",\"Leprechaun\",\"Pheonix\",\"Force\",\"Boom\",\"Fork\",\"Alps\",\"Post\",\"Fence\",\"Kangaroo\",\"Mouse\",\"Mug\",\"Horseshoe\",\"Scorpion\",\"Agent\",\"Helicopter\",\"Hole\",\"Organ\",\"Jack\",\"Charge\"]}");

/***/ }),

<<<<<<< HEAD
/***/ 5:
=======
/***/ 6:
>>>>>>> master
/*!**********************************!*\
  !*** multi ./pages/api/games.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jakedouglas 1/development/nextJs/cn/pages/api/games.js */"./pages/api/games.js");


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "random-words":
/*!*******************************!*\
  !*** external "random-words" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("random-words");

/***/ })

/******/ });
//# sourceMappingURL=games.js.map