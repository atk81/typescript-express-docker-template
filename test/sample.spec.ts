import {assert} from 'chai';
import {checkTest} from '../src/index';

describe("Checking index", ()=>{
    it("should return test", ()=>{
        assert.equal(checkTest(), 'test');
    });
} );