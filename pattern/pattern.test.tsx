import { Result, resultReducer } from './pattern';

describe('pattern 라이브러리를 학습합니다.', () => {
  it('데이터 타입이 텍스트인 경우를 테스트해봅시다.', () => {
    const result: Result = {
      type: 'ok',
      data: {
        type: 'text',
        content: '안녕하세요',
      },
    };
    const data = resultReducer(result);
    expect(data).toBe('이거텍스트네요');
  });

  it('데이터 타입이 이미지인 경우를 테스트해봅시다.', () => {
    const result: Result = {
      type: 'ok',
      data: {
        type: 'img',
        src: '',
      },
    };
    const data = resultReducer(result);
    expect(data).toBe('이거이미지네요');
  });
  it('타입이 에러인 경우를 테스트해봅시다.', () => {
    const result: Result = {
      type: 'error',
      error: new Error('error'),
    };
    const data = resultReducer(result);
    expect(data).toBe('이거에러네요');
  });
});
