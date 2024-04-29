import Mock from 'mockjs';

let users = [{
    loginName: "a",
    password: "a",
    id:"1"
}]

function success(message, data = null) {
    return {
        code: 200,
        success: true,
        message,
        data
    }
}

function error(message, code) {
    return {
        code,
        success: false,
        message,
        data: null
    }
}

Mock.mock('http://localhost:8080/shop/user', 'post', config => {
    let user = JSON.parse(config.body);
    if (!user.loginName) {
        return error("用户名不能为空", 40001)
    }
    if (user.password < 6) {
        return error("密码不能少于6位", 40002)
    }
    if (users.filter(u => u.loginName === user.loginName).length !== 0) {
        return error("用户名已存在", 40003)
    }
    user.id = users.length + 1
    users.push(user)
    return success("注册成功")
})

Mock.mock(new RegExp('http://localhost:8080/shop/user'), 'get', config => {
    let params = config.url.split("?")[1].split("&");
    let loginName = params[0].split("=")[1];
    let password = params[1].split("=")[1];
    for (let u of users) {
        if (u.loginName === loginName && u.password === password) {
            return success("登录成功", u.id)
        }
    }
    return error("用户名或密码错误", 40004)
})
let products = [{
    "id": 1,
    "name": "ROG魔霸7 Plus超能版 锐龙R9-7945HX RTX4080/RTX4090独立显卡17.3英寸240Hz电竞吃鸡游戏笔记本电脑玩家国度",
    "price": "18499",
    "picLastIndex": 4
},
    {
        "id": 2,
        "name": "奥克斯电蚊拍充电式家.....",
        "price": "179",
        "picLastIndex": 0
    },
    {
        "id": 3,
        "name": "兰蔻极光水乳护肤品套装 混油美白提亮控油礼盒 精选",
        "price": "830",
        "picLastIndex": 4
    },
    {
        "id": 4,
        "name": "现代简约支持米家智能护眼客厅吸顶灯大气新款卧室餐厅灯全屋套餐",
        "price": "97.2",
        "picLastIndex": 0
    },
    {
        "id": 5,
        "name": "【5折秒杀】dw戒指 情侣对戒女轻奢万花筒玫瑰金色简约小众设计",
        "price": "530",
        "picLastIndex": 4
    },
    {
        "id": 6,
        "name": "24期免息新款vivo S15 Pro手机5G vivos15pro手机 vivos15 vivo15pro vovi手机vivi vovo s15pro手机 s15pr0",
        "price": "99999",
        "picLastIndex": 3
    },
    {
        "id": 7,
        "name": "佳能R50 18-45mm 微单相机套机高清数码青春专微旅游人像",
        "price": "¥8999",
        "picLastIndex": 4
    },
    {
        "id": 8,
        "name": "三只松鼠坚果",
        "price": "19.9",
        "picLastIndex": 0
    },
    {
        "id": 10,
        "name": "良品铺子芒果干108...",
        "price": "11.9",
        "picLastIndex": 4
    },
    {
        "id": 11,
        "name": "【自营】佳能R50 18-45mm 微单相机套机高清数码青春专微旅游人像",
        "price": "8999",
        "picLastIndex": 4
    },
    {
        "id": 12,
        "name": "红星二锅头43度750ml",
        "price": "178",
        "picLastIndex": 0
    },
    {
        "id": 13,
        "name": "Sony/索尼 Alpha 7C II 新一代全画幅双影像小“7”A7CM2微单相机",
        "price": "13999",
        "picLastIndex": 4
    },
    {
        "id": 14,
        "name": "娃哈哈ad钙奶450毫升娃哈哈ad钙奶草莓味娃哈哈ab钙奶",
        "price": "29.43",
        "picLastIndex": 3
    },
    {
        "id": 15,
        "name": "网易严选空气清新剂400ml厕所卫生间除臭留香浴室香氛室内香薰 1件装",
        "price": "19.9",
        "picLastIndex": 4
    },
    {
        "id": 16,
        "name": "BRACELET - 2020 CALVIN KLEIN VALOROUS KJBHMB0001 - CK手链",
        "price": "720",
        "picLastIndex": 3
    },
    {
        "id": 17,
        "name": "全棉时代婴儿棉柔巾宝宝干湿两用巾纯棉新生儿手口专用棉柔巾80抽 1件装",
        "price": "19.9",
        "picLastIndex": 3
    },
    {
        "id": 18,
        "name": "良品铺子芒果干108g水果干果脯年货节零食网红零食休闲小吃食品 1件装",
        "price": "¥11.9",
        "picLastIndex": 4
    },
    {
        "id": 19,
        "name": "倍思w04蓝牙耳机真...",
        "price": "¥158",
        "picLastIndex": 0
    },
    {
        "id": 20,
        "name": "第一卫适用iPhone15Promax钢化膜14/13苹果15Pro手机膜11/12无尘仓贴膜新款XR康宁x全屏pm防摔por高清ip护眼s",
        "price": "30.8",
        "picLastIndex": 4
    },
    {
        "id": 21,
        "name": "【自营】佳能R50 18-45mm 微单相机套机高清数码青春专微旅游人像",
        "price": "8999",
        "picLastIndex": 0
    },
    {
        "id": 22,
        "name": "倍思蓝牙耳机真无线运动无延迟适用于苹果华为游戏小米双耳w04",
        "price": "158",
        "picLastIndex": 0
    },
    {
        "id": 23,
        "name": "红星二锅头43度75...",
        "price": "178",
        "picLastIndex": 0
    },
    {
        "id": 24,
        "name": "维达棉韧立体美抽纸2",
        "price": "5.01",
        "picLastIndex": 0
    },
    {
        "id": 25,
        "name": "【进口】荷兰荷高全脂纯牛奶盒装整箱营养200ml*24高钙3.7g乳蛋白",
        "price": "109.9",
        "picLastIndex": 4
    },
    {
        "id": 26,
        "name": "红星二锅头43度750mL*6整箱装清香型纯粮发酵白酒口粮酒酒水送礼",
        "price": "178",
        "picLastIndex": 5
    },
    {
        "id": 27,
        "name": "Vacheron Constantin 江诗丹顿纵横四海自动上链腕表4600V",
        "price": "414000",
        "picLastIndex": 4
    },
    {
        "id": 28,
        "name": "顺丰闪发【先用后付】Xiaomi/小米13 5G新款学生老年人智能手机小米手机官方旗舰店正品红米Note13pro14ultra",
        "price": "999",
        "picLastIndex": 3
    },
    {
        "id": 29,
        "name": "Canon/佳能R100入门级数码高清旅游4K摄影拍照微单照相机E0S r100",
        "price": "5399",
        "picLastIndex": 4
    },
    {
        "id": 30,
        "name": "伊丽莎白墨釉黑高弹衬衫男春秋休闲款长袖定制弹力商务桑蚕丝衬衣",
        "price": "¥990",
        "picLastIndex": 5
    },
    {
        "id": 31,
        "name": "【2024新品】ROG幻14 Air/幻16 Air 星云屏设计电竞办公轻薄游戏本笔记本电脑RTX4060/4070玩家国度",
        "price": "8947",
        "picLastIndex": 4
    },
    {
        "id": 32,
        "name": "假发男短发男士卷发全真发韩版头顶补发片自然蓬松纹理烫假发男生",
        "price": "118",
        "picLastIndex": 3
    },
    {
        "id": 33,
        "name": "朴西胖墩墩可外穿棉鞋",
        "price": "89.8",
        "picLastIndex": 0
    },
    {
        "id": 34,
        "name": "Apple/苹果 耳机",
        "price": "149",
        "picLastIndex": 0
    },
    {
        "id": 35,
        "name": "【自营】佳能R50 ...",
        "price": "8999",
        "picLastIndex": 0
    },
    {
        "id": 36,
        "name": "张小泉菜刀家用不锈钢...",
        "price": "55",
        "picLastIndex": 0
    },
    {
        "id": 37,
        "name": "良品铺子芒果干108g水果干果脯年货节零食网红零食休闲小吃食品 1件装",
        "pprice": "11.9",
        "picLastIndex": 5
    },
    {
        "id": 38,
        "name": "佳能R50 18-45mm 微单相机套机高清数码青春专微旅游人像",
        "price": "8999",
        "picLastIndex": 5
    },
    {
        "id": 39,
        "name": "倍思w04蓝牙耳机真无线半入耳式降噪长续航2024新款适用华为苹果 1件装",
        "price": "158",
        "picLastIndex": 4
    },
    {
        "id": 40,
        "name": "新鲜采摘小台芒芒果香甜多汁果肉饱满新鲜水果【催熟后食用】 1件装",
        "price": "29.9",
        "picLastIndex": 4
    },
    {
        "id": 41,
        "name": "倍思w04蓝牙耳机",
        "price": "158",
        "picLastIndex": 0
    }]
//查询所有商品信息
Mock.mock('http://localhost:8080/shop/product', 'get', config => {
    return success("查询成功", products)
})
//商品详情

Mock.mock(new RegExp('http://localhost:8080/shop/product/\\d+'), 'get', config => {
    let arr = config.url.split('/');
    let id = arr[arr.length - 1];
    let product = products.filter(p => p.id == id)[0];
    return success("查询成功", product)
})

let orders = {
    "1": [
        {id: 1, name: "订单1", total: 100, createdAt: "2022-01-01", status: "1"},
        {id: 2, name: "订单2", total: 200, createdAt: "2022-01-02", status: "2"},
        {id: 3, name: "订单3", total: 300, createdAt: "2022-01-03", status: "3"}
    ],
    "2": [
        {id: 4, name: "订单4", total: 100, createdAt: "2022-01-01", status: "1"},
        {id: 5, name: "订单5", total: 200, createdAt: "2022-01-02", status: "2"},
        {id: 6, name: "订单6", total: 300, createdAt: "2022-01-03", status: "3"}
    ]
}
//我的订单
Mock.mock(new RegExp('http://localhost:8080/shop/order/\\d+'), 'get', config => {
    let arr = config.url.split('/');
    let id = arr[arr.length - 1];
    return success("查询成功", orders[id])
})