# ADR-002: Security and Caching Strategy

## Status
Accepted

## Context
운영 환경에서 보안(XSS 방지)과 사용자 경험(캐시 문제 해결)은 상충될 때가 많다. 특히 서브도메인 환경에서의 인증 공유와 사용자가 '강력한 새로고침'을 하지 않아도 최신 소스를 유지할 수 있는 메커니즘이 필요하다.

## Decision

### 1. Authentication (Cross-Subdomain Cookie)
- **Mechanism**: JWT를 전송할 때 `HttpOnly`, `Secure` 쿠키를 사용한다.
- **Domain Scope**: 쿠키의 `domain` 속성을 `.example.com`으로 설정하여 `app.example.com`과 `api.example.com` 간에 인증 정보를 공유한다.
- **SameSite Policy**: CSRF 방어를 위해 `SameSite=Lax`를 기본값으로 사용한다.

### 2. Caching & Cache Busting (Nginx Level)
- **Hashed Assets (`/_next/static/**`)**: 파일명에 고유 해시가 포함되므로 `Cache-Control: public, max-age=31536000, immutable`을 설정하여 브라우저와 CDN 캐시 효율을 극대화한다.
- **Non-Hashed Assets (`/public/**`, `index.html`)**: `Cache-Control: no-cache, must-revalidate`를 설정하여 파일 변경 여부를 매번 서버에 확인(ETag)하도록 강제한다. 이를 통해 사용자가 수동으로 캐시를 삭제할 필요가 없게 만든다.

## Consequences
- **Pros**: XSS 공격 원천 차단, 네트워크 트래픽 최적화, 버전 업데이트 시 사용자 환경 즉시 반영.
- **Cons**: 백엔드(Spring)와 Nginx의 정교한 쿠키 및 헤더 설정이 필요함.
