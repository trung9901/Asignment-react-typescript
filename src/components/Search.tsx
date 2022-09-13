import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div>

            <div className="header_search theme-searchs">
                <form action="/search" className="input-group search-bar theme-header-search-form ultimate-search" role="search">
                    <input type="text" aria-label="Tìm sản phẩm" name="query" autoComplete="off" placeholder="Tìm kiếm sản phẩm..." className="search-auto input-group-field auto-search" required />
                    <input type="hidden" name="type" defaultValue="product" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn icon-fallback-text" aria-label="Justify">
                            <svg enableBackground="new 0 0 612.01 612.01" version="1.1" viewBox="0 0 612.01 612.01" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <path d="m606.21 578.71-158.01-155.49c41.378-44.956 66.802-104.41 66.802-169.84-0.02-139.95-115.3-253.39-257.51-253.39s-257.49 113.44-257.49 253.39 115.28 253.39 257.49 253.39c61.445 0 117.8-21.253 162.07-56.586l158.62 156.1c7.729 7.614 20.277 7.614 28.006 0 7.747-7.613 7.747-19.971 0.018-27.585zm-348.72-110.91c-120.33 0-217.87-95.993-217.87-214.41s97.543-214.41 217.87-214.41c120.33 0 217.87 95.993 217.87 214.41s-97.542 214.41-217.87 214.41z" />
                            </svg>
                        </button>
                    </span>
                </form>
            </div>

        </div>
    )
}

export default Search