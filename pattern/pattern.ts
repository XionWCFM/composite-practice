import { match, P } from 'ts-pattern';

export type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

export type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };

export const resultReducer = (item: Result) => match(item);
