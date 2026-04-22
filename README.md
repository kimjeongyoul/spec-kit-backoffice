# ⚡ Spec-Kit Backoffice

> **AI-Driven Enterprise Management System**  
> Spec-Kit은 AI 기반의 엔터프라이즈 명세 및 기술 설계를 통합 관리하는 차세대 백오피스 솔루션입니다.

---

## ✨ Key Features

- **Next-Gen UI/UX**: 글래스모피즘(Glassmorphism)과 다크 테마 기반의 프리미엄 관리자 인터페이스.
- **AI-Driven Insights**: 명세서 자동 분석 및 대시보드 통계 시각화.
- **Domain-Driven Architecture**: 백엔드 도메인과 일치하는 확장성 높은 프런트엔드 구조 (ADR-001).
- **Type-Safe API**: TanStack Query(React Query) 기반의 강력한 상태 관리 및 비동기 통신.
- **High Performance**: Next.js 14 App Router를 활용한 최적화된 로딩 성능.

---

## 🛠 Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5-FF4154?style=flat-square&logo=react-query)
![Vanilla CSS](https://img.shields.io/badge/CSS--Modules-333333?style=flat-square&logo=css3)

### DevOps & Infrastructure
![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat-square&logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?style=flat-square&logo=nginx)

---

## 🚀 Getting Started

### 1. 환경 변수 설정
`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다.
```bash
cp .env.example .env
```

### 2. 패키지 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

> **Note**: 현재 프로젝트는 백엔드 없이도 UI를 즉시 확인할 수 있도록 **Next.js API Routes 기반의 Mock API**가 포함되어 있습니다. (ID: `admin` / PW: `any`)

---

## 📂 Project Structure

```text
src/
├── app/             # Next.js App Router (Routing & Pages)
├── features/        # Domain-driven features (Auth, Specs, etc.)
├── shared/          # Common components, hooks, services, utils
└── styles/          # Global styles & Design variables
specs/               # System Architecture & Engineering Specifications
```

---

## ⚖️ License

Copyright © 2026 Spec-Kit Team. All rights reserved.
