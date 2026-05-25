const APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID
const REDIRECT_URI = import.meta.env.VITE_INSTAGRAM_REDIRECT_URI

export function redirectToInstagramLogin() {
  const params = new URLSearchParams({
    enable_fb_login: '0',
    force_authentication: '1',
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'instagram_business_basic,instagram_business_manage_messages',
  })

  window.location.href = `https://www.instagram.com/oauth/authorize?${params.toString()}`
}
