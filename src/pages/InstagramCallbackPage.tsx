import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InstagramCallbackPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const error = params.get('error')

    if (error) {
      setErrorMsg(params.get('error_description') ?? '인스타그램 로그인이 취소되었습니다.')
      setStatus('error')
      return
    }

    if (!code) {
      setErrorMsg('인증 코드를 받지 못했습니다.')
      setStatus('error')
      return
    }

    // TODO: 백엔드로 code 전달 → access_token 교환
    // 현재는 code를 콘솔에만 출력 (백엔드 연동 전)
    console.log('Instagram auth code:', code)

    // 임시: 대시보드로 이동
    setStatus('success')
    setTimeout(() => navigate('/dashboard'), 1500)
  }, [navigate])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5">
      <div className="text-center">
        {status === 'loading' && (
          <>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin mx-auto mb-4" />
            <p className="text-white/60 text-sm">인스타그램 인증 중...</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="text-4xl mb-4">✅</div>
            <p className="text-white font-bold mb-1">연동 완료!</p>
            <p className="text-white/40 text-sm">대시보드로 이동합니다...</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-4xl mb-4">❌</div>
            <p className="text-white font-bold mb-1">연동 실패</p>
            <p className="text-white/40 text-sm mb-6">{errorMsg}</p>
            <button
              onClick={() => navigate('/')}
              className="text-sm font-bold text-black px-5 py-2.5 rounded-full"
              style={{ backgroundColor: '#AAFF00' }}
            >
              돌아가기
            </button>
          </>
        )}
      </div>
    </div>
  )
}
