import { createFileRoute } from '@tanstack/react-router'
import {useGetProducts ,getProducts , type Product} from '@product-management/api-client'
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
  return <ProductPrecenter data={data?.data.data}/>
}

interface ProductPrecenterProps  {
  data : Product[] | undefined
}

/**
 * 商品プレゼンテーション層
 * @returns 
 */
function ProductPrecenter(props : ProductPrecenterProps) {

  console.log('data', props)
  return <div>Hello "/_authenticated/products/"!</div>
}
