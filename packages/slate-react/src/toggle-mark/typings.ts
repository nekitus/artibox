import { ToggleMark } from '@artibox/slate-common/toggle-mark';
import { CreateRenderMarkOptions, RenderMarkProps, WithCreateHandlers, WithCreateRenderLeaf } from '../core';

export type RenderToggleMarkProps = RenderMarkProps<boolean>;
export type RenderToggleMark = (props: RenderToggleMarkProps) => JSX.Element;

export interface ReactToggleMarkCreateHandlersOptions {
  /**
   * The hotkey to toggle the mark.
   */
  hotkey?: string;
}

export type ReactToggleMarkCreateRenderLeafOptions = Partial<Omit<CreateRenderMarkOptions<boolean>, 'type'>>;

export interface ReactToggleMark
  extends ToggleMark,
    WithCreateHandlers<[ReactToggleMarkCreateHandlersOptions?]>,
    WithCreateRenderLeaf<[ReactToggleMarkCreateRenderLeafOptions?]> {}
