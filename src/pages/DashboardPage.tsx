import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Link2, Plus, Pencil, Trash2, GripVertical,
  ToggleLeft, ToggleRight, BarChart2, MessageCircle,
  LogOut, ExternalLink, X, Check,
} from 'lucide-react'
    
type Platform = 'coupang' | 'naver' | 'tenping' | 'adpick' | 'custom'

type LinkItem = {
  id: string
  title: string
  url: string
  platform: Platform
  enabled: boolean
  clicks: number
}

const PLATFORM_META: Record<Platform, { label: string; color: string; bg: string }> = {
  coupang:  { label: '쿠팡파트너스',     color: 'text-orange-600', bg: 'bg-orange-50' },
  naver:    { label: '네이버 쇼핑파트너', color: 'text-green-600',  bg: 'bg-green-50' },
  tenping:  { label: '텐핑',             color: 'text-blue-600',   bg: 'bg-blue-50' },
  adpick:   { label: '애드픽',           color: 'text-rose-600',   bg: 'bg-rose-50' },
  custom:   { label: '직접 입력',        color: 'text-gray-600',   bg: 'bg-gray-50' },
}

const INITIAL_LINKS: LinkItem[] = [
  { id: '1', title: '겨울 패딩 추천 TOP5', url: 'https://coupang.com/...', platform: 'coupang', enabled: true, clicks: 142 },
  { id: '2', title: '공기청정기 최저가',   url: 'https://naver.com/...',   platform: 'naver',   enabled: true, clicks: 87 },
  { id: '3', title: '인기 스킨케어 세트',  url: 'https://tenping.kr/...',  platform: 'tenping', enabled: false, clicks: 34 },
]

const NAV_ITEMS = [
  { id: 'links',    label: '링크 관리',  icon: Link2 },
  { id: 'stats',    label: '통계',       icon: BarChart2 },
  { id: 'dm',       label: '자동 DM',    icon: MessageCircle },
]

type Modal =
  | { type: 'add' }
  | { type: 'edit'; link: LinkItem }
  | null

export default function DashboardPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('links')
  const [links, setLinks] = useState<LinkItem[]>(INITIAL_LINKS)
  const [modal, setModal] = useState<Modal>(null)

  const [form, setForm] = useState({ title: '', url: '', platform: 'custom' as Platform })

  function openAdd() {
    setForm({ title: '', url: '', platform: 'custom' })
    setModal({ type: 'add' })
  }

  function openEdit(link: LinkItem) {
    setForm({ title: link.title, url: link.url, platform: link.platform })
    setModal({ type: 'edit', link })
  }

  function saveLink() {
    if (!form.title || !form.url) return
    if (modal?.type === 'add') {
      setLinks(prev => [...prev, {
        id: Date.now().toString(),
        ...form,
        enabled: true,
        clicks: 0,
      }])
    } else if (modal?.type === 'edit') {
      setLinks(prev => prev.map(l => l.id === modal.link.id ? { ...l, ...form } : l))
    }
    setModal(null)
  }

  function toggleLink(id: string) {
    setLinks(prev => prev.map(l => l.id === id ? { ...l, enabled: !l.enabled } : l))
  }

  function deleteLink(id: string) {
    setLinks(prev => prev.filter(l => l.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* 상단 헤더 */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-violet-600">비데브랩</span>
          <div className="flex items-center gap-3">
            <a
              href="/testuser"
              target="_blank"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors"
            >
              내 페이지 <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => navigate('/')}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 본문 */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 pb-24">

        {activeTab === 'links' && (
          <div>
            {/* 프로필 미니 카드 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg shrink-0">
                T
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900">testuser</p>
                <p className="text-xs text-gray-400 truncate">linkflow.kr/testuser</p>
              </div>
              <button className="text-xs text-violet-600 border border-violet-200 px-3 py-1.5 rounded-full hover:bg-violet-50 transition-colors shrink-0">
                편집
              </button>
            </div>

            {/* 링크 목록 헤더 */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-sm text-gray-700">
                링크 <span className="text-gray-400 font-normal">({links.length})</span>
              </h2>
              <button
                onClick={openAdd}
                className="flex items-center gap-1.5 bg-violet-600 text-white text-xs px-3.5 py-2 rounded-full hover:bg-violet-700 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> 링크 추가
              </button>
            </div>

            {/* 링크 카드 목록 */}
            <div className="space-y-2">
              {links.length === 0 && (
                <div className="text-center py-14 text-gray-400 text-sm">
                  <Link2 className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                  아직 링크가 없어요.<br />위에서 추가해보세요!
                </div>
              )}
              {links.map((link) => {
                const meta = PLATFORM_META[link.platform]
                return (
                  <div
                    key={link.id}
                    className={`bg-white rounded-2xl border transition-all ${link.enabled ? 'border-gray-100' : 'border-gray-100 opacity-50'}`}
                  >
                    <div className="flex items-center gap-3 p-4">
                      <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{link.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${meta.color} ${meta.bg}`}>
                            {meta.label}
                          </span>
                          <span className="text-xs text-gray-400">{link.clicks} 클릭</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => toggleLink(link.id)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          {link.enabled
                            ? <ToggleRight className="w-5 h-5 text-violet-500" />
                            : <ToggleLeft className="w-5 h-5 text-gray-300" />}
                        </button>
                        <button
                          onClick={() => openEdit(link)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Pencil className="w-4 h-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => deleteLink(link.id)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div>
            <h2 className="font-semibold text-sm text-gray-700 mb-4">통계</h2>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: '총 클릭', value: links.reduce((s, l) => s + l.clicks, 0).toLocaleString() },
                { label: '활성 링크', value: links.filter(l => l.enabled).length },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 border border-gray-100">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50">
                <p className="text-sm font-semibold text-gray-700">링크별 클릭 수</p>
              </div>
              {links.map((link) => (
                <div key={link.id} className="px-4 py-3 flex items-center gap-3 border-b border-gray-50 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate">{link.title}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 shrink-0">{link.clicks}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dm' && (
          <div className="text-center py-16">
            <MessageCircle className="w-10 h-10 mx-auto mb-3 text-violet-200" />
            <p className="font-semibold text-gray-700 mb-1">자동 DM</p>
            <p className="text-sm text-gray-400">인스타그램 계정을 연동하면<br />자동 DM 기능을 사용할 수 있어요</p>
            <button className="mt-5 bg-violet-600 text-white text-sm px-5 py-2.5 rounded-full hover:bg-violet-700 transition-colors">
              인스타그램 연동하기
            </button>
          </div>
        )}
      </main>

      {/* 하단 탭바 (모바일) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40">
        <div className="max-w-2xl mx-auto flex">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-colors ${activeTab === id ? 'text-violet-600' : 'text-gray-400'}`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* 링크 추가/편집 모달 */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setModal(null)} />
          <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-900">
                {modal.type === 'add' ? '링크 추가' : '링크 편집'}
              </h3>
              <button onClick={() => setModal(null)} className="p-1 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">제목</label>
                <input
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="예: 겨울 패딩 추천 TOP5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">URL</label>
                <input
                  value={form.url}
                  onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                  placeholder="https://"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">플랫폼</label>
                <select
                  value={form.platform}
                  onChange={e => setForm(f => ({ ...f, platform: e.target.value as Platform }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all bg-white"
                >
                  {Object.entries(PLATFORM_META).map(([key, val]) => (
                    <option key={key} value={key}>{val.label}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={saveLink}
                className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors"
              >
                <Check className="w-4 h-4" />
                {modal.type === 'add' ? '추가하기' : '저장하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
