import { Editor, QueryFunc } from 'slate';
import { RemoveEditorOnFirstParamIfNeed } from './typings.utils';

export type Query<Q extends (...args: any[]) => any> = RemoveEditorOnFirstParamIfNeed<Q, ReturnType<Q>>;

export function hasQuery(editor: Editor, queryName: string) {
  return queryName in editor && typeof (editor as any)[queryName] === 'function';
}

export function getQuery<Q extends (...args: any[]) => any>(editor: Editor, query: string | QueryFunc): Query<Q> {
  if (typeof query === 'string' && !hasQuery(editor, query)) {
    throw new Error(`Query ${query} is not registered.`);
  }

  return (...args) => editor.query(query, ...args);
}
