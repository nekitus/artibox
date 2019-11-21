import { Block } from 'slate';
import { HEADING_LEVELS, HEADING_DATA_KEY_LEVEL } from './heading.constants';

export function getHeadingLevelFromBlock(block?: Block | null): HEADING_LEVELS | undefined {
  return block?.data.get(HEADING_DATA_KEY_LEVEL);
}

export function createHeadingBlock(type: string, level: HEADING_LEVELS): Block {
  return Block.fromJSON({
    type,
    data: { [HEADING_DATA_KEY_LEVEL]: level }
  });
}
