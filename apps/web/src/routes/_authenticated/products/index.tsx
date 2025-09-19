import { createFileRoute } from '@tanstack/react-router'
import {useGetProducts ,getProducts} from '@product-management/api-client'
import {queryClient} from '@/lib/query-client'

/**
 * ルーティング
 */
export const Route = createFileRoute('/_authenticated/products/')({
    loader: () =>
    queryClient.ensureQueryData({
      queryKey: ['getProducts'],
      queryFn: () => getProducts(),
    }),
  component: ProductContainer,
  pendingComponent: () => (<div>Loading...</div>),
})

/**
 * 商品コンテナー層
 * @returns 
 */
function ProductContainer() {

  const {data} = useGetProducts()
  console.log('data',data )
  return <ProductPrecenter />
}

/**
 * 商品プレゼンテーション層
 * @returns 
 */
function ProductPrecenter() {
  return <div>Hello "/_authenticated/products/"!</div>
}
