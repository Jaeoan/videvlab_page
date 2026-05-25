import { X } from 'lucide-react'

type Props = {
  onClose: () => void
}

export default function InstagramLoginModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 딤드 배경 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* 모달 */}
      <div className="relative w-full max-w-[350px] bg-white rounded-2xl overflow-hidden shadow-2xl">

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-black/10 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* 인스타그램 로그인 UI */}
        <div className="px-10 pt-10 pb-6 flex flex-col items-center">
          {/* 인스타그램 로고 */}
          <svg className="w-36 mb-8" viewBox="0 0 132 42" fill="none">
            <text x="0" y="34" fontFamily="'Billabong', 'Dancing Script', cursive, sans-serif" fontSize="38" fill="#262626">Instagram</text>
          </svg>

          {/* 입력 필드 */}
          <div className="w-full space-y-2 mb-3">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="w-full px-3 py-2.5 text-xs bg-[#fafafa] border border-[#dbdbdb] rounded-md outline-none focus:border-[#a8a8a8] transition-colors placeholder:text-[#737373]"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-3 py-2.5 text-xs bg-[#fafafa] border border-[#dbdbdb] rounded-md outline-none focus:border-[#a8a8a8] transition-colors placeholder:text-[#737373]"
            />
          </div>

          {/* 로그인 버튼 */}
          <button className="w-full py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-80 mb-4"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
            로그인
          </button>

          {/* 구분선 */}
          <div className="flex items-center gap-4 w-full mb-4">
            <div className="flex-1 h-px bg-[#dbdbdb]" />
            <span className="text-xs font-bold text-[#737373]">또는</span>
            <div className="flex-1 h-px bg-[#dbdbdb]" />
          </div>

          {/* Facebook 로그인 */}
          <button className="flex items-center gap-2 text-sm font-bold text-[#385185] mb-4 hover:text-[#1a3460] transition-colors">
            <svg className="w-5 h-5 fill-[#385185]" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook으로 로그인
          </button>

          {/* 비밀번호 찾기 */}
          <a href="#" className="text-xs text-[#00376b] hover:text-[#1a3460] transition-colors">
            비밀번호를 잊으셨나요?
          </a>
        </div>

        {/* 회원가입 영역 */}
        <div className="border-t border-[#dbdbdb] py-4 text-center text-sm text-[#262626]">
          계정이 없으신가요?{' '}
          <a href="#" className="font-bold text-[#0095f6] hover:text-[#1877f2] transition-colors">
            가입하기
          </a>
        </div>

        {/* 앱 다운로드 */}
        <div className="pb-5 text-center">
          <p className="text-xs text-[#262626] mb-3">앱을 다운로드하세요.</p>
          <div className="flex items-center justify-center gap-2">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="App Store" className="h-9" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/EHY6QnZYdNX.png" alt="Google Play" className="h-9" />
          </div>
        </div>
      </div>
    </div>
  )
}
