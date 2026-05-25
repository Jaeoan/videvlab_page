import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-violet-600">비데브랩</span>
          <p className="text-sm text-gray-500 mt-2">계속하려면 로그인하세요</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">비밀번호</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
              />
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-violet-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors"
            >
              로그인
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-400">
            계정이 없으신가요?{' '}
            <button className="text-violet-600 font-medium hover:underline">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  )
}
