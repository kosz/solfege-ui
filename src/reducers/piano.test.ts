import * as assert from 'assert';
import fireAction from '../utils/fire-action';
import piano from './piano';
import { PLAY, 
         STOP,
         BUILD_PIANO } from './piano';
import { Map } from 'immutable';

let state = piano();

describe('piano', () => {
  describe('inital state', () => {
    it('should be a List', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on BULD_PIANO', () => {
    it('sets the piano property', () => {
      let p = {};
      state = fireAction(piano, state, BUILD_PIANO, { piano: p });
      assert.strictEqual(state.get('piano'), p);
    });
  });

  describe('on PLAY', () => {
    it('start playing', () => {
      const previousValue = state.count();
      state = fireAction(piano, state, PLAY, { id: 'c' });
      //assert.strictEqual(state.count(), previousValue + 1);
    });
  });

  describe('on STOP', () => {
    it('stop playing', () => {
      const previousValue = state.count();
      state = fireAction(piano, state, STOP, { id: 'c' });
      //assert.strictEqual(state.count(), previousValue - 1);
    });
  });
});
