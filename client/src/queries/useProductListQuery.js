import { gql } from "@apollo/client";

export const Product_List = gql`
query Products {
    products(currentPage: 1, pageSize: 6, filter: { category_uid: { eq: "Mjc=" } }) {
        total_count
        items {
            __typename
            sku
            url_key
            url_path
            url_rewrites {
                url
            }
            name
            small_image {
                url
            }
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
        }
        aggregations {
            options {
                count
                label
                value
            }
            attribute_code
            count
            label
        }
        sort_fields {
            options {
                value
                label
            }
            default
        }
    }
}
`;