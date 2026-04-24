import { Mail, Phone, MapPin, Github, Calendar, Award, Briefcase, GraduationCap, Code2, User, Download } from 'lucide-react';
import profilePhoto from '../imports/준석_이력서_사진.jpg';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-0" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto mb-4 print:hidden px-4 pt-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <Download className="w-5 h-5" />
          PDF로 다운로드
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto bg-white shadow-lg print:shadow-none">
        <div className="flex print:flex-row">
          {/* 좌측 사이드바 */}
          <div className="w-[35%] bg-gradient-to-b from-blue-600 to-blue-700 text-white p-8">
            {/* 프로필 사진 */}
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={profilePhoto} alt="박준석 프로필 사진" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 이름 & 직무 */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">박준석</h1>
              <p className="text-sm font-light opacity-90">Park Junseok</p>
              <div className="h-px bg-white/30 my-4 mx-8"></div>
              <p className="text-sm leading-relaxed">데이터를 사용자 경험으로<br />연결하는 프론트엔드 /<br />풀스택 개발자</p>
            </div>

            {/* 기본 정보 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                기본 정보
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>1998.09.23</p>
                    <p className="text-xs opacity-80">(만 27세)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>010-4404-6763</p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="break-all">eric676392@gmail.com</p>
                </div>
                <div className="flex items-start gap-2">
                  <Github className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="https://github.com/junseok-dev" className="hover:underline break-all">
                    github.com/junseok-dev
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>인천광역시 미추홀구<br />경인로 372</p>
                </div>
                <div className="pt-2 border-t border-white/30">
                  <p className="text-xs opacity-80">병역: 면제</p>
                  <p className="text-xs opacity-80">보훈: 해당 없음</p>
                </div>
              </div>
            </div>

            {/* 기술 스택 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Tech Stack
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2 text-blue-100">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">HTML5</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">CSS3</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Chart.js</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Plotly</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-100">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Django</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-100">Database</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">MySQL</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Redis</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-100">Data & AI</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Pandas</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">NumPy</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">PyTorch</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">OpenAI API</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Pinecone</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-100">Infra</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">AWS (EC2, RDS, S3)</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-100">Collaboration</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">Git</span>
                    <span className="px-2 py-1 bg-white/20 rounded text-xs">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 본문 */}
          <div className="w-[65%] p-10">
            {/* 학력 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                학력
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-800">원광대학교</h3>
                    <span className="text-sm text-gray-600">2017.03 ~ 2025.03</span>
                  </div>
                  <p className="text-sm text-gray-600">빅데이터통계학과 · 졸업</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-800">연수고등학교</h3>
                    <span className="text-sm text-gray-600">2014.03 ~ 2017.03</span>
                  </div>
                  <p className="text-sm text-gray-600">이과계열 · 졸업</p>
                </div>
              </div>
            </section>

            {/* 교육 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                교육
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">SK네트웍스 Family AI 캠프 · K-디지털 트레이닝</h3>
                  <span className="text-sm text-gray-600">2025.10.29 ~ 2026.04.24</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">960시간</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>인공지능 모델링(NCS 5수준) 기반 AI 개발 교육</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>머신러닝·딥러닝, 데이터 분석, AI 서비스 개발 프로젝트 수행</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>실무 중심 AI 모델 개발 및 데이터 처리 기술 학습</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 자격증 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600 flex items-center gap-2">
                <Award className="w-6 h-6" />
                자격증
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">사회조사분석사 2급</h3>
                    <p className="text-sm text-gray-600">통계청</p>
                  </div>
                  <span className="text-sm text-gray-600">2025.09</span>
                </div>
              </div>
            </section>

            {/* 핵심 역량 요약 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">핵심 역량 요약</h2>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>데이터 시각화 & 대시보드 구현:</strong> Chart.js · Plotly · Streamlit 기반 인터랙티브 대시보드 설계·구현</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>데이터 처리 & 분석:</strong> Pandas 기반 대용량 로그 전처리, EDA, 통계변수 4,000+ 개 생성 경험</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>AI/ML 모델링:</strong> CatBoost, ResNet, Xception, RNN 등 모델링 경험 및 하이퍼파라미터 튜닝(Optuna)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>LLM 응용:</strong> RAG 파이프라인(HyDE, Multi-Query) 설계 및 Pinecone 벡터 검색 구현</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>외부 API 연동 & 캐싱 설계:</strong> OAuth2 토큰 자동 재발급, Redis 기반 캐시 키 설계로 호출 최적화</span>
                </li>
              </ul>
            </section>

            {/* 프로젝트 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">주요 프로젝트</h2>

              {/* 프로젝트 1 */}
              <div className="mb-6 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow page-break-after-this">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-blue-700">HARI — AI 가상 인플루언서 팬 플랫폼</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">2026.03.04 ~ 2026.04.24</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mr-2">프론트엔드 개발</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mr-2">UI/UX 설계</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">관리자 대시보드</span>
                </div>
                <div className="mb-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">HTML5</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">CSS3</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">JavaScript</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Chart.js</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Django</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">PostgreSQL</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Redis</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">AWS</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  AI 가상 인플루언서 '하리' 팬 플랫폼 웹 서비스 개발. 사용자 기능(채팅 · 멤버십 · 콘텐츠)과 관리자용 SNS 통계 대시보드 구현. HTML/CSS/Vanilla JS 기반 전체 페이지 UI/UX 설계.
                </p>
                <div className="mb-2">
                  <p className="text-sm font-semibold text-gray-800 mb-1">핵심 구현</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 text-xs">▸</span>
                      <span>Chart.js 활용 인터랙티브 대시보드 (영상 성과, 조회수/좋아요/댓글 추이, 플랫폼 비교)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 text-xs">▸</span>
                      <span>OAuth2 토큰 자동 재발급: YouTube 액세스/리프레시 토큰을 Redis에 저장하고 만료 시 자동 갱신</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 text-xs">▸</span>
                      <span>캐시 키 기반 API 호출 최적화: 기간·범위 조합 키로 중복 호출 제거</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 프로젝트 2 */}
              <div className="mb-6 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-blue-700">쇼특허 (Short-Cut) — AI 기반 특허 침해 리스크 분석</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">2026.01.30 ~ 2026.02.03</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-2">RAG 파이프라인 설계·구현</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">성능 최적화</span>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-green-800 font-semibold">🎯 목표: 특허 검색 정확도 Pass Rate 80% 달성</p>
                </div>
                <div className="mb-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Python</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">OpenAI API</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">RAG</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Pinecone</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Streamlit</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Plotly</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  사용자 아이디어 입력 시 유사 특허 검색 및 침해 리스크 분석 제공. RAG 기반 검색 파이프라인(HyDE, Multi-Query) 설계 및 구현. Streamlit 기반 결과 시각화 UI 구성.
                </p>

                <div className="bg-green-50 p-4 rounded mb-3">
                  <p className="text-sm font-semibold text-gray-800 mb-2">프로젝트 성과 — 핵심 수치</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-700 mb-2">
                    <div className="flex justify-between">
                      <span>최종 Pass Rate:</span>
                      <strong className="text-green-700">83.1%</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>초기 베이스라인:</span>
                      <strong>62.5%</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>평가 샘플 수:</span>
                      <strong>83개</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>통과 / 실패:</span>
                      <strong>69 / 14</strong>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-green-200">
                    <p className="text-xs text-green-800 font-medium">✅ 목표 80% 달성 (베이스라인 대비 +20.6%p 개선)</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-800 mb-2">성과를 만든 개선 과정 (62.5% → 83.1%)</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 text-xs font-bold">1.</span>
                      <div>
                        <strong>프롬프트 엔지니어링</strong>
                        <p className="text-xs text-gray-600 mt-0.5">NEVER FABRICATE 지시어로 환각 억제, 특허 번호 인용 강제, 정보 부족 시 N/A 처리</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 text-xs font-bold">2.</span>
                      <div>
                        <strong>데이터셋 정제</strong>
                        <p className="text-xs text-gray-600 mt-0.5">풍력발전·배터리 등 AI/NLP 무관 Outlier 17개 제거, cosine similarity 기반 필터링</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 text-xs font-bold">3.</span>
                      <div>
                        <strong>평가 기준 현실화</strong>
                        <p className="text-xs text-gray-600 mt-0.5">Threshold 0.7 → 0.6 조정으로 과도한 기준 완화</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-800 mb-1">평가 지표 (DeepEval 기반)</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>• Faithfulness (Context 기반 답변 여부)</span>
                      <span className="font-mono">≥ 0.6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Answer Relevancy (질문 의도 적합성)</span>
                      <span className="font-mono">≥ 0.6</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 프로젝트 3 */}
              <div className="mb-6 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-blue-700">통신사 고객 이탈(Churn) 예측 및 분석 시스템</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">2025.12.19 ~ 2025.12.22</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mr-2">데이터 분석</span>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mr-2">모델링</span>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">대시보드</span>
                </div>
                <div className="mb-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Python</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">CatBoost</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Optuna</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Pandas</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Streamlit</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  고객 4,250명의 사용 이력 데이터 기반 이탈 예측 모델 개발. EDA를 통해 이탈 패턴 분석 및 주요 변수 도출.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-800 mb-1">모델 성과</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                    <div>F1-Score: <strong>0.88</strong></div>
                    <div>ROC AUC: <strong>0.9117</strong></div>
                    <div>Recall: <strong>0.80</strong></div>
                    <div>Precision: <strong>~97%</strong></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Optuna 하이퍼파라미터 튜닝으로 F1-Score 0.831 → 0.88 향상</p>
                </div>
              </div>

              {/* 프로젝트 4 */}
              <div className="mb-6 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-blue-700">Lemon Scanner — 차량 리콜 정보 조회 웹 서비스</h3>
                  <span className="text-sm text-gray-600 whitespace-nowrap">2025.11.14 ~ 2025.11.17</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full mr-2">백엔드 로직</span>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">프론트엔드 UI</span>
                </div>
                <div className="mb-3 flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Python</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Streamlit</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">MySQL</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Pandas</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">Altair</span>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  공공데이터포털 차량 리콜 데이터(9,856건, 3.1MB)를 수집·가공·정제하여 MySQL DB 적재. 사용자 검색 기반 리콜 이력 조회 및 브랜드별 통계 분석 기능 구현.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 text-xs">▸</span>
                    <span>st.cache_data 적용으로 DB 쿼리 캐싱 및 TTL 1시간 설정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 text-xs">▸</span>
                    <span>네이버 검색 API 연동으로 실시간 뉴스 제공 기능 구현</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 자기소개 */}
            <section className="mb-8 page-break-after-this">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">자기소개</h2>
              <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  데이터를 단순히 분석하는 것을 넘어, 사용자에게 직관적으로 전달하는 과정에 매력을 느껴 프론트엔드 개발자의 길을 선택하게 되었습니다.
                </p>
                <p>
                  빅데이터금융통계학부에서 데이터를 다루며, 수치 자체보다 이를 어떻게 표현하느냐에 따라 정보의 가치가 달라진다는 것을 경험했습니다. 이후 SK Networks Family AI Camp 과정에서 다양한 프로젝트를 수행하며 데이터 처리부터 시각화, UI 구현까지 전 과정을 경험했습니다.
                </p>
                <p>
                  특히 AI 가상 인플루언서 플랫폼 'HARI' 프로젝트에서는 Django 기반 웹 애플리케이션 구조 위에서 HTML, CSS, JavaScript를 활용해 사용자 화면과 관리자 대시보드를 설계하고 구현했습니다. YouTube 및 Instagram API를 연동하고 Chart.js를 활용해 데이터를 시각화하며, 데이터 흐름을 이해하고 이를 사용자에게 전달하는 경험을 쌓았습니다.
                </p>
                <p className="font-medium text-blue-800">
                  이러한 경험을 통해 데이터를 이해하고 이를 사용자 경험으로 연결하는 개발자로 성장해왔으며, 앞으로도 사용자 관점에서 가치를 전달하는 프론트엔드 개발자가 되고자 합니다.
                </p>
              </div>
            </section>

            {/* 지원 동기 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">지원 동기</h2>
              <div className="bg-gray-50 p-5 rounded-lg text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  데이터를 효과적으로 전달하는 프론트엔드 개발에 매력을 느껴 지원하게 되었습니다. 복잡한 데이터를 사용자 경험으로 풀어내어 정보의 가치를 높이는 과정에 흥미를 느끼고 있습니다.
                </p>
                <p>
                  프로젝트를 수행하며 데이터 분석 결과를 단순히 도출하는 것보다, 이를 사용자에게 어떻게 전달하느냐가 서비스의 완성도를 결정짓는다는 것을 체감했습니다. 특히 대시보드와 차트 UI를 구현하면서, 데이터 구조를 이해하고 이를 시각적으로 표현하는 과정에 큰 흥미를 느꼈습니다.
                </p>
                <p>
                  엔코아 교육BU는 교육생의 역량 데이터를 차트와 대시보드 형태로 구현하는 업무를 수행한다는 점에서, 제가 경험해온 데이터 시각화 및 UI 구현 역량을 직접적으로 활용할 수 있는 환경이라고 판단했습니다. 이러한 경험을 바탕으로 사용자 중심의 프론트엔드 개발에 기여하고자 지원하였습니다.
                </p>
              </div>
            </section>

            {/* 직무와 관련된 성격의 장단점 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">직무와 관련된 성격의 장단점</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-lg text-sm text-gray-700 leading-relaxed space-y-3">
                  <p className="font-semibold text-blue-800">강점</p>
                  <p>
                    저의 강점은 새로운 기술을 빠르게 학습하고 이를 실제 구현으로 연결하는 실행력입니다. 프로젝트 진행 중 필요한 기술이 있을 경우 AI 도구를 활용하여 구조를 빠르게 이해하고 코드로 구현하며, 이를 통해 대시보드 및 데이터 시각화 기능을 짧은 시간 내 완성할 수 있었습니다.
                  </p>
                  <p>
                    또한 데이터를 단순히 처리하는 데 그치지 않고, 사용자 입장에서 어떻게 보여줄지를 고민하는 습관을 가지고 있습니다. 프로젝트에서 다양한 차트와 UI를 구성하며 데이터를 직관적으로 전달하는 데 집중했고, 이를 통해 사용자 경험을 고려한 개발 역량을 키웠습니다.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg text-sm text-gray-700 leading-relaxed space-y-3">
                  <p className="font-semibold text-gray-800">개선점</p>
                  <p>
                    반면 초기에는 문제를 혼자 해결하려는 경향이 있어 시간이 지연되는 경우가 있었습니다. 이를 개선하기 위해 진행 상황과 이슈를 공유하고 팀원들과 적극적으로 소통하는 방식을 실천하고 있으며, 이를 통해 문제 해결 속도와 결과의 완성도를 함께 높이고 있습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 직무와 관련된 경험 중 어려움을 극복한 사례 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">직무와 관련된 경험 중 어려움을 극복한 사례</h2>
              <div className="bg-white border border-blue-200 rounded-lg p-5 text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  HARI AI 가상 인플루언서 플랫폼 프로젝트에서 관리자용 SNS 통계 대시보드를 구현하며, 외부 API 인증 및 데이터 처리 문제를 해결한 경험이 있습니다.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">🚨 문제 상황</p>
                  <p>
                    YouTube Analytics API는 OAuth2 기반 인증이 필요하며 액세스 토큰이 일정 시간 이후 만료되는 문제가 있었습니다. 이로 인해 API 호출이 실패하고 대시보드 데이터가 정상적으로 표시되지 않는 문제가 발생했습니다. 또한 Instagram API 역시 60일 주기의 토큰 만료로 서비스 안정성 확보에 어려움이 있었습니다.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">💡 해결 과정</p>
                  <p>
                    플랫폼 특성에 맞는 토큰 관리 구조를 구현했습니다. YouTube는 Django와 Redis를 활용해 토큰을 저장하고 만료 시 자동 재발급되도록 구성했습니다. Instagram은 만료 시점을 Redis에 저장하고, 만료 전 갱신 API를 호출하는 방식으로 안정성을 확보했습니다. 또한 캐시 키 기반 데이터 관리로 중복 API 호출을 방지하고 응답 속도를 개선했습니다.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">✅ 성과</p>
                  <p>
                    그 결과 관리자 대시보드에서 실시간 데이터를 안정적으로 시각화할 수 있는 환경을 구축할 수 있었으며, 외부 API 의존성이 높은 시스템에서도 안정적인 데이터 제공이 가능하도록 개선했습니다. 이 경험을 통해 서비스 안정성과 사용자 경험을 함께 고려하는 개발 역량을 기를 수 있었습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 지원한 회사에 대한 포부 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">지원한 회사에 대한 포부</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  입사 후에는 주어진 요구사항을 빠르게 이해하고, 이를 실제 서비스 화면으로 구현하는 데 집중하여 팀에 실질적으로 기여하는 인턴이 되고자 합니다.
                </p>
                <p>
                  특히 데이터 기반 정보를 사용자에게 직관적으로 전달하는 UI 구현에 강점을 발휘하고 싶습니다. 프로젝트 경험을 통해 데이터 시각화와 대시보드 구현을 수행해온 만큼, 교육생의 역량 데이터를 효과적으로 표현하는 데 기여할 수 있다고 생각합니다.
                </p>
                <p>
                  또한 Django 기반 개발 경험을 바탕으로 React와 같은 프론트엔드 프레임워크 학습을 병행하여 컴포넌트 기반 UI 설계 역량을 강화하고, 장기적으로는 데이터와 사용자 경험을 연결하는 프론트엔드 개발자로 성장하고자 합니다.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
