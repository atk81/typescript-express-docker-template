import {assert} from 'chai';
import {checkTest} from '../src/index';

describe("Checking index", ()=>{
    it("should return test", ()=>{
        assert.equal(checkTest(), 'test');
    });
    it("Add random test", ()=>{
        assert.equal(2+2, 4);
    })
} );