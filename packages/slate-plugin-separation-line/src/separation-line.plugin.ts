import { PickPluginAndRequired } from '@artibox/slate-core';
import { CommonBlockRenderer } from '@artibox/slate-renderer';
import { SEPARATION_LINE_TYPE, SEPARATION_LINE_COMPONENT } from './separation-line.constants';
import { SeparationLineCommands } from './separation-line.commands';
import { SeparationLineSchema } from './separation-line.schema';

export interface SeparationLinePluginConfig {
  type?: string;
}

export interface SeparationLinePlugin extends PickPluginAndRequired<'renderBlock' | 'schema'> {
  commands: SeparationLineCommands;
}

export function SeparationLinePlugin(config?: SeparationLinePluginConfig): SeparationLinePlugin {
  const type = config?.type ?? SEPARATION_LINE_TYPE;
  const commands = SeparationLineCommands(type);
  const renderer = CommonBlockRenderer({ type, component: SEPARATION_LINE_COMPONENT, isVoid: true });
  const schema = SeparationLineSchema(type);

  return {
    commands,
    renderBlock: renderer.renderBlock,
    schema
  };
}
