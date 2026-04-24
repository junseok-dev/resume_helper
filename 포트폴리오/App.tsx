import { useRef, useState } from "react";
import { Github, ExternalLink, Download } from "lucide-react";

import hariMainVideo from "./videos/메인홈페이지_발표영상.mp4";
import hariChatVideo from "./videos/채팅페이지_시연영상.mp4";
import hariRpgVideo from "./videos/롤플레잉_시연영상.mp4";
import hariMainPreview from "./images/하리_메인페이지_이미지1.png";
import hariChatPreview from "./images/하리 채팅 사진1.png";
import hariRpgPreview from "./images/하리_롤플레잉_이미지1.png";

import hariDashboard1 from "./images/하리_대시보드1_crop.png";
import hariDashboard2 from "./images/하리_대시보드2_crop.png";
import hariDashboard3 from "./images/하리_대시보드3_crop.png";
import hariDashboard4 from "./images/하리_대시보드4_crop.png";
import hariDashboard5 from "./images/하리_대시보드5_crop.png";

import shortcutImg2 from "./images/쇼특허1_이미지2.png";
import shortcutImg5 from "./images/쇼특허1_이미지5.png";
import guardianImg3 from "./images/쇼특허1_이미지3.png";
import guardianImg4 from "./images/쇼특허1_이미지4.png";

import churnImg1 from "./images/통신사고객이탈률_이미지1.png";
import churnImg2 from "./images/통신사고객이탈률_이미지2.png";
import churnImg3 from "./images/통신사고객이탈률_이미지3.png";

import lemonImg8 from "./images/레몬스캐너_이미지8.png";
import lemonImg4 from "./images/레몬스캐너_이미지4.png";
import lemonImg6 from "./images/레몬스캐너_이미지6.png";

const GitHubUrl = "https://github.com/junseok-dev/";

const VideoPlayer = ({ src, title, thumbnail }: { src: string; title: string; thumbnail: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="video-shell">
      <video
        ref={videoRef}
        src={src}
        className="video-live"
        controls
        poster={thumbnail}
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
      />
      <div className="video-print-fallback">
        <img src={thumbnail} alt={`${title} PDF 썸네일`} className="video-print-image" />
      </div>
    </div>
  );
};

const ImgCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="img-card">
    <img src={src} alt={alt} className="img-card-img" />
  </div>
);

const VideoSection = ({
  pageNo,
  title,
  subtitle,
  src,
  thumbnail,
  summary,
  bullets,
  techRows,
}: {
  pageNo: string;
  title: string;
  subtitle: string;
  src: string;
  thumbnail: string;
  summary: string;
  bullets: string[];
  techRows: Array<{ key: string; value: string }>;
}) => (
  <section className="print-page page-video">
    <div className="slide-header">
      <span className="slide-badge">{pageNo}</span>
      <span className="slide-header-title">{title}</span>
      <span className="slide-header-sub">{subtitle}</span>
    </div>
    <div className="slide-body-grid cols-6-4 page-video-body">
      <div className="page-video-left print-avoid-break">
        <div className="sec-label">서비스 시연</div>
        <div className="video-frame">
          <VideoPlayer src={src} title={title} thumbnail={thumbnail} />
        </div>
      </div>
      <div className="flex flex-col gap-3" style={{ height: "100%", justifyContent: "space-between" }}>
        <div className="info-card-blue print-avoid-break">
          <div className="info-card-title" style={{ color: "#1E40AF" }}>시연 포인트</div>
          <ul className="bul-list mt-1">
            {bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
        <div className="info-card print-avoid-break">
          <div className="info-card-title">기술 포인트</div>
          <div className="stack-list">
            {techRows.map((row) => (
              <div key={row.key} className="stack-row">
                <span className="stack-key">{row.key}</span>
                <span className="stack-val">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="info-card print-avoid-break">
          <div className="info-card-title">영상 요약</div>
          <p className="text-[12px] text-[#475569] leading-[1.75]">{summary}</p>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div id="portfolio-root">
      <button
        onClick={() => window.print()}
        className="pdf-download-button fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors shadow-lg text-sm font-semibold"
      >
        <Download className="w-4 h-4" />
        PDF 다운로드
      </button>

      {/* PAGE 1 */}
      <section className="print-page">
        <div className="cover-slide">
          <div className="cover-left">
            <div className="cover-eyebrow">Frontend Developer Portfolio</div>
            <h1 className="cover-name">JUNSEOK PARK</h1>
            <div className="cover-role">데이터 시각화 프론트엔드 개발자</div>
            <p className="cover-desc">
              데이터를 단순히 보여주는 것이 아니라,<br />
              사용자가 빠르게 이해하고 판단할 수 있도록<br />
              구조화하고 시각화하는 프론트엔드 개발자입니다.
            </p>
            <a href={GitHubUrl} className="cover-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필 열기">
              <Github className="w-4 h-4" />
              GitHub 프로필 열기
              <ExternalLink className="w-3 h-3" />
            </a>
            <div className="cover-link-url">{GitHubUrl}</div>
          </div>
          <div className="cover-right">
            <div>
              <div className="cover-section-title">기술 스택</div>
              <div className="cover-skill-grid">
                {["React","JavaScript","HTML/CSS","Python","Django","REST API","Chart.js","Plotly","Pandas","NumPy","Git","Figma"].map((s) => (
                  <div key={s} className="cover-skill-item">{s}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="cover-section-title">핵심 역량</div>
              <div className="cover-competency-list">
                {["데이터 시각화 중심 대시보드 설계","사용자 중심 정보 구조 설계","API 기반 데이터 흐름 설계","실시간 인터랙션 UI 구현","관리자 페이지 UX 설계"].map((c) => (
                  <div key={c} className="cover-competency-item">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="print-page">
        <div className="slide-header">
          <span className="slide-header-title">Contents</span>
          <span className="slide-badge">Portfolio</span>
        </div>
        <div className="slide-body center-body">
          <div className="contents-grid">
            <div className="contents-card print-avoid-break">
              <div className="contents-num">01</div>
              <div className="contents-title">HARI</div>
              <div className="contents-sub">AI 인플루언서 'HARI' 기반 인터랙티브 캐릭터 플랫폼 프로젝트</div>
            </div>
            <div className="contents-card print-avoid-break">
              <div className="contents-num">02</div>
              <div className="contents-title">데이터 시각화</div>
              <div className="contents-sub">Short-Cut AI · Churn Simulation · Lemon Scanner</div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3 */}
      <section className="print-page">
        <div className="slide-header">
          <span className="slide-badge">03</span>
          <span className="slide-header-title">HARI</span>
          <span className="slide-header-sub">GPT-SoVITS 기반 AI 성우 캐릭터 플랫폼</span>
        </div>
        <div className="slide-body-grid cols-6-4 page-balanced">
          <div className="flex flex-col gap-3">
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>핵심 기여</div>
              <p className="text-[12.5px] text-[#334155] leading-[1.7]">
                AI 캐릭터 품질 평가 자동화와 관리자 운영 지표 통합을 함께 구축해,
                캐릭터 품질과 서비스 운영 상태를 한 흐름에서 검증할 수 있도록 만들었습니다.
              </p>
            </div>
            <p className="page-copy">
              GPT-SoVITS 기반 전문 AI 성우 캐릭터 플랫폼입니다.
              음성 품질 평가, 실시간 대화, 관리자 대시보드, 롤플레잉 화면까지 이어지는 서비스 구조를 구현했습니다.
            </p>
            <div className="print-avoid-break">
              <div className="sec-label">AI / 품질 평가</div>
              <ul className="bul-list">
                <li>• Golden Dataset 100% — 54개 항목 전 카테고리 통과</li>
                <li>• LLM Judge 평균 4.27/5.00 — GPT-4o 기반 자동 품질 평가</li>
                <li>• TTS Similarity 0.9636 — 전문 성우 40문장 기반 음성 학습</li>
                <li>• LSD 9.27 — 고품질 음성 재현</li>
              </ul>
            </div>
            <div className="print-avoid-break">
              <div className="sec-label">백엔드 / 인프라</div>
              <ul className="bul-list">
                <li>• WebSocket 5명 동시 접속 0% 에러 — 부하 테스트 통과</li>
                <li>• 응답 TTFT p50 3.7s — 사람처럼 느껴지는 응답 속도</li>
                <li>• GitHub Actions → AWS EB 자동 배포 CI/CD 구축</li>
                <li>• LangGraph 세션 격리 버그 수정 — context overflow 문제 해결</li>
              </ul>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">핵심 기술</div>
              <div className="stack-list">
                <div className="stack-row"><span className="stack-key">AI / Voice</span><span className="stack-val">GPT-SoVITS · LLM Judge · TTS Similarity</span></div>
                <div className="stack-row"><span className="stack-key">서비스</span><span className="stack-val">Django · WebSocket · LangGraph</span></div>
                <div className="stack-row"><span className="stack-key">운영</span><span className="stack-val">AWS EB · GitHub Actions CI/CD</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="info-card print-avoid-break">
              <div className="info-card-title">주요 성과</div>
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-val">0.9636</div><div className="metric-lbl">TTS 음성 유사도</div></div>
                <div className="metric-card"><div className="metric-val">통합</div><div className="metric-lbl">대시보드</div></div>
                <div className="metric-card"><div className="metric-val">실시간</div><div className="metric-lbl">RAG 채팅</div></div>
                <div className="metric-card"><div className="metric-val">LoRA</div><div className="metric-lbl">이미지 일관성</div></div>
              </div>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">문제 해결</div>
              <div className="flex flex-col gap-2">
                <div className="pscard issue"><span className="pscard-label">문제</span><p>SNS API 토큰 만료로 관리자 통계 조회가 불안정했습니다.</p></div>
                <div className="pscard resolve"><span className="pscard-label">해결</span><p>플랫폼별 재연동·갱신 흐름과 인증 상태 관리 로직을 분리했습니다.</p></div>
                <div className="pscard result"><span className="pscard-label">결과</span><p>조회 실패와 수동 재로그인 부담을 줄이고 운영 안정성을 높였습니다.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 4 */}
      <section className="print-page">
        <div className="slide-header">
          <span className="slide-badge">04</span>
          <span className="slide-header-title">HARI · 프론트엔드 개발</span>
          <span className="slide-header-sub">관리자 대시보드 개요</span>
        </div>
        <div className="slide-body-grid cols-6-4 page-balanced">
          <div className="flex flex-col gap-3">
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>핵심 기여</div>
              <p className="text-[12.5px] text-[#334155] leading-[1.7]">
                분산되어 있던 서비스/SNS 운영 데이터를 관리자 관점의 KPI, 차트, 필터 구조로 재정리해
                운영자가 한 화면에서 상태를 판단할 수 있게 만들었습니다.
              </p>
            </div>
            <p className="page-copy">
              프론트엔드 담당으로 관리자 대시보드와 커스텀 관리자 화면 설계를 주도했습니다.
              데이터 시각화와 정보 구조 설계를 통해 복잡한 운영 지표를 직관적으로 전달하는 데 집중했습니다.
            </p>
            <div className="print-avoid-break">
              <div className="sec-label">관리자 대시보드</div>
              <ul className="bul-list">
                <li>• 방문자, 채팅 수, RPG 플레이 지표를 포함한 핵심 KPI 카드와 SNS 지표를 묶어 총 6개 주요 지표를 정리</li>
                <li>• 약 7개 차트를 통해 기간별 추이를 시각화하고, 일/주/월/년 단위 필터와 플랫폼별 지표 탭 제공</li>
                <li>• YouTube Data API 및 Analytics API, Instagram Graph API, TikTok API를 연동해 외부 SNS 지표를 통합</li>
                <li>• 약 14~15개 관리자용 통계 및 연동 엔드포인트를 분리 구성하고, OAuth 인증 시작·콜백·상태 관리 흐름을 구조화</li>
              </ul>
            </div>
            <div className="print-avoid-break">
              <div className="sec-label">서비스 UI</div>
              <ul className="bul-list">
                <li>• React 롤플레이 모듈 — TypeScript + Vite 독립 빌드</li>
                <li>• 멀티페이지 서비스 UI — 10개 페이지 Django 템플릿 기반</li>
                <li>• 실시간 채팅 인터페이스 — WebSocket 기반 메시지 처리 UI 구현</li>
              </ul>
            </div>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>설계 포인트</div>
              <div className="stack-list">
                <div className="stack-row"><span className="stack-key">정보 구조</span><span className="stack-val">KPI → 기간 필터 → 플랫폼별 상세 지표</span></div>
                <div className="stack-row"><span className="stack-key">운영 안정성</span><span className="stack-val">OAuth 상태와 통계 조회 흐름 분리</span></div>
                <div className="stack-row"><span className="stack-key">확장성</span><span className="stack-val">모델별 목록/상세 커스텀 관리자 화면 분리</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="info-card print-avoid-break">
              <div className="info-card-title">성과</div>
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-val">14개</div><div className="metric-lbl">관리자 화면</div></div>
                <div className="metric-card"><div className="metric-val">7개</div><div className="metric-lbl">데이터 차트</div></div>
                <div className="metric-card"><div className="metric-val">6개</div><div className="metric-lbl">KPI 지표</div></div>
                <div className="metric-card"><div className="metric-val">3개</div><div className="metric-lbl">SNS 플랫폼</div></div>
              </div>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">역할</div>
              <p className="text-[12px] text-[#334155] leading-[1.75]">
                프론트엔드 담당으로 관리자 페이지 설계와 UI 구현을 주도했습니다.
                대시보드, 관리자 관리 화면, 사용자 인터페이스 전반을 직접 설계·구현하며 서비스의 핵심 화면을 구축했습니다.
                특히 데이터 시각화와 정보 구조 설계를 통해 복잡한 데이터를 사용자 관점에서 직관적으로 전달하는 데 집중했습니다.
                그 결과, 관리자 기능의 활용성과 데이터 이해도를 높이는 UI를 구현했습니다.
              </p>
            </div>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>관리자 화면 구조</div>
              <p className="text-[12px] text-[#334155] leading-[1.7]">
                관리자 기능의 활용성과 데이터 이해도를 높이는 화면을 구축했고,
                실제 대시보드 화면에서 KPI, 차트, 플랫폼별 분석 흐름을 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 5 */}
      <section className="print-page">
        <div className="slide-header">
          <span className="slide-badge">05</span>
          <span className="slide-header-title">HARI · 관리자 대시보드 화면 (1/2)</span>
          <span className="slide-header-sub">서비스 현황 대시보드</span>
        </div>
        <div style={{ flex: 1, padding: "16px 36px 18px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="img-card" style={{ height: "38%", minHeight: 0 }}>
            <img src={hariDashboard2} alt="서비스 현황 차트 대시보드" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", background: "#F8FAFC" }} />
          </div>
          <div className="img-card" style={{ flex: 1, minHeight: 0 }}>
            <img src={hariDashboard1} alt="서비스 현황 대시보드 전체 화면" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", background: "#F8FAFC" }} />
          </div>
        </div>
      </section>

      {/* PAGE 6 */}
      <VideoSection
        pageNo="06"
        title="HARI · 메인 홈페이지 시연영상"
        subtitle="메인 홈페이지 서비스 데모"
        src={hariMainVideo}
        thumbnail={hariMainPreview}
        summary="메인 홈페이지의 첫 진입 흐름, 서비스 소개, HARI 캐릭터 노출 구조를 중심으로 보여주는 시연입니다."
        bullets={[
          "메인 화면 진입과 서비스 소개 흐름",
          "AI HARI 캐릭터 첫 노출 구조",
          "반응형 레이아웃과 기본 탐색 흐름",
          "서비스 전체를 이해하는 출발점",
        ]}
        techRows={[
          { key: "화면 목적", value: "첫인상과 서비스 맥락 전달" },
          { key: "메인 페이지", value: "Django Template 기반" },
          { key: "프론트엔드", value: "Django Template + HTML/CSS/JS" },
          { key: "롤플레잉 UI", value: "React + TypeScript + Vite 독립 빌드" },
          { key: "시연 포인트", value: "진입 흐름과 서비스 맥락 확인" },
        ]}
      />

      {/* PAGE 7 */}
      <VideoSection
        pageNo="07"
        title="HARI · 채팅페이지 시연영상"
        subtitle="실시간 대화 페이지"
        src={hariChatVideo}
        thumbnail={hariChatPreview}
        summary="채팅 페이지에서 실시간 응답이 쌓이는 흐름과 사용자의 입력-응답 상호작용을 중심으로 구성한 시연입니다."
        bullets={[
          "실시간 채팅 입력과 AI 응답 처리",
          "WebSocket 기반 메시지 전달 구조",
          "대화 내용이 이어지는 인터랙션 UI",
          "사용자 입력 상태와 응답 상태 분리",
        ]}
        techRows={[
          { key: "실시간 통신", value: "WebSocket 연결 및 메시지 송수신" },
          { key: "상태 관리", value: "입력/응답 상태 분리" },
          { key: "UX 포인트", value: "대화 맥락 유지와 가독성" },
          { key: "화면 목적", value: "실시간 상호작용 시연" },
        ]}
      />

      {/* PAGE 8 */}
      <VideoSection
        pageNo="08"
        title="HARI · 롤플레잉 시연영상"
        subtitle="캐릭터 상호작용 모듈"
        src={hariRpgVideo}
        thumbnail={hariRpgPreview}
        summary="롤플레잉 모듈의 캐릭터 반응, 장면 전환, 독립 빌드 구조를 보여주는 시연입니다."
        bullets={[
          "롤플레잉 모듈 진입과 캐릭터 상호작용",
          "장면 전환과 반응형 이벤트 흐름",
          "독립 모듈로 분리된 프론트엔드 구조",
          "서비스 내 별도 시연 화면으로 구성",
        ]}
        techRows={[
          { key: "빌드 구조", value: "TypeScript + Vite 독립 빌드" },
          { key: "인터랙션", value: "캐릭터 반응과 상태 전환" },
          { key: "분리 전략", value: "서비스 UI를 별도 모듈로 구성" },
          { key: "시연 포인트", value: "캐릭터 몰입감과 흐름 확인" },
        ]}
      />

      {/* PAGE 9 */}
      <section className="print-page page-photo-heavy">
        <div className="slide-header">
          <span className="slide-badge">09</span>
          <span className="slide-header-title">Short-Cut AI</span>
          <span className="slide-header-sub">특허 침해 리스크 분석 및 시각화</span>
        </div>
        <div className="slide-body-grid cols-2 page-balanced">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>핵심 기여</div>
              <p className="text-[12.5px] text-[#334155] leading-[1.7]">
                특허 검색 결과를 위험도, 근거, 회피 전략까지 이어지는 분석 화면으로 구조화해
                사용자가 “어떤 특허가 얼마나 위험한지” 빠르게 판단하도록 설계했습니다.
              </p>
            </div>
            <div className="print-avoid-break">
              <div className="sec-label">핵심 화면 구조</div>
              <ul className="bul-list">
                <li>• Guardian Map — 특허 위협도를 4단계 공간으로 시각화</li>
                <li>• 메트릭 카드 — 유사도, 침해 리스크, 참조 특허 수를 상단에 요약</li>
                <li>• 6탭 분석 — 리포트, 지형도, 유사도, 리스크, 회피 전략, 구성요소 대비표</li>
                <li>• 보고서 출력 — PDF / Markdown 자동 생성 흐름 구성</li>
              </ul>
            </div>
            <div className="print-avoid-break" style={{ display: "flex", gap: 12 }}>
              <ImgCard src={shortcutImg2} alt="Short-Cut AI 분석 대시보드 1" />
              <ImgCard src={shortcutImg5} alt="Short-Cut AI 분석 대시보드 2" />
            </div>
            <div className="print-avoid-break" style={{ display: "flex", gap: 12 }}>
              <ImgCard src={guardianImg3} alt="Guardian Map 1" />
              <ImgCard src={guardianImg4} alt="Guardian Map 2" />
            </div>
          </div>
          <div className="flex flex-col gap-4" style={{ justifyContent: "space-between" }}>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">성과</div>
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-val">83.1%</div><div className="metric-lbl">Pass Rate</div></div>
                <div className="metric-card"><div className="metric-val">69/83건</div><div className="metric-lbl">Golden Dataset</div></div>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <p className="text-[11.5px] text-[#475569]"><strong className="text-[#0F172A]">[평가 결과]</strong> <span className="text-[#2563EB] font-semibold">83.1% Pass Rate</span> 달성</p>
                <p className="text-[11.5px] text-[#475569]"><strong className="text-[#0F172A]">[평가 기준]</strong> Faithfulness ≥ 0.6, Answer Relevancy ≥ 0.6</p>
                <p className="text-[11.5px] text-[#475569]"><strong className="text-[#0F172A]">[데이터셋]</strong> Golden Dataset 83건 중 69건 통과</p>
              </div>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">역할 / 기술</div>
              <div className="stack-list">
                <div className="stack-row"><span className="stack-key">UI 설계</span><span className="stack-val">위험도 판단 중심의 분석 화면 구조</span></div>
                <div className="stack-row"><span className="stack-key">평가</span><span className="stack-val">DeepEval 기반 Faithfulness / Relevancy 검증</span></div>
                <div className="stack-row"><span className="stack-key">개선</span><span className="stack-val">프롬프트 제약 · query rewrite · 저품질 결과 필터링</span></div>
              </div>
            </div>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>문제 해결 요약</div>
              <div className="flex flex-col gap-2">
                <div className="pscard issue"><span className="pscard-label">문제</span><p>RAG 응답이 질문 의도와 특허 근거를 안정적으로 맞추지 못했습니다.</p></div>
                <div className="pscard resolve"><span className="pscard-label">해결</span><p>프롬프트 제약, threshold 조정, outlier 제거, query rewrite를 적용했습니다.</p></div>
                <div className="pscard result"><span className="pscard-label">결과</span><p>Golden Dataset 83건 기준 83.1% Pass Rate를 달성했습니다.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 10 */}
      <section className="print-page page-photo-heavy">
        <div className="slide-header">
          <span className="slide-badge">10</span>
          <span className="slide-header-title">Churn Simulation</span>
          <span className="slide-header-sub">고객 이탈 원인 분석 및 방어 전략 시뮬레이션</span>
        </div>
        <div className="slide-body-grid cols-2 page-balanced">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>핵심 기여</div>
              <p className="text-[12.5px] text-[#334155] leading-[1.7]">
                이탈 예측 결과를 원인 분석과 전략 조정 UI로 확장해,
                전략 적용 시 이탈률과 매출이 얼마나 달라지는지 즉시 비교할 수 있게 만들었습니다.
              </p>
            </div>
            <div className="print-avoid-break">
              <div className="sec-label">핵심 시각화</div>
              <ul className="bul-list">
                <li>• 이탈 원인별 분석 차트 (고객센터 지연, 국제전화 요금, 통화 패턴)</li>
                <li>• 전략별 방어율 설정 슬라이더 (CS 불만 케어, 국제전화 할인, 요금제 전환점)</li>
                <li>• Before/After 시뮬레이션 그래프 — 14.1% → 10.5% 이탈률 감소 시각화</li>
                <li>• KPI 실시간 변화 — 예상 이탈률, 월 매출 회복 메트릭 카드</li>
              </ul>
            </div>
            <div className="print-avoid-break" style={{ display: "flex", gap: 12 }}>
              <ImgCard src={churnImg1} alt="고객 이탈 현황 1" />
              <ImgCard src={churnImg3} alt="고객 이탈 현황 2" />
            </div>
            <ImgCard src={churnImg2} alt="이탈 방지 시뮬레이션 Before/After" />
          </div>
          <div className="flex flex-col gap-4" style={{ justifyContent: "space-between" }}>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">시뮬레이션 결과</div>
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-val">14.1% → 10.5%</div><div className="metric-lbl">이탈률 감소</div></div>
                <div className="metric-card"><div className="metric-val">$10,160</div><div className="metric-lbl">월 매출 회복</div></div>
              </div>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">기술 / 구현 범위</div>
              <div className="stack-list">
                <div className="stack-row"><span className="stack-key">데이터 처리</span><span className="stack-val">Python 기반 고객 이탈 데이터 전처리</span></div>
                <div className="stack-row"><span className="stack-key">시각화</span><span className="stack-val">원인 분석 차트와 Before/After 비교 UI</span></div>
                <div className="stack-row"><span className="stack-key">UX</span><span className="stack-val">슬라이더 기반 전략 조정과 KPI 즉시 반영</span></div>
              </div>
            </div>
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>문제 해결</div>
              <div className="flex flex-col gap-2">
                <div className="pscard issue"><span className="pscard-label">문제</span><p>예측 수치만으로는 어떤 대응 전략을 선택해야 하는지 판단하기 어려웠습니다.</p></div>
                <div className="pscard resolve"><span className="pscard-label">해결</span><p>원인 분석 차트와 전략 슬라이더, Before/After 비교 그래프를 연결했습니다.</p></div>
                <div className="pscard result"><span className="pscard-label">결과</span><p>이탈률 14.1% → 10.5%, 월 매출 회복 $10,160을 정량적으로 보여줬습니다.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 11 */}
      <section className="print-page page-photo-heavy">
        <div className="slide-header">
          <span className="slide-badge">11</span>
          <span className="slide-header-title">Lemon Scanner</span>
          <span className="slide-header-sub">자동차 리콜 데이터 시각화 화면</span>
        </div>
        <div className="slide-body-grid page-gallery">
          <div className="print-avoid-break">
            <div className="print-avoid-break mb-3">
              <div className="sec-label">프로젝트 개요</div>
              <p className="page-copy">
                자동차 리콜 데이터를 시각화하여 브랜드별 리콜 건수, 결함 유형, 시정률을 한 화면에서 비교하고 탐색할 수 있는 분석 대시보드입니다.
                비정형 자연어 리콜 사유를 키워드 태깅으로 구조화해 검색 및 필터링 기능을 구현했습니다.
              </p>
            </div>
            <div className="print-avoid-break">
              <div className="sec-label">핵심 시각화</div>
              <ul className="bul-list">
                <li>• 차량 비교 UI 설계 및 구현</li>
                <li>• 브랜드별 리콜 건수 비교 차트</li>
                <li>• 결함 키워드 워드클라우드</li>
                <li>• 리콜 사유를 결함 키워드 기준으로 탐색할 수 있는 필터링 흐름 구성</li>
              </ul>
            </div>
          </div>
          <div className="gallery-top">
            <ImgCard src={lemonImg8} alt="차량 비교 UI" h={168} />
            <ImgCard src={lemonImg4} alt="브랜드별 리콜 건수 비교" h={168} />
          </div>
          <ImgCard src={lemonImg6} alt="결함 키워드 워드클라우드" h={178} />
        </div>
      </section>

      {/* PAGE 12 */}
      <section className="print-page">
        <div className="slide-header">
          <span className="slide-badge">12</span>
          <span className="slide-header-title">Lemon Scanner · 문제 해결</span>
          <span className="slide-header-sub">데이터 신뢰도와 탐색성 개선</span>
        </div>
        <div className="slide-body-grid cols-2 page-balanced">
          <div className="flex flex-col gap-4">
            <div className="info-card-blue print-avoid-break">
              <div className="info-card-title" style={{ color: "#1E40AF" }}>핵심 기여</div>
              <p className="text-[12.5px] text-[#334155] leading-[1.7]">
                자동차 리콜 데이터를 단순 조회 화면이 아니라, 차량 비교와 결함 유형 탐색이 가능한 대시보드로 구조화했습니다.
                데이터 왜곡을 줄이고 사용자가 신뢰할 수 있는 비교 기준을 제공하는 데 집중했습니다.
              </p>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">핵심 성과</div>
              <div className="metric-grid">
                <div className="metric-card"><div className="metric-val">5건+</div><div className="metric-lbl">브랜드 비교 기준</div></div>
                <div className="metric-card"><div className="metric-val">25개</div><div className="metric-lbl">결함 키워드 사전</div></div>
                <div className="metric-card"><div className="metric-val">구조화</div><div className="metric-lbl">리콜 사유 데이터</div></div>
                <div className="metric-card"><div className="metric-val">캐싱</div><div className="metric-lbl">반복 조회 최적화</div></div>
              </div>
            </div>
            <div className="info-card print-avoid-break">
              <div className="info-card-title">기술 / 데이터 처리</div>
              <div className="stack-list">
                <div className="stack-row"><span className="stack-key">전처리</span><span className="stack-val">리콜 사유 텍스트 정제 및 키워드 태깅</span></div>
                <div className="stack-row"><span className="stack-key">신뢰도</span><span className="stack-val">소표본 브랜드 제외 기준으로 비교 왜곡 완화</span></div>
                <div className="stack-row"><span className="stack-key">성능</span><span className="stack-val">캐싱으로 반복 조회 비용 감소</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="info-card">
              <div className="text-[13px] font-bold text-[#2563EB] mb-3">문제 해결 01</div>
              <div className="flex flex-col gap-2">
                <div className="pscard issue"><span className="pscard-label">문제</span><p>리콜 건수가 적은 브랜드의 시정률이 과대평가되어 비교 결과가 왜곡됐습니다.</p></div>
                <div className="pscard resolve"><span className="pscard-label">해결</span><p>브랜드별 리콜 건수 <span className="font-semibold text-[#2563EB]">5건 이상</span> 기준을 도입해 비교 대상을 필터링했습니다.</p></div>
                <div className="pscard result"><span className="pscard-label">결과</span><p>통계적으로 유의미한 데이터만 표시해 브랜드 간 비교 정확도와 신뢰도를 높였습니다.</p></div>
              </div>
            </div>
            <div className="info-card">
              <div className="text-[13px] font-bold text-[#2563EB] mb-3">문제 해결 02</div>
              <div className="flex flex-col gap-2">
                <div className="pscard issue"><span className="pscard-label">문제</span><p>비정형 리콜 사유 때문에 EGR, 냉각수 같은 결함 유형 검색이 어려웠습니다.</p></div>
                <div className="pscard resolve"><span className="pscard-label">해결</span><p><span className="font-semibold text-[#2563EB]">25개 핵심 키워드 사전</span>을 구축하고 리콜 사유를 자동 태깅했습니다.</p></div>
                <div className="pscard result"><span className="pscard-label">결과</span><p>비정형 텍스트를 검색 가능한 구조화 데이터로 바꿔 탐색 효율을 개선했습니다.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 13 */}
      <section className="print-page thankyou-page">
        <div className="thankyou-slide">
          <h2 className="text-[52px] font-extrabold text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
            Thank You
          </h2>
          <p className="text-[17px] text-[#BFDBFE] leading-[1.9] max-w-xl" style={{ fontWeight: 500 }}>
            데이터를 이해 가능한 화면으로 설계하고,<br />
            사용자가 빠르게 판단할 수 있도록 돕는<br />
            프론트엔드 개발자가 되겠습니다.
          </p>
          <a
            href={GitHubUrl}
            className="mt-10 inline-flex items-center gap-2 text-[#93C5FD] hover:text-white text-[13px] font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 프로필 열기"
          >
            <Github className="w-4 h-4" />
            github.com/junseok-dev
          </a>
          <div className="mt-2 text-[12px] text-[#BFDBFE] break-all">
            {GitHubUrl}
          </div>
        </div>
      </section>
    </div>
  );
}
