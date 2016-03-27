import * as assert from 'assert';
import buildPianoMetadata from './build-piano-metadata';


describe('#buildPianoMetadata', () => {
  it('should return an Array', () => {
    assert.strictEqual(buildPianoMetadata(2).length, 24);
  });
});
