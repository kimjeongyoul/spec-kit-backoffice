# Architecture Specification: Spec-Kit Backoffice (Decoupled Frontend)

## 1. System Overview
본 프로젝트는 기존 **Spring Boot Enterprise Admin Blueprint**를 백엔드로 활용하며, **Next.js 14**를 통해 현대적인 사용자 경험을 제공하는 분리형(Decoupled) 아키텍처를 채택한다.

## 2. Technical Stack & Rationale
- **Frontend**: Next.js 14 (App Router) - 생산성 높은 UI 및 라우팅 환경.
- **Backend**: Spring Boot (Blueprint) - 엔터프라이즈급 안정성, 보안(Spring Security), JPA 기반 데이터 처리.
- **Communication**: REST API + JWT - 표준화된 통신 규격 및 인증 프로토콜.
- **Data Fetching**: TanStack Query (React Query) - 비동기 데이터 캐싱 및 상태 관리 최적화.
- **State (Global UI)**: Zustand - 경량화된 클라이언트 상태 관리.
- **Styling**: Vanilla CSS (CSS Modules) - 디자인 시스템의 유연성 확보.

## 3. Navigation & Routing Strategy
- **App Router Structure**: 도메인 기반 계층 구조 및 Route Groups(`(admin)`, `(auth)`) 활용.
- **Middleware RBAC**: 서버 사이드 미들웨어 단계에서 권한 검증 및 리다이렉션 수행.
- **URL as State**: 리스트 필터링, 검색, 페이징 정보는 반드시 URL Search Params에 유지한다.

## 4. Communication Strategy
- **API Interface**: Swagger/OpenAPI 명세를 기반으로 프런트엔드 타입을 자동 생성하여 동기화 비용을 최소화한다.
- **Authentication**: JWT 기반 HttpOnly Cookie 세션 관리를 수행하며, 서브도메인 간 공유 설정을 적용한다.
- **CORS Management**: Nginx Proxy 또는 백엔드 CORS 설정을 통해 보안 통신을 보장한다.

## 5. Key Decisions (ADR)
- **ADR-001: Domain-Driven Frontend Structure**: 백엔드의 도메인 구조를 프런트엔드 `features/` 폴더 구조에 반영하여 일관성을 유지한다.
- **ADR-002: Service Layer Isolation**: API 호출 로직은 반드시 `src/services` 모듈로 분리하여 컴포넌트와 비즈니스 로직을 분리한다.
- **ADR-003: Type-Safe API Integration**: 백엔드 DTO 변경이 프런트엔드 빌드 타임에 감지되도록 엄격한 타입을 적용한다.
