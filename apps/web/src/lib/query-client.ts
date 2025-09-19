import { QueryClient  } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,                  // 通信エラー時は1回だけリトライ
      refetchOnWindowFocus: false, // タブ切替で再フェッチしない
      refetchOnReconnect: false,   // オフライン→オンラインで再フェッチしない
      refetchOnMount: false,       // マウント時にキャッシュがあれば再フェッチしない
      staleTime: 1000 * 60 * 5,    // 5分間は新鮮扱い（再フェッチしない）
      gcTime: 1000 * 60 * 30,      // 30分間キャッシュ保持
    },
    mutations: {
      retry: 0, // 更新処理はリトライしない（業務データの二重送信を避ける）
    },
  },
})