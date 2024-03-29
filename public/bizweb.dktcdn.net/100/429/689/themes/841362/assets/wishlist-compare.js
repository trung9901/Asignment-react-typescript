var Ego = {};
Ego.General = {
    init: function () {

        Ego.Wishlist.init();


        Ego.Compare.init();

    },
}

Ego.Wishlist = {
    init: function () {
        this.setWishlistProductLoop();
        Ego.Wishlist.wishlistProduct();
    },
    setWishlistProductLoop: function () {
        $('body').on('click', '.remove-wishlist', function (e) {
            Ego.Wishlist.removeWishlist($(this).attr('data-wish'));
        })
        $('body').on('click', '.setWishlist', function (e) {
            //debugger;
            e.preventDefault();
            if ($(this).hasClass('active')) {
                Ego.Wishlist.removeWishlist($(this).attr('data-wish'));
                var InfoText = 'Bạn vừa bỏ sản phẩm ra khỏi mục yêu thích.';
                InfoNoti(InfoText);
            } else {
                var phand = [];
                var handle = $(this).attr('data-wish');
                if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
                    var las = Cookies.getJSON('ego_wishlist_products');
                    if ($.inArray(handle, las) === -1) {
                        phand = [handle];
                        for (var i = 0; i < las.length; i++) {
                            phand.push(las[i]);
                            if (phand.length > 100) {
                                break;
                            }
                        }
                        Cookies.set('ego_wishlist_products', phand, {
                            expires: 15,
                            sameSite: 'None',
                            secure: true
                        });
                    }
                } else {
                    phand = [handle];
                    Cookies.set('ego_wishlist_products', phand, {
                        expires: 15,
                        sameSite: 'None',
                        secure: true
                    });
                }
                Ego.Wishlist.wishlistProduct();
                var SuccessText = "Bạn vừa thêm 1 sản phẩm vào mục yêu thích thành công bấm <a style='color:#2196f3' href='/yeu-thich'>vào đây</a> để tới trang yêu thích";
                SuccessNoti(SuccessText);
            }
        })
    },
    wishlistProduct: function () {
        if ($('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').length > 0) {
            if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
                $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').html('')
                var last_wishlist_pro_array = Cookies.getJSON('ego_wishlist_products');
                Ego.Wishlist.activityWishlist();
                var recentview_promises = [];
                for (var i = 0; i < 100; i++) {
                    if (typeof last_wishlist_pro_array[i] == 'string') {
                        var promise = new Promise(function (resolve, reject) {
                            $.ajax({
                                url: '/products/' + last_wishlist_pro_array[i] + '?view=wish',
                                async: false,
                                success: function (product) {
                                    resolve({
                                        error: false,
                                        data: product
                                    });
                                },
                                error: function (err) {
                                    if (err.status === 404) {
                                        try {
                                            var u = ((this.url.split('?'))[0]).replace('/products/', '');
                                            resolve({
                                                error: true,
                                                handle: u
                                            });
                                        } catch (e) {
                                            resolve({
                                                error: false,
                                                data: ''
                                            })
                                        }
                                    } else {
                                        resolve({
                                            error: false,
                                            data: ''
                                        });
                                    }
                                }
                            })
                        });
                        recentview_promises.push(promise);

                    }
                }
                Promise.all(recentview_promises).then(function (values) {
                    if (values.length > 0) {
                        var x = [];
                        setTimeout(function () {
                            $('.headerWishlistCount').html(values.length)
                        }, 500)
                        $.each(values, function (i, v) {
                            if (v.error) {
                                x.push(v.handle);
                            } else {
                                $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .page-wishlist').append(v.data);
                                $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .page-wishlist').show();
                                awe_lazyloadImage();
                                //theme.init(); // gọi lại ajax cart
                            }
                            console.log(values.length);

                        });
                        if (x.length > 0) {
                            var new_last_viewed_pro_array = [];
                            $.each(last_wishlist_pro_array, function (i, v) {
                                if ($.inArray(v, x) === -1) {
                                    new_last_viewed_pro_array.push(v);
                                }

                            })
                            if (new_last_viewed_pro_array.length > 0) {
                                Cookies.set('last_viewed_products', new_last_viewed_pro_array, {
                                    expires: 180,
                                    sameSite: 'None',
                                    secure: true
                                });
                            }
                        }
                    } else {
                        $('.headerWishlistCount').html('0')
                        $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
                    }
                });
            } else {
                $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
            }
        } else {
            $('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
        }
    },
    activityWishlist: function () {
        var last_wishlist_pro_array = Cookies.getJSON('ego_wishlist_products');
        $.each(last_wishlist_pro_array, function (i, v) {
            $('.setWishlist[data-wish="' + v + '"]').html('<svg enable-background="new 0 0 391.837 391.837" version="1.1" viewBox="0 0 391.84 391.84" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m285.26 35.528c58.743 0.286 106.29 47.836 106.58 106.58 0 107.62-195.92 214.2-195.92 214.2s-195.92-108.15-195.92-214.2c0-58.862 47.717-106.58 106.58-106.58 36.032-0.281 69.718 17.842 89.339 48.065 19.755-30.076 53.354-48.152 89.338-48.065z" fill="#D7443E"/> </svg>').addClass('active').attr('title', 'Bỏ yêu thích');
        })
    },

    removeWishlist: function (handle) {
        var phand = [];

        $('a[data-wish="' + handle + '"]').html('<svg enable-background="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"/> </svg>').removeClass('active').attr('title', 'Thêm vào yêu thích');
        if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
            var las = Cookies.getJSON('ego_wishlist_products');
            var flagIndex = $.inArray(handle, las);
            las.splice(flagIndex, 1)
            Cookies.set('ego_wishlist_products', las, {
                expires: 15,
                sameSite: 'None',
                secure: true
            });
        } else {
            phand = [handle];
            Cookies.set('ego_wishlist_products', phand, {
                expires: 15,
                sameSite: 'None',
                secure: true
            });
        }
        Ego.Wishlist.wishlistProduct(3, 5);
    }
}


Ego.Compare = {

    init: function () {
        this.setCompareProductLoop();
        this.compareProduct(3, 5);
        this.removeCompare();
    },
    setCompareProductLoop: function () {
        var self = this;
        $('body').on('click', '.setCompare:not(.active)', function (e) {
            e.preventDefault();
            var phand = [];
            var typeP = [];
            var handle = $(this).data('compare');
            var countCompare = $('.headerCompareCount').text();

            var typeOn = $(this).data('type');


            if (countCompare == '0') {
                typeP = [typeOn];
                Cookies.set('ego_compare_type', typeP, {
                    expires: 15,
                    sameSite: 'None',
                    secure: true
                });
            }
            var storedType = Cookies.getJSON('ego_compare_type');

            if (storedType.includes(typeOn)) {
                if (countCompare <= '2') {
                    if (document.cookie.indexOf('ego_compare_products') !== -1) {
                        var las = Cookies.getJSON('ego_compare_products');
                        if ($.inArray(handle, las) === -1) {
                            phand = [handle];
                            for (var i = 0; i < las.length; i++) {
                                phand.push(las[i]);
                                if (phand.length > 15) {
                                    break;
                                }
                            }
                            Cookies.set('ego_compare_products', phand, {
                                expires: 15,
                                sameSite: 'None',
                                secure: true
                            });
                        }
                    } else {
                        phand = [handle];
                        Cookies.set('ego_compare_products', phand, {
                            expires: 15,
                            sameSite: 'None',
                            secure: true
                        });
                    }
                    self.compareProduct(3, 5);
                    self.activityCompare();
                    var SuccessText = "Bạn vừa thêm 1 sản phẩm vào mục so sánh thành công bấm <a style='color:#2196f3' href='/so-sanh-san-pham'>vào đây</a> để tới trang so sánh";
                    SuccessNoti(SuccessText);
                } else {
                    var ErrorText = 'Bạn chỉ có thể so sánh tối đa 3 sản phẩm';
                    ErrorNoti(ErrorText);
                }
            } else {
                var ErrorText = 'Sản phẩm so sánh phải cùng loại';
                ErrorNoti(ErrorText);
            }
        })
    },




    compareProduct: function (items, margin) {
        var self = this;


        if (document.cookie.indexOf('ego_compare_products') !== -1) {
            $('.sidebarAllMainCompare .sidebarAllBody').html('');
            var last_compare_pro_array = Cookies.getJSON('ego_compare_products');
            self.activityCompare();
            var recentview_promises = [];
            for (var i = 0; i < 3; i++) {
                if (typeof last_compare_pro_array[i] == 'string') {
                    var promise = new Promise(function (resolve, reject) {
                        $.ajax({
                            url: '/products/' + last_compare_pro_array[i] + '?view=compare',
                            async: false,
                            success: function (product) {
                                resolve({
                                    error: false,
                                    data: product
                                });
                            },
                            error: function (err) {
                                if (err.status === 404) {
                                    try {
                                        var u = ((this.url.split('?'))[0]).replace('/products/', '');
                                        resolve({
                                            error: true,
                                            handle: u
                                        });
                                    } catch (e) {
                                        resolve({
                                            error: false,
                                            data: ''
                                        })
                                    }
                                } else {
                                    resolve({
                                        error: false,
                                        data: ''
                                    });
                                }
                            }
                        })
                    });
                    recentview_promises.push(promise);
                }
            }
            Promise.all(recentview_promises).then(function (values) {
                var x = [];
                setTimeout(function () {
                    $('.headerCompareCount').html(values.length)
                }, 500)
                $.each(values, function (i, v) {
                    if (v.error) {
                        x.push(v.handle);
                    } else {
                        /*
     $('.sidebarAllMainCompare .sidebarAllBody').append(v.data);
     $('.sidebarAllMainCompare .sidebarAllBody').show();
     */
                    }
                });

            });
            if ($('#pageCompare').length >= 1) {
                var selfPage = $('#pageCompare').find('table');
                for (var i = 0; i < 3; i++) {
                    if (typeof last_compare_pro_array[i] == 'string') {
                        var promise = new Promise(function (resolve, reject) {
                            $.ajax({
                                url: '/products/' + last_compare_pro_array[i] + '?view=compare_json',
                                async: false,
                                success: function (product) {
                                    //debugger;
                                    var parseData = $.parseJSON(product);

                                    selfPage.find(`tr.image td:nth-child(${i + 2})`).html(parseData.image ? `<img class="img-fluid" src="${parseData.image}" alt="${parseData.title}"/>` : "./public/bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif");
                                    selfPage.find(`tr.title td:nth-child(${i + 2})`).html(`<h3><a href="${parseData.url}">${parseData.title}</a></h3>`);
                                    selfPage.find(`tr.price td:nth-child(${i + 2})`).html(parseData.price);
                                    selfPage.find(`tr.available td:nth-child(${i + 2})`).html(parseData.available);
                                    selfPage.find(`tr.type td:nth-child(${i + 2})`).html(parseData.type);
                                    selfPage.find(`tr.vendor td:nth-child(${i + 2})`).html(parseData.vendor);
                                    selfPage.find(`tr.description td:nth-child(${i + 2})`).html(parseData.description);
                                },
                                error: function (err) {
                                    $('#alertError').modal('show').find('.modal-body').html('Xin lỗi, có vấn đề khi thực hiện so sánh, vui lòng thử lại sau!');
                                }
                            })
                        });
                        recentview_promises.push(promise);
                    }
                }
            }
            setTimeout(function () {
                var countLenght = $('.headerCompareCount').text();
                console.log(countLenght, 'ddd');
                if (countLenght == '0') {
                    $('.null-table').removeClass('d-none').addClass('d-block');
                    $('.compare-table').addClass('d-none').removeClass('d-block');
                } else {
                    $('.null-table').addClass('d-none').removeClass('d-block');
                    $('.compare-table').removeClass('d-none').addClass('d-block');
                }
            }, 500)
        }

    },
    activityCompare: function () {

        var last_wishlist_pro_array = Cookies.getJSON('ego_compare_products');
        $.each(last_wishlist_pro_array, function (i, v) {
            $('.setCompare[data-compare="' + v + '"]').addClass('active').css('cursor', 'default').attr('title', 'Sản phẩm này đã được thêm');
        })
        setTimeout(function () {
            $('.headerCompareCount').html($('.itemMainCompare').length)
        }, 500)
    },

    removeCompare: function () {
        var self = this;
        $('body').on('click', '.itemMainCompare .removeItem', function (e) {
            e.preventDefault();
            var phand = [];
            var handle = $(this).attr('data-compare');
            $('a[data-compare="' + handle + '"]').removeClass('active').css('cursor', 'pointer').attr('title', 'Thêm vào so sánh');
            if (document.cookie.indexOf('ego_compare_products') !== -1) {
                var las = Cookies.getJSON('ego_compare_products');
                var flagIndex = $.inArray(handle, las);
                las.splice(flagIndex, 1)
                Cookies.set('ego_compare_products', las, {
                    expires: 15,
                    sameSite: 'None',
                    secure: true
                });
            } else {
                Cookies.set('ego_compare_products', phand, {
                    expires: 15,
                    sameSite: 'None',
                    secure: true
                });
            }

            self.compareProduct(3, 5);
            location.reload();
            if (countCompare == '0') {
                Cookies.set('ego_compare_products', phand, {
                    expires: 15,
                    sameSite: 'None',
                    secure: true
                });
            }

        })

    }
}




Ego.Wishlist.init();



Ego.Compare.init();