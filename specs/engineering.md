# Engineering Standard Specification

## 🛠 Commit Convention (Spec-Driven)
모든 커밋은 작업의 성격과 대상 명세를 명확히 식별할 수 있어야 합니다.

### Format
`<type>(<scope>): <spec-id> - <description>`

### Types
- **feat**: 새로운 기능 명세 구현
- **spec**: 명세서(Blueprints/Architecture) 작성 및 수정
- **refactor**: 명세 변경 없이 코드 구조 개선
- **fix**: 명세와 불일치하는 버그 수정
- **docs**: 문서 수정

### Example
- `feat(auth): login-spec - implement JWT validation logic`
- `spec(api): payment-blueprint - define refund interface`
- `fix(core): architecture-spec - resolve context freezing logic error`

## 🪵 Logging Standard (Observability)
모든 시스템 구성 요소는 추적 가능하고 구조화된 로그를 생성해야 한다.

### 1. Log Structure (JSON First)
- 모든 서버 로그는 파싱이 용이한 JSON 형식을 지향한다.
- 필수 필드: `timestamp`, `level`, `traceId`, `serviceName`, `message`, `context`.

### 2. Distributed Tracing
- 모든 API 요청은 프런트엔드에서 생성된 `X-Trace-ID`를 포함해야 한다.
- 백엔드는 응답 헤더 및 모든 관련 로그에 해당 ID를 포함하여 요청의 생애 주기를 추적 가능하게 한다.

### 3. Log Levels
- **ERROR**: 즉각적인 조치가 필요한 장애 (Slack 알림 연동 대상).
- **WARN**: 잠재적 위험이나 비정상적이지만 시스템은 운영 가능한 상황.
- **INFO**: 주요 비즈니스 이벤트 (로그인, 명세 수정, 에이전트 작업 완료).
- **DEBUG**: 개발 단계에서 상세 흐름 파악을 위한 정보 (운영 환경 제외).

### 4. Utility Function Standard
1. **Domain-specific Segregation**: `src/shared/utils` 내부에 역할별(Date, Format, Validation 등)로 파일을 분리하여 관리한다.
2. **Pure Function Principle**: 유틸리티는 부수 효과(Side Effect)가 없는 순수 함수로 작성하여 예측 가능성과 테스트 용이성을 확보한다.
3. **Named Exports Only**: Tree-shaking 효율을 극대화하기 위해 모든 유틸리티는 Named Export 방식으로 제공한다.
4. **Standard Library Preference**: 복잡한 로직 구현 전, 표준 브라우저 API 또는 검증된 경량 라이브러리(e.g., `date-fns`) 사용을 우선 검토한다.

### 5. Persistent File Logging (Server-side)
- 모든 서비스 로그는 서버의 로컬 디스크에 물리적 파일로 기록되어야 한다.
- **Log Rotation**: 일 단위로 파일을 분리하고, 30일 이상의 로그는 자동 삭제 처리한다.

### 6. Frontend Error Capture Criteria
운영 환경의 가시성 확보를 위해 다음 3대 영역의 에러를 반드시 캡처하여 서버로 전송한다.
1. **Rendering Errors**: React 컴포넌트 레벨의 런타임 충돌 (Error Boundary 활용).
2. **API Interaction Errors**: 백엔드 통신 실패 및 비정상 응답 (Axios Interceptor 활용).
3. **Global/Async Errors**: 처리되지 않은 Promise 거부 및 윈도우 전역 런타임 에러.

### 7. Log File Segregation
서버 성능 및 가독성을 위해 로그 파일을 분리하여 관리한다.
- `app.log`: 전체 통합 로그 (INFO 이상)
- `error.log`: 시스템 장애 및 비즈니스 에러 전용 (ERROR 이상)
- `access.log`: Nginx/Proxy 레벨의 접속 기록
- `frontend.log`: 브라우저에서 전송된 에러 전용 로그


## 🔐 Cross-Language Secret Mapping
각 언어별 표준 설정 파일과 `.env` 환경 변수를 다음과 같이 매핑하여 보안을 유지한다.
- **Java (Spring)**: `application.yml` 내에 `${ENV_VAR_NAME}` 형식을 사용하고, 실제 값은 `.env`를 통해 주입한다.
- **Node.js**: `process.env.ENV_VAR_NAME` 형식을 사용한다.
- **Python**: `os.getenv("ENV_VAR_NAME")` 또는 `pydantic-settings`를 활용한다.

## 🏛 Abstraction & Design Principle
지속 가능한 코드를 위해 모든 레이어에서 적절한 수준의 추상화를 강제한다.

### 1. Frontend Implementation Rules
1. **Feature-First Structure**: 도메인 종속적인 로직은 `src/features/{domain}` 폴더에 응집시킨다.
2. **Server-Component Default**: 모든 컴포넌트는 기본적으로 Server Component로 작성하며, 클라이언트 전용 로직은 `'use client'` 지시어와 함께 최소 단위로 분리한다.
3. **Layered Service Module**: API 호출 로직은 컴포넌트와 분리하여 `src/services`에 추상화한다. 모든 통신은 `withCredentials: true`를 기본으로 한다.
4. **CSS Module Isolation**: 스타일은 컴포넌트 단위로 격리(Isolation)하며, 전역 변수는 `src/styles/variables.css`에서 관리한다.
5. **Strict Type Sync**: 백엔드 DTO와 프런트엔드 Interface의 일치성을 상시 유지하며, 외부 데이터는 Zod를 통해 런타임 검증을 수행한다.

### 2. Global UX & Stability Rules
1. **Action Protection**: 모든 API 연동 버튼은 `loading` 상태를 지원해야 하며, 처리 중에는 중복 클릭을 방지하기 위해 반드시 비활성화(Disabled) 처리한다.
2. **Idle Session Management**: 유저의 활동이 30분(설정 가능) 이상 없을 경우, 보안을 위해 세션을 종료하고 메인/로그인 페이지로 자동 리다이렉트한다.
3. **Standardized Fallbacks**: 데이터 없음(`Empty`), 에러 발생(`Error`), 권한 없음(`Unauthorized`) 상황에 대해 표준화된 전용 UI 컴포넌트를 사용하며, 모든 에러 폴백에는 "관리자 문의" 또는 "재시도" 버튼을 포함한다.
4. **Toast-First Feedback**: 성공/실패 등의 즉각적인 피드백은 전역 Toast 시스템을 통해 일관되게 제공한다.

### 3. Layered UI (Z-index) Standard
컴포넌트 간 간섭을 방지하기 위해 다음 Z-index 스케일을 준수한다.
- `z-base`: 0
- `z-overlay`: 1000
- `z-modal`: 1100
- `z-toast`: 2000
- `z-tooltip`: 2100



## ✅ Definition of Done (DOD)
- [ ] 작업 내용이 관련 Blueprint 명세와 일치하는가?
- [ ] 실제 빌드 및 컴파일을 수행하여 에러가 없음을 확인했는가?
- [ ] 주요 비즈니스 로직에 대한 유닛 테스트가 작성 및 통과되었는가?
- [ ] 에러 핸들링 및 로그 메시지가 적절하게 포함되었는가?
- [ ] `ai-spec verify` 명령을 통해 추적성이 확인되었는가?
