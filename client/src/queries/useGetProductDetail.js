import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAIL_BY_URL = gql`
query Products ($productName : String!){
    products(filter: { url_key: { eq: $productName  } }) {
        items {
            __typename
            sku
            url_key
            name
            description {
                html
            }
            image {
                label
                url
            }
            thumbnail {
                label
                url
            }
            stock_status
            meta_description
            meta_keyword
            meta_title
            price_range {
                minimum_price {
                    regular_price {
                        value
                        currency
                    }
                    final_price {
                        value
                        currency
                    }
                    discount {
                        amount_off
                        percent_off
                    }
                }
            }
            media_gallery {
                __typename
                disabled
                url
                label
                position
            }
            categories {
                __typename
                uid
                name
                image
            }
            ... on ConfigurableProduct {
                price_range {
                    maximum_price {
                        regular_price {
                            value
                            currency
                        }
                        final_price {
                            value
                            currency
                        }
                        discount {
                            amount_off
                            percent_off
                        }
                    }
                }
                configurable_options {
                    label
                    attribute_code
                    values {
                        value_index
                        label
                        default_label
                        swatch_data {
                            __typename
                            value
                        }
                    }
                }
                variants {
                    attributes {
                        code
                        value_index
                    }
                    product {
                        sku
                        name
                        description {
                            html
                        }
                        image {
                            label
                            url
                        }
                        thumbnail {
                            label
                            url
                        }
                        url_key
                        stock_status
                        color
                        price_range {
                            minimum_price {
                                regular_price {
                                    value
                                    currency
                                }
                                final_price {
                                    value
                                    currency
                                }
                                discount {
                                    amount_off
                                    percent_off
                                }
                            }
                        }
                        media_gallery {
                            __typename
                            disabled
                            url
                            label
                            position
                        }
                        categories {
                            __typename
                            uid
                            name
                            image
                        }
                        staged
                    }
                }
            }
            ... on GroupedProduct {
                items {
                    position
                    qty
                    product {
                        __typename
                        sku
                        name
                        price_range {
                            minimum_price {
                                regular_price {
                                    value
                                    currency
                                }
                                final_price {
                                    value
                                    currency
                                }
                                discount {
                                    amount_off
                                    percent_off
                                }
                            }
                        }
                    }
                }
            }
            ... on BundleProduct {
                price_range {
                    maximum_price {
                        regular_price {
                            value
                            currency
                        }
                        final_price {
                            value
                            currency
                        }
                        discount {
                            amount_off
                            percent_off
                        }
                    }
                }
            }
            staged
            ... on ConfigurableProduct {
                configurable_options {
                    values {
                        uid
                    }
                }
                variants {
                    attributes {
                        uid
                    }
                }
            }
        }
    }
}
`;