import { List, ListTypeKey } from '@artibox/slate-common/list';
import { WithCreateHandlers, WithCreateRenderElement, RenderElementProps } from '../core';

export type ReactListCreateRenderElementOptions = {
  [key in ListTypeKey]?: (props: RenderElementProps) => JSX.Element | null | undefined;
};

export type ReactList = List & WithCreateHandlers & WithCreateRenderElement<[ReactListCreateRenderElementOptions?]>;
