
npm run dev

yarn dev

---
2022/12/22 이후 작성
---
마지막 마감 커밋은 [lastdeadline-commit]<https://github.com/mudokja/clonemo/tree/lastdeadline-commit> 입니다.

해당 커밋에서 사용된 주요 라이브러리와 버전은
next: 13.0.8-canary.0
@chakra-ui/react: ^2.4.3
prisma: ^4.8.0
react-hook-form: ^7.41.0
typescript: 4.8.4
pm2: 5.2.2
입니다.

빌드되는 nextjs src 폴더의 구조는 아래와 같습니다 ~~취소선~~ 쳐진 파일은 구현된 기능이 없는 파일입니다.
*기울어진* 파일은 단순 텍스트만 출력합니다.

├─app   
│  │  HomePage.tsx **메인페이지**  
│  │  layout.tsx **전역레이아웃**  
│  │  page.tsx    
│  ├─topic  
│  │  │  *page.tsx*     
│  │  └─post  
│  │          page.tsx          
│  └─user  
│      │  *page.tsx*    
│      └─[userid]  
│              page.tsx         
├─components  
│  │  ~~BottomFooter.tsx~~  
│  │  ColorModeButton.tsx **다크모드 전환**  
│  │  ~~GridFeed.tsx~~  
│  │  NavSide.tsx **메인페이지 사이드바**  
│  │  PostForm.tsx **글 작성양식**  
│  │  ~~PostList.tsx~~  
│  │  ~~TextSearch.tsx~~  
│  │  TopHeader.tsx  **메인페이지 상단**  
│  │  ~~TopicList.tsx~~    
│  └─context  
│          ThemeProvider.tsx  
│          ~~userContext.tsx~~       
├─pages  
│  └─api  
│      └─v1  
│          ├─auth  
│          ├─post  
│          │      page.ts       
│          └─user  
│                  [userid].ts       
└─styles  
    defaultDivider.ts  
    theme.ts  **전역테마**
  
