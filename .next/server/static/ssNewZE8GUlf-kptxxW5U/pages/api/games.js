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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FeR3");


/***/ }),

/***/ "Cf+H":
/***/ (function(module, exports) {

module.exports = require("random-words");

/***/ }),

/***/ "FeR3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__("Zb5a");
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);

// EXTERNAL MODULE: external "random-words"
var external_random_words_ = __webpack_require__("Cf+H");
var external_random_words_default = /*#__PURE__*/__webpack_require__.n(external_random_words_);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// CONCATENATED MODULE: ./database.js


const client = new external_mongodb_["MongoClient"]('mongodb+srv://barstool:T0qLffUuHsNiDFaX@cluster0-r3emj.mongodb.net/test?retryWrites=true&w=majority', {
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

const middleware = external_next_connect_default()();
middleware.use(database);
/* harmony default export */ var database_0 = (middleware);
// EXTERNAL MODULE: ./words.json
var words = __webpack_require__("NGEB");

// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__("xPX6");

// CONCATENATED MODULE: ./pages/api/games.js





const handler = external_next_connect_default()();
handler.use(database_0);
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
});
handler.post(async (req, res) => {
  const {
    token,
    officialWords,
    green
  } = req.body;

  const randomInt = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
  };

  const doNotInclude = {};

  const getWord = ({
    isOfficial
  }) => {
    let word = isOfficial ? words.list[randomInt(0, words.list.length - 1)] : external_random_words_default()();

    while (doNotInclude[word]) {
      word = isOfficial ? words.list[randomInt(0, words.list.length - 1)] : external_random_words_default()();
    }

    doNotInclude[word] = true;
    return word;
  };

  const firstPlayer = req.query.firstPlayer || Math.random() >= 0.5 ? 1 : 2;
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

  if (!green) {
    for (let i = 0; i < 9; i++) {
      addCardOwner(firstPlayer === 1 ? 1 : 2);

      if (i !== 0) {
        addCardOwner(firstPlayer === 1 ? 2 : 1);
      }
    }
  }

  if (green) {
    for (let i = 0; i < 7; i++) {
      addCardOwner(4);
    }
  }

  addCardOwner(3);

  if (green) {
    addCardOwner(3);
    addCardOwner(3);
  }

  const game = {
    token,
    boardMap,
    scoreBoard: {
      blue: firstPlayer === 1 ? 9 : 8,
      red: firstPlayer === 2 ? 9 : 8,
      gameStatus: firstPlayer === 1 ? 1 : 2,
      green
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
});
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
/* harmony default export */ var games = __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "NGEB":
/***/ (function(module) {

module.exports = JSON.parse("{\"list\":[\"Hollywood\",\"Screen\",\"Play\",\"Marble\",\"Dinosaur\",\"Cat\",\"Pitch\",\"Bond\",\"Greece\",\"Deck\",\"Spike\",\"Center\",\"Vacuum\",\"Unicorn\",\"Undertaker\",\"Sock\",\"Loch Ness\",\"Horse\",\"Berlin\",\"Platypus\",\"Port\",\"Chest\",\"Box\",\"Compound\",\"Ship\",\"Watch\",\"Space\",\"Flute\",\"Tower\",\"Death\",\"Foot\",\"Torch\",\"Arm\",\"Figure\",\"Mine\",\"Suit\",\"Crane\",\"Beijing\",\"Mass\",\"Microscope\",\"Engine\",\"China\",\"Straw\",\"Pants\",\"Europe\",\"Boot\",\"Princess\",\"Link\",\"Luck\",\"Olive\",\"Palm\",\"Teacher\",\"Thumb\",\"Octopus\",\"Hood\",\"Tie\",\"Doctor\",\"Wake\",\"Cricket\",\"Millionaire\",\"Spring\",\"Match\",\"Diamond\",\"Centaur\",\"March\",\"Roulette\",\"Dog\",\"Cross\",\"Wave\",\"Duck\",\"Wind\",\"Spot\",\"Skyscraper\",\"Paper\",\"Apple\",\"Oil\",\"Cook\",\"Fly\",\"Cast\",\"Bear\",\"Pin\",\"Thief\",\"Trunk\",\"America\",\"Novel\",\"Cell\",\"Bow\",\"Model\",\"Knife\",\"Knight\",\"Tube\",\"Block\",\"Comic\",\"Fish\",\"Bridge\",\"Moon\",\"Part\",\"Aztec\",\"Smuggler\",\"Train\",\"Embassy\",\"Pupil\",\"Scuba Diver\",\"Ice\",\"Tap\",\"Code\",\"Shoe\",\"Server\",\"Club\",\"Row\",\"Pyramid\",\"Bug\",\"Penguin\",\"Pound\",\"Himalayas\",\"Czech\",\"Rome\",\"Eye\",\"Board\",\"Bed\",\"Tablet\",\"Australia\",\"Green\",\"Egypt\",\"Line\",\"Lawyer\",\"Witch\",\"Parachute\",\"Crash\",\"Gold\",\"Note\",\"Lion\",\"Plastic\",\"Web\",\"Ambulance\",\"Hospital\",\"Spell\",\"Lock\",\"Water\",\"London\",\"Casino\",\"Cycle\",\"Bar\",\"Cliff\",\"Round\",\"Bomb\",\"Giant\",\"Hand\",\"Ninja\",\"Rose\",\"Date\",\"Stream\",\"Missile\",\"Scale\",\"Band\",\"Angel\",\"Press\",\"Berry\",\"Card\",\"Check\",\"Draft\",\"Head\",\"Lap\",\"Orange\",\"Ice Cream\",\"Film\",\"Washer\",\"Pool\",\"Shark\",\"Van\",\"String\",\"Calf\",\"Hawk\",\"Eagle\",\"Needle\",\"Forest\",\"Dragon\",\"Key\",\"Belt\",\"Cap\",\"Lemon\",\"Nurse\",\"Drop\",\"Track\",\"Bank\",\"Germany\",\"Worm\",\"Ray\",\"Capital\",\"Strike\",\"War\",\"Concert\",\"Honey\",\"Canada\",\"Buck\",\"Snowman\",\"Beat\",\"Jam\",\"Copper\",\"Beach\",\"Well\",\"Fair\",\"Tooth\",\"Staff\",\"Bill\",\"Shot\",\"King\",\"Pan\",\"Square\",\"Buffalo\",\"Scientist\",\"Chick\",\"Atlantis\",\"Spy\",\"Mail\",\"Nut\",\"Log\",\"Pirate\",\"Face\",\"Stick\",\"Disease\",\"Yard\",\"Mount\",\"Slug\",\"Dice\",\"Lead\",\"Hook\",\"Carrot\",\"Poison\",\"Stock\",\"New York\",\"State\",\"Bermuda\",\"Park\",\"Turkey\",\"Chocolate\",\"Trip\",\"Racket\",\"Bat\",\"Jet\",\"Shakespeare\",\"Bolt\",\"Switch\",\"Wall\",\"Soul\",\"Ghost\",\"Time\",\"Dance\",\"Amazon\",\"Grace\",\"Moscow\",\"Pumpkin\",\"Antarctica\",\"Whip\",\"Heart\",\"Table\",\"Ball\",\"Fighter\",\"Cold\",\"Day\",\"Court\",\"Iron\",\"Whale\",\"Shadow\",\"Contract\",\"Mercury\",\"Conductor\",\"Seal\",\"Car\",\"Ring\",\"Kid\",\"Piano\",\"Laser\",\"Sound\",\"Pole\",\"Superhero\",\"Revolution\",\"Pit\",\"Gas\",\"Glass\",\"Washington\",\"Bark\",\"Snow\",\"Ivory\",\"Pipe\",\"Cover\",\"Degree\",\"Tokyo\",\"Church\",\"Pie\",\"Point\",\"France\",\"Mammoth\",\"Cotton\",\"Robin\",\"Net\",\"Bugle\",\"Maple\",\"England\",\"Field\",\"Robot\",\"Plot\",\"Africa\",\"Tag\",\"Mouth\",\"Kiwi\",\"Mole\",\"School\",\"Sink\",\"Pistol\",\"Opera\",\"Mint\",\"Root\",\"Sub\",\"Crown\",\"Back\",\"Plane\",\"Mexico\",\"Cloak\",\"Circle\",\"Slip\",\"Limousine\",\"Pass\",\"Theater\",\"Plate\",\"Satellite\",\"Ketchup\",\"Hotel\",\"Tail\",\"Tick\",\"Ground\",\"Police\",\"Dwarf\",\"Fan\",\"Dress\",\"Saturn\",\"Grass\",\"Brush\",\"Chair\",\"Rock\",\"Pilot\",\"Telescope\",\"File\",\"Lab\",\"India\",\"Ruler\",\"Nail\",\"Swing\",\"Olympus\",\"Change\",\"Drill\",\"Glove\",\"Paste\",\"Fall\",\"Fire\",\"Spider\",\"Spine\",\"Soldier\",\"Horn\",\"Queen\",\"Ham\",\"Litter\",\"Life\",\"Temple\",\"Rabbit\",\"Button\",\"Game\",\"Star\",\"Jupiter\",\"Vet\",\"Night\",\"Air\",\"Battery\",\"Genius\",\"Shop\",\"Bottle\",\"Stadium\",\"Alien\",\"Light\",\"Triangle\",\"Bell\",\"Leprechaun\",\"Pheonix\",\"Force\",\"Boom\",\"Fork\",\"Alps\",\"Post\",\"Fence\",\"Kangaroo\",\"Mouse\",\"Mug\",\"Horseshoe\",\"Scorpion\",\"Agent\",\"Helicopter\",\"Hole\",\"Organ\",\"Jack\",\"Charge\"]}");

/***/ }),

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "xPX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameStatusToString; });
const gameStatusToString = {
  1: "Red's turn",
  2: "Blue's turn",
  3: 'Red Wins',
  4: 'Blue Wins'
};

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });