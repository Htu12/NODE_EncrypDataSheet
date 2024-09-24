var dbCauHoi = [
    {
        id: 1,
        kieu: "a",
        cau_hoi: "Giới tính",
        chi_bao: {},
        ma_hoa: {
            "Nam": 1,
            "Nữ": 2
        }
    },
    {
        id: 2,
        kieu: "a",
        cau_hoi: "Tuổi của anh/chị",
        chi_bao: {},
        ma_hoa: {
            "Từ 18 - 25 tuổi": 1,
            "Từ 26 - 35 tuổi": 2,
            "Từ 36 - 50 tuổi": 3,
            "Trên 50 tuổi": 4
        }
    },
    {
        id: 3,
        kieu: "a",
        cau_hoi: "Mức độ chi tiêu cá nhân của anh/chị hàng tháng?",
        chi_bao: {},
        ma_hoa: {
            "Dưới 5 triệu đồng": 1,
            "Từ 5 đến dưới 10 triệu đồng": 2,
            "Từ 10 đến dưới 15 triệu đồng": 3,
            "Trên 15 triệu đồng": 4
        }
    },
    {
        id: 4,
        kieu: "a",
        cau_hoi: "Bạn đã từng sử dụng sản phẩm hạt nêm Aji-ngon Heo?",
        chi_bao: {},
        ma_hoa: {
            "Đã từng": 1,
            "Chưa từng": 2
        }
    },
    {
        id: 5,
        kieu: "a",
        cau_hoi: "Tần suất mua hạt nêm Aji-ngon Heo?",
        chi_bao: {},
        ma_hoa: {
            "Dưới 1 lần/ 3 tháng": 1,
            "1 - 2 lần/ 3 tháng": 2,
            "Từ 3 lần/ 3 tháng trở lên": 3
        }
    },
    {
        id: 6,
        kieu: "a",
        cau_hoi: "Lý do lựa chọn sản phẩm hạt nêm?",
        chi_bao: {},
        ma_hoa: {
            "Hương vị": 1,
            "Bao bì": 2,
            "Thương hiệu": 3,
            "Giá cả": 4
        }
    },
    {
        id: 7,
        kieu: "a",
        cau_hoi: "Nơi mua sản phẩm  hạt nêm Aji-ngon Heo thường xuyên nhất?",
        chi_bao: {},
        ma_hoa: {
            "Siêu thị": 1,
            "Cửa hàng tạp hóa": 2,
            "Mua sắm online": 3,
            "Kênh khác": 4
        }
    },
    {
        id: 8,
        kieu: "a",
        cau_hoi: "Bạn thích chương trình khuyến mại nào sau đây?",
        chi_bao: {},
        ma_hoa: {
            "Chương trình cào trúng thưởng": 1,
            "Quà tặng kèm": 2,
            "Chương trình giảm giá": 3
        }
    },
    {
        id: 9,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về bao bì sản phẩm hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 4,
            chi_tiet: {
                1: "Thiết kế bao bì của hạt nêm Aji-ngon Heo đẹp, độc đáo",
                2: "Bao bì có chất liệu an toàn với môi trường",
                3: "Thông tin trên bao bì đầy đủ và đảm bảo độ tin cậy",
                4: "Hình ảnh bao bì sắc nét và bắt mắt"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 10,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về chất lượng của sản phẩm hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 3,
            chi_tiet: {
                1: "Hạt nêm Aji-ngon Heo có thành phần an toàn với người tiêu dùng",
                2: "Hạt nêm Aji-ngon Heo có vị đậm đà, thơm ngon khi sử dụng",
                3: "Hạt nêm Aji-ngon Heo là gia vị rất phù hợp khi nấu nướng"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 11,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về giá cả của Hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 4,
            chi_tiet: {
                1: "Giá cả không quá cao so với các sản phẩm cùng loại",
                2: "Giá cả phù hợp với khả năng thanh toán của người tiêu dùng",
                3: "Giá cả ổn định, ít có sự biến động",
                4: "Giá trị sử dụng có tương xứng với giá cả của sản phẩm Hạt nêm Aji-ngon Heo"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 12,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn với những nhận định dưới đây về chương trình khuyến mãi của Hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 4,
            chi_tiet: {
                1: "Thường xuyên có các chương trình khuyến mãi",
                2: "Giá trị các chương trình khuyến mãi xứng đáng với sự quan tâm của người tiêu dùng",
                3: "Nội dung chương trình khuyến mãi rõ ràng và đáng tin cậy",
                4: "Hình thức khuyến mãi phong phú, đa dạng"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 13,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về phân phối của Hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 3,
            chi_tiet: {
                1: "Sản phẩm Hạt nêm Aji-ngon Heo được bán ở các cửa hàng, đại lý, siêu thị quanh khu vực của anh/chị",
                2: "Anh/chị có thể dễ dàng mua sản phẩm Hạt nêm Aji-ngon Heo trên các sàn thương mại điện tử",
                3: "Anh/chị dễ dàng tìm thấy sản phẩm bia Hạt nêm Aji-ngon Heo tại các điểm bán"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 14,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về lợi ích của Hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 3,
            chi_tiet: {
                1: "Sản phẩm Hạt nêm Aji-ngon Heo dễ dàng sử dụng",
                2: "Sử dụng sản phẩm Hạt nêm Aji-ngon Heo cung cấp nhiều dưỡng chất cần thiết cho cơ thể",
                3: "Sử dụng sản phẩm Hạt nêm Aji-ngon Heo giúp tiết kiệm chi phí so với việc phải mua nhiều loại gia vị khác nhau"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 15,
        kieu: "b",
        cau_hoi: "Hãy cho biết đánh giá của bạn về những nhận định dưới đây về sự hài lòng với sản phẩm Hạt nêm Aji-ngon Heo?",
        chi_bao: {
            so_chi_bao: 3,
            chi_tiet: {
                1: "Sản phẩm Hạt nêm Aji-ngon Heo là sản phẩm nên mua",
                2: "Anh/chị sẽ tiếp tục sử dụng sản phẩm Hạt nêm Aji-ngon Heo",
                3: "Anh/chị sẽ giới thiệu sản phẩm Hạt nêm Aji-ngon Heo cho bạn bè và người thân"
            }
        },
        ma_hoa: {
            "Rât không đồng ý": 1,
            "Không đồng ý": 2,
            "Binh thường": 3,
            "Đồng ý": 4,
            "Rất đồng ý": 5,
        }
    },
    {
        id: 16,
        kieu: "c",
        cau_hoi: "Sản phẩm Hạt nêm Aji-ngon Heo cần cải thiện điều gì để phù hợp hơn?",
        chi_bao: {},
        ma_hoa: {}
    },
];
