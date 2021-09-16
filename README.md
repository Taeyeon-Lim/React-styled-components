# styled-component init

### Add styled-component lib

- extension: vscode-styled-components

### Use styled-component

- styled-components 첫 적용: 단순 원 스타일링
- {css} 적용, 내부 'template literals' => 'tagged template literals'로 사용
- Button styling

### Add polished lib

- polished 버튼 스타일링
- Use 'ThemeProvider from styled-component'

- Add button color(default: blue, gray, pink)
- color ref 리팩토링

- Add button size(default: medium, small, gray)
- size ref 리팩토링

- Add outline, fullwidth 속성

- [ & + &에서 CSS가 덧씌워지는 현상 ]  
   // 문제
  ${props => props.fullWidth && css }에서
  fullWidth의 참/거짓 여부에 상관 없이, css 가 실행됨(모든 버튼에 적용)
  // 해결
  styled-components 라이브러리의 버전 다운그레이드(=> 5.1.1)
  // 실행
  yarn remove styled-components
  yarn add styled-components@5.1.1
  // 기타  
  현재, 5.3.1 버전까지도 같은 오류(?)가 있음

- remove all button
- Add button, dialog(modal, button skin)
