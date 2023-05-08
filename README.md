# UkkoModal 모달 라이브러리

매우 간단한 모달을 구현할 수 있는 라이브러리입니다. 아래에서 올라오는 모달입니다. 내용물은 직접 채우셔야합니다.

## 설치 방법

`npm install ukko-modal`

## 사용 방법

### UkkoModal 컴포넌트 불러오기

`import { Modal } from 'ukko-modal';`

### UkkoModal 사용하기

```javascript
<Modal trigger={<button>모달 열기</button>} isShow={true}>
  <h2>제목</h2>
  <p>내용</p>
</Modal>
```

- ukko modal은 `document.body`아래에 모달이 생성됩니다.
- backdrop을 클릭 시 모달이 닫힙니다.
- 다른 요소에 해당 modal 닫으려는 핸들러를 추가하고 싶으면 모달 내부 요소에 `data-modal="close"` 속성을 추가해주세요. 해당 요소를 누르면 모달이 닫힐 겁니다.

## Props

- trigger: 모달을 열기 위한 요소를 설정할 수 있습니다. 없어도 됩니다.
- isShow: 렌더링 시에 바로 모달을 띄울 것인지 정할 수 있습니다. `true` 일 경우 렌더링 시에 모달이 띄워집니다. 기본값은 `false`입니다.
- children: 모달 내부에 들어갈 컨텐츠입니다. 없어도 되지만 모달의 내용을 채워야 의미가 있을 겁니다.

### Props 예시

```javascript
import { Modal } from 'ukko-modal';

function App() {
  return (
    <div>
      <MyModal trigger={<button>모달이 열립니다.</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </MyModal>
    </div>
  );
}

export default App;
```
