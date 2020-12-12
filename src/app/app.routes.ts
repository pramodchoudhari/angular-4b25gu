/**
 * Created by andrew.yang on 7/27/2017.
 */
export const appRoutes = [
    {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
    },
    // {
    //     path: 'category',
    //     loadChildren: './pages/category/category.module#CategoryModule'
    // },
    // {
    //     path: 'product',
    //     loadChildren: './pages/product/product.module#ProductModule'
    // }, {
    //     path: 'products',
    //     loadChildren: './pages/products/products.module#ProductsModule'
    // }, 
    {
        path: 'product-list',
        loadChildren: './pages/product-list/product-list.module#ProductListModule'
    },
    // {
    //     path: 'cart',
    //     loadChildren: './pages/cart/cart-page.module#CartPageModule'
    // },
    // {
    //     path: 'checkout',
    //     loadChildren: './pages/checkout/checkout.module#CheckoutPageModule'
    // },
    // {
    //     path: '**',
    //     loadChildren: './pages/category/category.module#CategoryModule'
    // }
];