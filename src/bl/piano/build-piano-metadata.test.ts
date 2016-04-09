import * as assert from 'assert';

import buildPianoMetadata from './build-piano-metadata';
import {getNoteForIteratorPositon} from './build-piano-metadata';

describe('#buildPianoMetadata', () => {

  it('should return 12 notes for 1 octaves', () => {
    assert.strictEqual(buildPianoMetadata(1, 2).size, 12);
  });

  it('should return 24 notes for 2 octaves', () => {
    assert.strictEqual(buildPianoMetadata(2, 2).size, 24);
  });

  describe('.getNoteForIteratorPosition', () => {

    it('should return c if position is 1', () => {
      assert.strictEqual(getNoteForIteratorPositon(1), '1c'); 
    });
    
    it('should return c if position is 13', () => {
      assert.strictEqual(getNoteForIteratorPositon(13), '2c'); 
    });

    it('should return b if position is 24', () => {
      assert.strictEqual(getNoteForIteratorPositon(24), '2b'); 
    });

    it('should return c# if position is 26', () => {
      assert.strictEqual(getNoteForIteratorPositon(26), '3c#'); 
    });

  });
  
});


