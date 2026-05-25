import { BarChart2, ChevronRight, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { redirectToInstagramLogin } from '../utils/instagram'

const LIME = '#AAFF00'

// 제휴 제품 목업 데이터
const DEMO_PRODUCTS = [
  { id: 1, platform: '쿠팡파트너스', platformColor: '#FF6B35', bg: '#1a1208', emoji: '🍹', title: '[쿠팡] 닌자 블렌더 초고속 BL...', discount: 8,  price: '249,000' },
  { id: 2, platform: '네이버 쇼핑',  platformColor: '#03C75A', bg: '#081a10', emoji: '💨', title: '[네이버] 무선 스틱 청소기 시...', discount: 33, price: '459,900' },
  { id: 3, platform: '텐핑',         platformColor: '#4F6EF7', bg: '#08101a', emoji: '🧴', title: '텐핑 인기 스킨케어 세트 봄...', discount: 21, price: '38,000'  },
  { id: 4, platform: '쿠팡파트너스', platformColor: '#FF6B35', bg: '#1a1208', emoji: '🪑', title: '[쿠팡] 패브릭 미드센추리 체어', discount: 40, price: '54,900'  },
  { id: 5, platform: '애드픽',       platformColor: '#FF3B5C', bg: '#1a0810', emoji: '☕', title: '애드픽 홈카페 캡슐 커피머신', discount: 14, price: '154,000' },
  { id: 6, platform: '네이버 쇼핑',  platformColor: '#03C75A', bg: '#081a10', emoji: '😺', title: '[네이버] 리얼 고양이 쿠션 골...', discount: 21, price: '23,800'  },
]

const PLANS = [
  { name: 'Free',     price: '0',      desc: '시작하는 마케터',     features: ['링크 5개', '기본 분석', '공개 프로필'] },
  { name: 'Pro',      price: '9,900',  desc: '성장하는 마케터',     features: ['링크 무제한', '상세 분석', '자동 DM 100건/월', '커스텀 도메인'], popular: true },
  { name: 'Business', price: '29,900', desc: '전문 마케터·에이전시', features: ['모든 Pro 기능', '자동 DM 무제한', '팀 계정 3개', '우선 지원'] },
]

const PLATFORMS = ['쿠팡파트너스', '네이버 쇼핑파트너', '텐핑', '애드픽', '오늘의집', '인스타그램', '스레드', '유튜브']

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white">

      {/* 네비게이션 */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <span className="text-lg font-black" style={{ color: LIME }}>비데브랩</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/50">
            <a href="#features" className="hover:text-white transition-colors">기능</a>
            <a href="#dm" className="hover:text-white transition-colors">자동 DM</a>
            <a href="#pricing" className="hover:text-white transition-colors">요금</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/login')} className="text-sm text-white/50 px-3 py-1.5 hover:text-white transition-colors">
              로그인
            </button>
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-bold text-black px-4 py-1.5 rounded-full transition-opacity hover:opacity-80"
              style={{ backgroundColor: LIME }}
            >
              무료 시작
            </button>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="pt-16 pb-14 px-5 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ backgroundColor: LIME }}
        />
        <div className="max-w-3xl mx-auto relative">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 border"
            style={{ color: LIME, borderColor: `${LIME}40`, backgroundColor: `${LIME}10` }}
          >
            제휴마케팅 특화 플랫폼
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-5">
            링크 하나로<br />
            <span style={{ color: LIME }}>모든 제휴수익</span>을<br className="sm:hidden" /> 연결하세요
          </h1>
          <p className="text-base sm:text-lg text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
            쿠팡, 네이버, 텐핑, 애드픽 등 모든 제휴 링크를 한 페이지에.
            인스타·스레드 자동 DM까지 한 플랫폼에서.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-2 font-bold text-black px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: LIME }}
            >
              무료로 시작하기 <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/jaeoan')}
              className="text-white/60 px-8 py-3.5 rounded-full text-sm border border-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              예시 페이지 보기
            </button>
          </div>
          <p className="mt-4 text-xs text-white/30">신용카드 불필요 · 7일 무료 체험</p>
        </div>

        {/* 플랫폼 뱃지 */}
        <div className="mt-12 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 no-scrollbar">
            {PLATFORMS.map((p) => (
              <span key={p} className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 border border-white/10 text-white/40">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 기능 1: 제휴링크 통합 관리 ─── */}
      <section id="features" className="py-14 sm:py-20 px-5 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ color: LIME, borderColor: `${LIME}30`, backgroundColor: `${LIME}10` }}>
              기능 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2">
              💰 제휴링크 통합 관리
            </h2>
            <p className="text-sm text-white/40">
              쿠팡파트너스, 네이버 쇼핑파트너, 텐핑, 애드픽, 오늘의집 등<br className="hidden sm:block" />
              플랫폼 상관없이 제품 링크를 한 페이지에 모아 관리하세요.
            </p>
          </div>

          {/* 제품 카드 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DEMO_PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                {/* 이미지 영역 */}
                <div
                  className="aspect-square flex items-center justify-center text-4xl sm:text-5xl"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.emoji}
                </div>
                {/* 정보 영역 */}
                <div className="p-3 bg-[#111]">
                  <span
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2"
                    style={{ color: p.platformColor, backgroundColor: `${p.platformColor}15` }}
                  >
                    {p.platform}
                  </span>
                  <p className="text-xs text-white/80 leading-snug mb-2 line-clamp-2">{p.title}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black" style={{ color: LIME }}>{p.discount}%</span>
                    <span className="text-sm font-bold text-white">{p.price}원</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-center text-white/30">
            ↑ 실제 서비스에서 보이는 제품 카드 예시
          </p>
        </div>
      </section>

      {/* ─── 기능 2: 소셜 자동 DM ─── */}
      <section id="dm" className="py-14 sm:py-20 px-5 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ color: LIME, borderColor: `${LIME}30`, backgroundColor: `${LIME}10` }}>
              기능 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2">
              💬 소셜 자동 DM
            </h2>
            <p className="text-sm text-white/40">
              인스타그램·스레드 계정을 연동하고 팔로워에게 자동으로 DM을 보내세요.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* 인스타그램 카드 */}
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/10 to-[#fcb045]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">인스타그램</p>
                    <p className="text-xs text-white/40">Instagram 로그인으로 인증</p>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 mb-3">
                  <p className="text-xs text-white/50 mb-2">자동 DM 메시지</p>
                  <p className="text-sm text-white leading-relaxed">
                    안녕하세요! 🛒 제가 직접 써본 제품들 링크 모아뒀어요. 한번 확인해보세요!
                  </p>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-80"
                  style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                  onClick={redirectToInstagramLogin}
                >
                  Instagram으로 로그인
                </button>
              </div>
              <div className="px-5 py-3 bg-[#111] border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>발송 대상: 팔로워 / 댓글 작성자</span>
                  <span style={{ color: LIME }}>자동화</span>
                </div>
              </div>
            </div>

            {/* 스레드 카드 */}
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 bg-[#111]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white">
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.593 0c-.534 0-1.01.048-1.386.115C9.13.46 7.48 1.98 6.7 4.02c-.78 2.037-.587 4.31.516 6.187.345.589.745 1.13 1.202 1.598-.273.56-.504 1.124-.7 1.685a7.963 7.963 0 0 0-.343 1.502c-.056.405-.074.812-.053 1.203.038.702.19 1.382.444 2.02.512 1.283 1.405 2.354 2.553 3.117C11.47 22.097 12.724 22.5 14 22.5c1.276 0 2.53-.403 3.681-1.168 1.148-.763 2.041-1.834 2.553-3.117.254-.638.406-1.318.444-2.02.021-.391.003-.798-.053-1.203a7.963 7.963 0 0 0-.343-1.502c-.196-.561-.427-1.125-.7-1.685.457-.468.857-1.009 1.202-1.598 1.103-1.877 1.296-4.15.516-6.187C20.52 1.98 18.87.46 16.793.115 16.417.048 15.941 0 15.407 0h-2.814Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">스레드 (Threads)</p>
                    <p className="text-xs text-white/40">Instagram 계정으로 자동 연동</p>
                  </div>
                </div>
                <div className="bg-black/60 rounded-xl p-4 mb-3">
                  <p className="text-xs text-white/50 mb-2">자동 DM 메시지</p>
                  <p className="text-sm text-white leading-relaxed">
                    안녕하세요! 🛒 제가 직접 써본 제품들 링크 모아뒀어요. 한번 확인해보세요!
                  </p>
                </div>
                <button className="w-full py-2.5 rounded-xl text-sm font-bold bg-white text-black transition-opacity hover:opacity-80">
                  Threads 연동하기
                </button>
              </div>
              <div className="px-5 py-3 bg-[#0d0d0d] border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>발송 대상: 팔로워 / 멘션 사용자</span>
                  <span style={{ color: LIME }}>자동화</span>
                </div>
              </div>
            </div>
          </div>

          {/* DM 흐름 설명 */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { step: '01', title: '계정 로그인', desc: '인스타 / 스레드 OAuth 인증' },
              { step: '02', title: '메시지 작성', desc: '템플릿 설정 + 링크 자동 삽입' },
              { step: '03', title: '자동 발송', desc: '스케줄 설정 후 자동 DM 발송' },
            ].map((s) => (
              <div key={s.step} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <p className="text-2xl font-black mb-1" style={{ color: `${LIME}40` }}>{s.step}</p>
                <p className="text-xs font-bold text-white mb-1">{s.title}</p>
                <p className="text-[11px] text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 기능 3: 분석 ─── */}
      <section className="py-14 sm:py-20 px-5 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ color: LIME, borderColor: `${LIME}30`, backgroundColor: `${LIME}10` }}>
              기능 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2">
              <BarChart2 className="inline w-6 h-6 mr-2 mb-1" style={{ color: LIME }} />
              클릭 & 전환 분석
            </h2>
            <p className="text-sm text-white/40">링크별 클릭 수, 플랫폼별 전환율을 실시간으로 확인하세요.</p>
          </div>

          {/* 분석 목업 */}
          <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
              <Send className="w-4 h-4" style={{ color: LIME }} />
              <span className="text-sm font-bold text-white">이번 달 성과</span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: '총 클릭', value: '2,847' },
                  { label: '활성 링크', value: '12' },
                  { label: '이번 달 수익', value: '₩84,200' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                    <p className="text-lg font-black text-white">{s.value}</p>
                    <p className="text-[11px] text-white/40 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* 링크별 바 차트 */}
              <div className="space-y-3">
                {[
                  { title: '겨울 패딩 추천 TOP5', platform: '쿠팡', clicks: 1200, color: '#FF6B35' },
                  { title: '공기청정기 최저가',   platform: '네이버', clicks: 840,  color: '#03C75A' },
                  { title: '인기 스킨케어 세트',  platform: '텐핑',  clicks: 480,  color: '#4F6EF7' },
                  { title: '이번 주 할인 BEST',   platform: '애드픽', clicks: 327, color: '#FF3B5C' },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white/60 truncate max-w-[60%]">{item.title}</span>
                      <span className="text-xs font-bold text-white shrink-0">{item.clicks.toLocaleString()} 클릭</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${(item.clicks / 1200) * 100}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 요금 */}
      <section id="pricing" className="py-14 sm:py-20 px-5 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">심플한 요금제</h2>
            <p className="text-sm text-white/40">7일 무료 체험 후 결정하세요</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-5 text-left border transition-colors"
                style={{
                  backgroundColor: plan.popular ? `${LIME}10` : 'transparent',
                  borderColor: plan.popular ? `${LIME}60` : 'rgba(255,255,255,0.08)',
                }}
              >
                {plan.popular && (
                  <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 text-black" style={{ backgroundColor: LIME }}>
                    가장 인기
                  </span>
                )}
                <h3 className="font-black text-base mb-0.5 text-white">{plan.name}</h3>
                <p className="text-white/40 text-xs mb-4">{plan.desc}</p>
                <div className="mb-5">
                  <span className="text-2xl font-black text-white">₩{plan.price}</span>
                  <span className="text-white/30 text-xs">/월</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                      <span style={{ color: LIME }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-2.5 rounded-full text-sm font-bold transition-opacity hover:opacity-80"
                  style={plan.popular
                    ? { backgroundColor: LIME, color: '#000' }
                    : { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }
                  }
                >
                  시작하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-5 text-center border-t border-white/10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black mb-3">지금 바로 시작하세요</h2>
          <p className="text-sm text-white/40 mb-8">신용카드 없이 7일 무료로 모든 기능을 사용해보세요</p>
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center gap-2 font-bold text-black px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: LIME }}
          >
            무료로 시작하기 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-white/10 py-6 px-5 text-center text-xs text-white/20">
        © 2026 비데브랩. All rights reserved.
      </footer>

    </div>
  )
}
