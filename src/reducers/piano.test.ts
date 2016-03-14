import * as assert from 'assert';
import fireAction from '../utils/fire-action';
import piano from './piano';
import { PLAY, STOP } from '../actions/piano';
import { List } from 'immutable';

let state = piano();

describe('piano reducer', () => {
  describe('inital state', () => {
    it('should be a List', () => {
      assert.strictEqual(List.isList(state), true);
    });
  });

  describe('on PLAY', () => {
    it('should add the played note to list', () => {
      const previousValue = state.size;
      state = fireAction(piano, state, PLAY, {note: 'C'});
      assert.strictEqual(state.size, previousValue + 1);
    });
  });

  describe('on STOP', () => {
    it('should remove specific played note from list', () => {
      const previousValue = state.size;
      state = fireAction(piano, state, STOP, {note: 'C'});
      assert.strictEqual(false, state.includes({note: 'C'}));
    });
  });
});
