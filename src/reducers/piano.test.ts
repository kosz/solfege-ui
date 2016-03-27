import * as assert from 'assert';
import fireAction from '../utils/fire-action';
import piano from './piano';
import { PLAY, STOP } from './piano';
import { List } from 'immutable';

let state = piano();

describe('piano', () => {
  describe('inital state', () => {
    it('should be a List', () => {
      assert.strictEqual(List.isList(state), true);
    });
  });

  describe('on PLAY', () => {
    it('start playing', () => {
      const previousValue = state.count();
      state = fireAction(piano, state, PLAY, { id: 'c' });
      assert.strictEqual(state.count(), previousValue + 1);
    });
  });

  describe('on STOP', () => {
    it('stop playing', () => {
      const previousValue = state.count();
      state = fireAction(piano, state, STOP, { id: 'c' });
      assert.strictEqual(state.count(), previousValue - 1);
    });
  });
});
