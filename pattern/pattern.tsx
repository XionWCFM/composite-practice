import { match, P } from 'ts-pattern';
import Image from 'next/image';

export type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

export type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };

export const resultReducer = (item: Result) =>
  match<Result, JSX.Element>(item)
    .with({ type: 'ok', data: { type: 'img' } }, (state) => {
      return (
        <Image
          src={state.data.src}
          alt="테스트입니다."
          width={10}
          height={10}
        />
      );
    })
    .with({ type: 'ok', data: { type: 'text' } }, (state) => {
      return <span>{state.data.content}</span>;
    })
    .with({ type: 'error' }, (state) => {
      return <span>{state.error.message}</span>;
    })
    .otherwise((state) => {
      return <span>기본으로 보여줄 텍스트</span>;
    });
