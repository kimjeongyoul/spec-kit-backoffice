# ADR-001: Deployment Architecture (Nginx as Reverse Proxy)

## Status
Accepted

## Context
프런트엔드(Next.js)와 백엔드(Spring Boot)가 분리된 환경에서 보안, 정적 파일 최적화, 그리고 SSL 관리를 효율적으로 수행해야 한다. 특히 운영 환경에서 Node.js 서버를 직접 노출하는 것은 보안상 위험하며, 프런트엔드 에러 로그 수집 및 정적 자원 서빙 효율화가 필요하다.

## Decision
시스템의 최전방에 **Nginx**를 Reverse Proxy 및 정적 웹 서버로 배치한다.

1. **Gatekeeping**: 모든 외부 요청은 Nginx를 거쳐야 하며, 내부 서비스(Next.js, Spring Boot)는 직접 노출되지 않는다.
2. **Path Routing**:
    - `/api/` 경로는 Spring Boot 백엔드로 프록싱한다.
    - `/_next/static/` 및 `public/` 자원은 Nginx가 직접 서빙하여 Node.js 부하를 줄인다.
3. **Security**: Nginx에서 SSL Termination, HSTS, Security Headers 설정을 전담한다.
4. **Standalone Next.js**: Next.js는 `output: 'standalone'` 모드로 빌드되어 최소한의 Node.js 런타임으로 실행된다.

## Consequences
- **Pros**: 보안 강화, CORS 설정 단순화, 정적 파일 서빙 성능 향상, 단일 도메인 운영 가능.
- **Cons**: Nginx 설정 및 Docker Compose 구성의 복잡도 약간 증가.
