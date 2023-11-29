import { match, P } from 'ts-pattern';

export type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

export type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };

export const resultReducer = (item: Result) =>
  match<Result, string>(item)
    .with({ type: 'ok', data: { type: 'img' } }, (state) => {
      return '이거이미지네요';
    })
    .with({ type: 'ok', data: { type: 'text' } }, (state) => {
      return '이거텍스트네요';
    })
    .with({ type: 'error' }, (state) => {
      return '이거에러네요';
    })
    .otherwise((state) => {
      return '이거나머지네요';
    });

const ifFunction = (item: { type: 'ok' | 'error' }) => {
  if (item.type === 'ok') {
    return `${item.type}오케이네요`;
  }
  if (item.type === 'error') {
    return `${item.type}에러네요`;
  }
  return '이거나머지네요';
};

const patternFunction = (item: { type: 'ok' | 'error' }) =>
  match(item)
    .with({ type: 'ok' }, (state) => {
      return `${state.type}오케이네요`;
    })
    .with({ type: 'error' }, (state) => {
      return `${state.type}에러네요`;
    })
    .otherwise(() => {
      return '이거나머지네요';
    });
