"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./Client");
const Client_1 = tslib_1.__importDefault(require("./Client"));
const Config_1 = require("./Config");
const client = new Client_1.default({ token: Config_1.token, ownerIDs: Config_1.ownerIDs });
client.start();
//# sourceMappingURL=index.js.map