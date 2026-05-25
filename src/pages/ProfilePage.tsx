import { useParams } from 'react-router-dom'
import { ExternalLink, ChevronRight } from 'lucide-react'

const PLATFORM_STYLE: Record<string, { label: string; emoji: string }> = {
  coupang: { label: '쿠팡파트너스', emoji: '🛒' },
  naver:   { label: '네이버 쇼핑', emoji: '🛍️' },
  tenping: { label: '텐핑',        emoji: '💰' },
  adpick:  { label: '애드픽',      emoji: '📢' },
  custom:  { label: '',            emoji: '🔗' },
}

const MOCK_PROFILE = {
  username: 'jaeoan',
  displayName: '재완이의 쇼핑 리스트',
  bio: '매일 써보고 진짜 좋은 것만 올려요',
  avatarInitial: 'J',
  notice: '🚀  지금 쿠팡 특가 진행 중! 놓치지 마세요   ·   🔥  이번 주 할인 BEST 업데이트',
  links: [
    {
      id: '1',
      type: 'link',
      title: '🧥 겨울 패딩 추천 TOP5',
      subtitle: '쿠팡파트너스',
      platform: 'coupang',
      url: '#',
      emphasized: true,
    },
    {
      id: '2',
      type: 'link',
      title: '💨 공기청정기 최저가 모음',
      subtitle: '네이버 쇼핑파트너',
      platform: 'naver',
      url: '#',
      emphasized: false,
    },
    {
      id: '3',
      type: 'link',
      title: '🧴 인기 스킨케어 세트',
      subtitle: '텐핑',
      platform: 'tenping',
      url: '#',
      emphasized: false,
    },
    {
      id: '4',
      type: 'link',
      title: '📱 갤럭시 S25 최저가 구매',
      subtitle: '쿠팡파트너스',
      platform: 'coupang',
      url: '#',
      emphasized: false,
    },
    {
      id: '5',
      type: 'text',
      title: '☀️ 이번 주 특별 추천',
      subtitle: '매주 업데이트',
    },
    {
      id: '6',
      type: 'link',
      title: '🎁 이번 주 할인 BEST',
      subtitle: '애드픽',
      platform: 'adpick',
      url: '#',
      emphasized: true,
    },
    {
      id: '7',
      type: 'link',
      title: '🏠 홈 인테리어 추천템',
      subtitle: '네이버 쇼핑파트너',
      platform: 'naver',
      url: '#',
      emphasized: false,
    },
  ],
}

export default function ProfilePage() {
  const { username: _username } = useParams()
  const profile = MOCK_PROFILE

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">

      {/* 마퀴 공지 */}
      <div className="w-full overflow-hidden border-b border-white/10 py-2 bg-black">
        <div className="whitespace-nowrap animate-marquee inline-block text-xs font-medium px-6"
          style={{ color: '#AAFF00' }}>
          {profile.notice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {profile.notice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {profile.notice}
        </div>
      </div>

      {/* 컨텐츠 — 폰 너비 */}
      <div className="w-full max-w-[460px] px-5 pt-10 pb-16">

        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center text-center mb-8">
          {/* 아바타 */}
          <div className="relative mb-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-black text-2xl font-black"
              style={{ backgroundColor: '#AAFF00' }}
            >
              {profile.avatarInitial}
            </div>
            {/* 글로우 */}
            <div
              className="absolute inset-0 rounded-full blur-lg opacity-30 -z-10"
              style={{ backgroundColor: '#AAFF00' }}
            />
          </div>
          <h1 className="font-bold text-xl text-white mb-1">{profile.displayName}</h1>
          <p className="text-sm text-white/50">{profile.bio}</p>
        </div>

        {/* 링크 블록들 */}
        <div className="space-y-3">
          {profile.links.map((block) => {

            // 텍스트 블록 (섹션 구분)
            if (block.type === 'text') {
              return (
                <div key={block.id} className="text-center py-3">
                  <p className="text-sm font-semibold text-white/80">{block.title}</p>
                  {block.subtitle && (
                    <p className="text-xs mt-0.5" style={{ color: '#AAFF00' }}>{block.subtitle}</p>
                  )}
                </div>
              )
            }

            // 링크 버튼
            const platform = PLATFORM_STYLE[block.platform ?? 'custom']
            const isEmphasized = block.emphasized

            return (
              <a
                key={block.id}
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-2xl transition-all active:scale-[0.98] relative overflow-hidden"
                style={{
                  backgroundColor: isEmphasized ? '#AAFF00' : '#111111',
                  border: isEmphasized ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-center px-5 py-4 gap-3">
                  <span className="text-xl shrink-0">{platform.emoji}</span>
                  <div className="flex-1 min-w-0 text-left">
                    <p className={`font-semibold text-sm leading-tight ${isEmphasized ? 'text-black' : 'text-white'}`}>
                      {block.title}
                    </p>
                    {block.subtitle && (
                      <p className={`text-xs mt-0.5 font-medium ${isEmphasized ? 'text-black/60' : ''}`}
                        style={!isEmphasized ? { color: '#AAFF00' } : {}}>
                        {block.subtitle}
                      </p>
                    )}
                  </div>
                  <ExternalLink
                    className={`w-4 h-4 shrink-0 transition-opacity ${isEmphasized ? 'text-black/40' : 'text-white/20 group-hover:text-white/50'}`}
                  />
                </div>
                {/* hover 오버레이 */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-white transition-opacity" />
              </a>
            )
          })}
        </div>

        {/* 구분선 */}
        <div className="mt-10 mb-6 border-t border-white/10" />

        {/* 서비스 CTA — 랜딩 요소 합체 */}
        <div className="text-center">
          <p className="text-xs text-white/30 mb-3">나만의 링크 페이지 만들기</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-black text-sm font-bold px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#AAFF00' }}
          >
            비데브랩 시작하기 <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
