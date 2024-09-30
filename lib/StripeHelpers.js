export const stripeVariables = {
    basic : process.env.NODE_ENV === 'development'
            ? 'price_1Q4hrkRxUd9CVk8lSGUPrkHa'
            : '',
    professional : process.env.NODE_ENV === 'development'
                    ? 'price_1Q4hM6RxUd9CVk8lXDIw89Gz'
                    : '',
    enterprise : process.env.NODE_ENV === 'development'
    ? 'price_1Q4hlhRxUd9CVk8lhdpI8hhJ'
    : '',
}