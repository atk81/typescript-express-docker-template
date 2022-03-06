"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const sinon_1 = __importDefault(require("sinon"));
const logger_1 = require("../src/logger");
describe("/logger", () => {
    (0, mocha_1.afterEach)(() => {
        sinon_1.default.restore();
    });
    it("should log info", () => {
        const stub = sinon_1.default.stub(logger_1.logger, "info");
        logger_1.logger.info("logging info");
        (0, chai_1.expect)(stub.calledOnce).to.be.true;
    });
});
//# sourceMappingURL=logger.spec.js.map