import { Result } from './pattern';
import { resultReducer } from './pattern';

describe('pattern 라이브러리를 학습합니다.', () => {
  it('기초적인 리듀서를 테스트해봅시다.', () => {
    const result: Result = {
      type: 'ok',
      data: {
        type: 'text',
        content: '안녕하세요',
      },
    };
    const data = resultReducer(result);
    console.log(data);
  });
});
