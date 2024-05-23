import Mock from 'mockjs';

let users = [{
    loginName: "a",
    password: "a",
    id: "1"
}, {
    loginName: "b",
    password: "b",
    id: "2"
}
]

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
    'id': 1,
    'name': '雅诗兰黛520限定小棕瓶精华眼霜15ml护肤品化妆品礼盒520情人节礼物送女友',
    'price': '565.00',
    'picLastIndex': 8,
    'href': 'https://item.jd.com/100107396598.html'
},
    {
        'id': 2,
        'name': '单蜜（Danmi）雪纺连衣裙女装2024年夏季新款韩版修身时尚小个子碎花沙滩裙子夏 图片色 L',
        'price': '147.98',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10068561079168.html'
    }, {
        'id': 3,
        'name': '雅诗兰黛小棕瓶精华眼霜15ml护肤品化妆品礼盒淡化细纹520情人节礼物',
        'price': '565.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100022610206.html'
    }, {
        'id': 4,
        'name': '川朗新中式盘扣印花外套女2024春秋季新款女士装小个子气质风短款上衣 绿色 L（110斤-125斤）',
        'price': '248.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10099159696570.html'
    }, {
        'id': 5,
        'name': '雅诗兰黛智妍水乳套装（胶原水200ml+胶原乳100ml)护肤品化妆品520礼物',
        'price': '1530.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100042687174.html'
    }, {
        'id': 6,
        'name': '婳如嫣小个子微喇裤子女2024春秋新款高腰显瘦修身直筒西装裤垂感喇叭裤 卡其色 M',
        'price': '116.06',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10069343913449.html'
    }, {
        'id': 7,
        'name': 'SK-II抗皱紧致神仙水随行5步装',
        'price': '690.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/4918116.html'
    }, {
        'id': 8,
        'name': '罗技（Logitech）MK295 企业级无线键鼠套装 超薄办公台式机笔记本电脑通用键盘鼠标套装 企业采购 黑色',
        'price': '249.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100088521825.html'
    }, {
        'id': 9,
        'name': '兰蔻裸唇釉礼盒(275+313)春夏显白 哑光奶茶柔粉色口红520生日礼物',
        'price': '700.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/100093272089.html'
    }, {
        'id': 10,
        'name': '罗技（G）G402有线鼠标 游戏鼠标 高速追踪游戏鼠标 吃鸡鼠标 绝地求生',
        'price': '199.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/1192014.html'
    }, {
        'id': 11,
        'name': '兰蔻小黑瓶精华50ml维稳保湿修护 护肤礼盒520情人节生日礼物',
        'price': '1100.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100006341283.html'
    }, {
        'id': 12,
        'name': '可茵（Keyin）休闲裤女装套装2024年夏季新款小个子穿搭九分裤女百搭工装裤子女 上衣+裤子 M',
        'price': '158.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10077581329940.html'
    }, {
        'id': 13,
        'name': '兰蔻小黑瓶精华50ml维稳保湿修护 套装礼盒520情人节生日礼物',
        'price': '1100.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100074029780.html'
    }, {
        'id': 14,
        'name': '手摇可升降电脑桌移动滑轮书桌学生家用学习桌卧室办公桌写字桌子 【滑轮款】手摇升降-简约白80*60',
        'price': '548.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10102070346033.html'
    }, {
        'id': 15,
        'name': '兰蔻粉水400ml舒缓爽肤水补水保湿 护肤套装礼盒520情人节生日礼物女',
        'price': '495.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100011480214.html'
    }, {
        'id': 16,
        'name': '康陌（KANGMO）奶油风碗碟套装碗家用高颜值釉下彩餐具碗筷碗盘碗具单个餐具 4.5英寸饭碗（奶绿）',
        'price': '14.90',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10079259060018.html'
    }, {
        'id': 17,
        'name': '雅诗兰黛眼面两件礼盒(棕瓶精华50ml+棕瓶眼霜15ml)化妆护肤品520礼物',
        'price': '1525.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100024016226.html'
    }, {
        'id': 18,
        'name': '苏洛琳（SULUOLIN）2024年春夏季新款休闲运动套装女士装阔腿裤子垂坠感薄款直筒长裤 套装 M(建议：96-106斤)',
        'price': '149.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10075947303154.html'
    }, {
        'id': 19,
        'name': '邦菲尔小个子冰丝短袖薄款上衣t恤女夏季韩版百搭修身显瘦拼接针织衫 粉色 2XL 111-120',
        'price': '68.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10080737258039.html'
    }, {
        'id': 20,
        'name': 'COON ARPER夏季2023新款多巴胺穿搭轻熟御姐小香风露肩上衣半身裙两装女 单上衣【甜辣风/韩剧套装名媛/俏 S',
        'price': '299.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10078558237607.html'
    }, {
        'id': 21,
        'name': '薇诺娜 清痘控油护理套装（爽肤水+洁面泡沫+清颜霜+修复精华液）',
        'price': '268.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/1180783403.html'
    }, {
        'id': 22,
        'name': 'DAVEY MODE套装女2024夏季新款纯油画碎花连衣裙收腰显瘦吊带长裙防晒开衫 开衫碎花裙子【两件套】 L:105-120',
        'price': '52.80',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10101715358270.html'
    }, {
        'id': 23,
        'name': '雅诗兰黛小棕瓶精华液50ml紧致护肤品套装化妆品礼盒520情人节礼物送老婆',
        'price': '960.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100022610146.html'
    }, {
        'id': 24,
        'name': '德木pdu滤波插排电竞pdu幻兽帕鲁桌搭排插桌面插座插线板 【升级漏保】滤波 分控4位+1U1C+计量+防雷 1.5平线径',
        'price': '355.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/10096566640299.html'
    }, {
        'id': 25,
        'name': 'YSL圣罗兰夜皇后精华水乳护肤品套装生日礼物女520情人节礼物送女友',
        'price': '950.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100029082004.html'
    }, {
        'id': 26,
        'name': '朵唯（DOOV）V9迷你学生手机戒网瘾专用 非智能男女备用超薄 4G全网通儿童初中生高中生老人机 移动版粉色',
        'price': '96.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/100053992906.html'
    }, {
        'id': 27,
        'name': '兰蔻发光眼霜15ml小黑瓶淡化细纹保湿520情人节礼盒生日礼物',
        'price': '565.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100021531050.html'
    }, {
        'id': 28,
        'name': '与欣夏季短袖女生裙子夏天学生法式连衣裙少女夏装2022新款初中高中学生女装日系可爱甜美蝴蝶结裙子 黑色 M',
        'price': '94.12',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10050719525666.html'
    }, {
        'id': 29,
        'name': '兰蔻新极光水乳护肤美白套装(水150ml+乳液75ml)礼盒520生日礼物女',
        'price': '1690.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100012169125.html'
    }, {
        'id': 30,
        'name': '尚都比拉春秋新中式长袖衬衫女气质中国风衬衣高级感上衣 杏色 M ',
        'price': '159.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/100065715626.html'
    }, {
        'id': 31,
        'name': 'SK-II神仙水75ml+大红瓶面霜15g+小灯泡精华10ml抗皱水乳护肤品套装sk2',
        'price': '690.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100056885184.html'
    }, {
        'id': 32,
        'name': 'WDKST适用海力士 DDR4 8G 16G 32G 3200笔记本内存条华硕戴尔联想神州惠普机械师 8G 3200MHz 笔记本内存条',
        'price': '109.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/70104000452.html'
    }, {
        'id': 33,
        'name': 'SK-II抗皱紧致补水保湿3步装',
        'price': '3950.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100048222624.html'
    }, {
        'id': 34,
        'name': '罗技（Logitech）MK275 企业级无线键鼠套装 办公鼠标键盘套装 电脑笔记本办公键鼠套装 带无线2.4G接收器 黑蓝色',
        'price': '99.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100097129646.html'
    }, {
        'id': 35,
        'name': 'B&O Beosound A1 ADER ERROR 限量合作版 便携式可通话无线蓝牙音响/音箱 搭配音响支架',
        'price': '3800.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100105779714.html'
    }, {
        'id': 36,
        'name': '【2023新款GT4Pro】华强北保时倢GT3 Pro智能手表可接打电话watch Pro顶配版[银色棕皮]高清屏+',
        'price': '161.28',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10081250686508.html'
    }, {
        'id': 37,
        'name': 'B&O【法拉利限定】Beosound 2 3rd Gen铂傲家庭影院音响无线蓝牙HIFI家用多媒体音响音箱Ferrari Red',
        'price': '38980.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100066215903.html'
    }, {
        'id': 38,
        'name': '罗技（G） G502 HERO主宰者 有线鼠标 游戏鼠标 吃鸡鼠标 电竞鼠标宏编程可配重HERO引擎 G502HERO',
        'price': '199.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/40087947179.html'
    }, {
        'id': 39,
        'name': '玉兰油（OLAY）大红瓶胜肽精华水乳套装紧致补水保湿抗皱护肤品礼盒520礼物女友',
        'price': '449.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100034681404.html'
    }, {
        'id': 40,
        'name': 'Divoom点音 EVO蓝牙音箱迷你无线便携式像素歌词闹钟 笔记本电脑小音响家用低音炮 电竞游戏氛围桌搭礼物',
        'price': '299.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100014472811.html'
    }, {
        'id': 41,
        'name': '春麗珠休闲裤女夏季雪纺阔腿裤宽松显瘦夏装新款洋气时尚减龄两件装裤子 米色 M',
        'price': '128.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10032325858925.html'
    }, {
        'id': 42,
        'name': 'ELEKSMAKER IPS拟辉光管时钟创意复古桌面办公室电脑摆件电竞房装饰桌搭好物电子数字科技感钟表男生生日礼物 黑金 | 经典版IPS | 新版小程序系统 颜色分类',
        'price': '428.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10069831980679.html'
    }, {
        'id': 43,
        'name': '电脑桌台式家用简约办公桌学习书桌女生卧室小桌子简易学生写字桌 60*40白色-回馈款 0x0x0cm',
        'price': '128.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10102070042154.html'
    }, {
        'id': 44,
        'name': 'beats Studio Buds 真无线主动降噪入耳式耳机 蓝牙运动跑步音乐耳机 兼容苹果安卓系统 IPX4级防水 黑色',
        'price': '548.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10089268364233.html'
    }, {
        'id': 45,
        'name': '岚烨淑女减龄小碎花背带裤女牛仔直筒裤春夏季韩系学院风阔腿连体裤 背带裤 S',
        'price': '109.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10099104212116.html'
    }, {
        'id': 46,
        'name': '兰蔻极光精华水(第二代)150ml 精华法国原产保湿礼盒520生日礼物女',
        'price': '860.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100006737605.html'
    }, {
        'id': 47,
        'name': 'AUGELIGHT创意LED小夜灯智能婴儿喂奶睡觉床头灯户外露营灯卧室桌面护眼学习阅读充电台灯柔性线型灯氛围灯 量子线深空灰【精致礼盒】',
        'price': '408.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10092030696363.html'
    }, {
        'id': 48,
        'name': '海蓝之谜（LA MER）强韧修护套装(精萃水+面霜)护肤品化妆品礼盒520情人节礼物送女友',
        'price': '3200.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100018643431.html'
    }, {
        'id': 49,
        'name': 'QGF牛仔裤女韩版直筒拖地春秋宽松阔腿裤子学生夏季百搭薄款九分长裤 蓝白 M',
        'price': '69.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10034756959658.html'
    }, {
        'id': 50,
        'name': '云墨（YUNMO）无线蓝牙鼠标三模游戏有线可充电电竞办公台式电脑笔记本通用RGB灯效宏编程自定义按键 【电竞三模+1000Hz高刷+RGB灯】静音版白色',
        'price': '77.40',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10092889913736.html'
    }, {
        'id': 51,
        'name': '蝶朵那新中式马甲女中国风春秋款白色复古立体浮雕提花背心冬新别致盘扣 米白色 XL',
        'price': '105.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10097029130914.html'
    }, {
        'id': 52,
        'name': 'B&O Beosound A1 Gen2 便携式无线蓝牙音响/音箱 桌面室内低音炮 Grey Mist雾灰色 节日礼物',
        'price': '1498.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100028431462.html'
    }, {
        'id': 53,
        'name': '皮尔卡丹运动套装女2024新款春秋女装洋气显瘦减龄气质套装女高级感夏季装 蓝色版 M 建议103-112',
        'price': '167.81',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10047479496951.html'
    }, {
        'id': 54,
        'name': '梦多福520情人节礼物男士送男友女友男生生日礼物 男朋友高档又实用摆件 象牙白宇航员音响摆件 【Ai语音+时钟/闹钟+FM收音】',
        'price': '128.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10070115749465.html'
    }, {
        'id': 55,
        'name': 'AEMAPE新中式国风重工刺绣衬衫女2024夏季立领盘扣七分袖上衣小衫女衬衣 MX-12-8212_主图款 M 【96-105斤】',
        'price': '149.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10101821384272.html'
    }, {
        'id': 56,
        'name': '森女部落我和春天有个约会 （万物生）甜美风花边拼接叠穿连衣裙 杏色开衫(单件) S',
        'price': '59.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10096421775055.html'
    }, {
        'id': 57,
        'name': 'HUIWEN M60 Pro 16+1TB大内存智能手机八核大屏电竞游戏学生便宜全网通双卡双待长续航轻薄骁龙手机 雅白色【人脸识别+5G全网通+收藏加购送豪礼】 16GB+1TB【八核处理器+旗舰全新',
        'price': '1299.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10095704008614.html'
    }, {
        'id': 58,
        'name': 'OlarHike按摩DOW公仔生日礼物女生520情人节礼物女友送老婆520送女朋友什么礼物实用走心高级感送男朋友男士按摩抱枕儿童节毛绒玩具玩偶娃娃毕业纪念日创意惊喜',
        'price': '299.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100039298277.html'
    }, {
        'id': 59,
        'name': '罗技（Logitech）MK346P 企业级无线办公键鼠套装（MK345造型） 电脑笔记本办公键鼠套装 全尺寸带手托   黑色',
        'price': '135.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100075868912.html'
    }, {
        'id': 60,
        'name': 'B&O Beosound A9 5.G 5代 铂傲家庭影院音响一体式无线WiFi蓝牙家用 触控调音音响音箱 碳黑色',
        'price': '24980.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100056927226.html'
    }, {
        'id': 61,
        'name': '秋曾奶油牌少女感 显瘦黑白蕾丝蓬蓬蛋糕半身裙高腰短裙 浅杏色 带打底 M 95-110',
        'price': '26.13',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10081084255790.html'
    }, {
        'id': 62,
        'name': '智汇520礼物送男朋友男生生日礼物男士老公蓝牙音箱十八岁18岁成人礼 大G无线充APP调控【送礼盒礼袋】 无线充256炫彩灯光白噪声时钟',
        'price': '239.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10071370939027.html'
    }, {
        'id': 63,
        'name': '特洛克Trozk红白机智能插座USB快充多孔转换器多功能桌面充电站电竞插排电脑一转多开关面板多头拖线板 TC02红白机 \\ 20W快充',
        'price': '359.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10069721915198.html'
    }, {
        'id': 64,
        'name': 'Brateck北弧 显示器增高架 支架增高架 显示器支架 台式电脑支架 笔记本支架 桌面底座收纳架 G600胡桃棕',
        'price': '129.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100027108199.html'
    }, {
        'id': 65,
        'name': '罗技（G） G502 HERO 有线游戏鼠标 FPS吃鸡鼠标 送男友逻辑宏鼠标 G502se 熊猫版',
        'price': '269.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/28114955136.html'
    }, {
        'id': 66,
        'name': 'Hobsest智能电话手表成人可插卡wifi上网5G全网通可接打电话抖音qq微信视频通话男女多功能蓝牙运动手表 大内存顶配版APP任意下载+小说炒股游戏追剧+心率',
        'price': '623.11',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10084955033949.html'
    }, {
        'id': 67,
        'name': '阁阁居520礼物送男朋友蓝牙音箱男生生日礼物送同学老公创意高档音响高三成人礼物十八岁520情人节礼物 黑色灯光礼盒-5w快充-可定制',
        'price': '208.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10095330143578.html'
    }, {
        'id': 68,
        'name': '雅诗兰黛鲜活亮采红石榴精华水200ml保湿护肤品化妆品套装520情人节礼物',
        'price': '460.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100068973632.html'
    }, {
        'id': 69,
        'name': '希捷酷鱼2.5英寸1T/2T笔记本硬盘 SATA3接口 128缓存 车载电脑监控机械硬盘 2T 7mm 酷鱼本盘',
        'price': '489.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10026026957260.html'
    }, {
        'id': 70,
        'name': '纯迩女装连衣裙2024新款学院风法式复古收腰显瘦裙子夏季小个子衣服女 杏色 XL（建议121-130斤）',
        'price': '158.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/10053403105158.html'
    }, {
        'id': 71,
        'name': '灵动的空气休闲裤女士套装女时尚高档女装2024年夏季新款两件装女套装 3075 3XL（130-140斤）',
        'price': '128.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10035057161431.html'
    }, {
        'id': 72,
        'name': '卡伊莎（KAYISHA）连衣裙女美式慵懒风字母短袖女夏季新款设计感小众ins潮上衣裙子 黑色T恤 M【93-103斤】',
        'price': '95.94',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10077582018076.html'
    }, {
        'id': 73,
        'name': '妍莉芬休闲裤女装时尚棉麻套装女2024年夏季新款休闲阔腿裤两件装裤子 灰色 3XL(建议135斤-165斤)',
        'price': '128.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10050708856683.html'
    }, {
        'id': 74,
        'name': 'SK-II神仙水75ml*2精华液sk2护肤品套装化妆品全套生日520情人节礼物女',
        'price': '1260.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100025694859.html'
    }, {
        'id': 75,
        'name': '达尔优（dareu）A98专业版98配列有线/无线/蓝牙三模机械键盘智能音控Gasket结构天空轴V3-白烟青侧刻',
        'price': '298.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100078929696.html'
    }, {
        'id': 76,
        'name': 'KEYSME Lunar01黑月光机械键盘热插拔三模无线蓝牙有线快银轴87键盘磁轴电竞游戏平板电脑办公x-one键盘 Lunar01黑月光暗夜版/小火箭不发光 佳达隆银轴Gpro3.0线性轴【成品键盘',
        'price': '1399.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10079524771374.html'
    }, {
        'id': 77,
        'name': '雷柏（Rapoo）V10S 专业游戏鼠标垫 准确定位不丢帧 防滑橡胶基底 厚度适中 柔软舒适 加厚版 细面速度型',
        'price': '25.90',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/100085032369.html'
    }, {
        'id': 78,
        'name': '猛玛（MOMA）无线麦克风领夹猛犸手机相机直播一拖二小蜜蜂收音麦vlog视频唱歌声卡单反录音设备全套 LARK M1',
        'price': '499.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100037445442.html'
    }, {
        'id': 79,
        'name': '书桌书架一体桌初中生学习桌成年人小型电脑桌台式家用学生桌子 黑架+浅胡桃 80x60x170cm',
        'price': '509.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10091078829160.html'
    }, {
        'id': 80,
        'name': 'amber heey连衣裙2024夏季新款长袖百褶裙套装jk制服女网红纯欲裙子夏天学生 衬衫+深灰色裙+黑色领带 L',
        'price': '138.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10098285719619.html'
    }, {
        'id': 81,
        'name': '皮尔卡丹（pierre cardin）新中式国风衬衫女2024夏季新款女装设计感刺绣提花中袖雪纺衬衣女 杏色 L 建议106-120斤',
        'price': '149.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10098993536930.html'
    }, {
        'id': 82,
        'name': 'IDERAN喜马拉雅天然水晶盐灯舒适香薰摆件充电款卧室睡眠小夜灯生日礼物 方块盐灯【充电触摸可调光】 礼盒装',
        'price': '188.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10096346272881.html'
    }, {
        'id': 83,
        'name': '皮尔卡丹（pierre cardin）外搭雪纺小披肩女夏季防晒衣小坎肩空调衫薄外套百搭开衫短款 白色 XL【建议135-160斤】',
        'price': '59.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10080756591240.html'
    }, {
        'id': 84,
        'name': '漫步者花再Halo SoundBar 桌面音响音箱 家用桌面台式电脑游戏音响长条有线音箱 蓝牙5.4 RGB炫酷灯效 破晓白',
        'price': '249.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100090080147.html'
    }, {
        'id': 85,
        'name': '罗技（Logitech）MK850 无线键鼠套装 商务办公蓝牙键盘鼠标 全尺寸 双模 带无线2.4G接收器 黑色',
        'price': '549.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/4441403.html'
    }, {
        'id': 86,
        'name': '啄木鸟美式复古工装牛仔裤女春秋2024新款高腰宽松直筒白色阔腿牛仔裤子 杏色（长裤） S',
        'price': '168.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10082127847453.html'
    }, {
        'id': 87,
        'name': '索菲堡 高街不规则破洞牛仔半身裙女2023夏季新款高腰显瘦中长款a字裙潮 复古蓝 L',
        'price': '59.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10073198012248.html'
    }, {
        'id': 88,
        'name': '儿童学习桌手动升降书桌家用小学生简易课桌椅套装小孩作业写字桌 【原木色状元桌-加固升降款】80*',
        'price': '678.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10102070332547.html'
    }, {
        'id': 89,
        'name': '圆刚（AVerMedia）GC551G2Plus高清4K视频采集卡NS/PS5/Xbox主机游戏手游直播录制设备',
        'price': '699.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100068818543.html'
    }, {
        'id': 90,
        'name': 'SK-II淡斑小银瓶精华30ml美白祛斑sk2化妆品护肤品套装520情人节礼物',
        'price': '1060.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/3841659.html'
    }, {
        'id': 91,
        'name': 'AUGELIGHT智能LED小夜灯人体自动感应无线光感红外线人走灯灭楼道楼梯入户门走廊过道卫生间磁吸充电氛围灯 深灰色',
        'price': '249.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10076464558766.html'
    }, {
        'id': 92,
        'name': '皮尔卡丹（pierre cardin）微喇裤子女士春秋2023年新款高腰显瘦垂感直筒西装休闲长裤 黑色 2XL135-145斤',
        'price': '198.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10083596485631.html'
    }, {
        'id': 93,
        'name': 'HAKE ILTONK轻奢女装法式挂脖露肩雪纺连衣裙仙女夏季气质感海边度假沙滩蓬蓬 仙杏色【茶歇法式/仙气超仙森系/ S',
        'price': '355.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10081500526196.html'
    }, {
        'id': 94,
        'name': '三星 SAMSUNG 笔记本内存条 16G DDR5 5600频率',
        'price': '429.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/100054580775.html'
    }, {
        'id': 95,
        'name': '阁阁居520礼物送男朋友蓝牙音箱男生生日礼物送男友男朋友兄弟创意实用灯光装饰画音响520情人节礼物 【海上明月】-蓝牙音箱-代写贺卡',
        'price': '208.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10091423101940.html'
    }, {
        'id': 96,
        'name': '重力星球 破茧鼠标 经典版黑无线有线蓝牙三模电竞游戏办公宏按键调节RGB光效可充电长续航3395',
        'price': '299.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100080668585.html'
    }, {
        'id': 97,
        'name': '海蓝之谜（LA MER）修护精萃水150ml精粹水精华液护肤品化妆品礼盒520情人节礼物女',
        'price': '1460.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100033103270.html'
    }, {
        'id': 98,
        'name': '夏季时尚短袖雪纺衬衫女装2022新款气质小衫碎花上衣洋气时髦 花色 2XL',
        'price': '148.80',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10050029565880.html'
    }, {
        'id': 99,
        'name': 'QGF新中式国潮短袖T恤男女青少年学生情侣半袖衫宽松大码高街上衣服 白色 XL【建议130-145斤】',
        'price': '58.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10099000572877.html'
    }, {
        'id': 100,
        'name': '苜戈2022年春季长袖毛衣女开衫慵懒风针织衫宽松圆领网红外套 粉色1 XL 110-120左右',
        'price': '59.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10095411336532.html'
    }, {
        'id': 101,
        'name': '蕰蔓唲钢管舞服装短裤镂空热裤露臀超短裤jazz爵士舞女团韩舞heels 蓝色短.裤 L',
        'price': '68.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10091352181886.html'
    }, {
        'id': 102,
        'name': '尚都比拉2024春秋新款女装雪纺衫轻熟风洋气减龄气质通勤七分袖上衣女 杏色 S',
        'price': '159.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10083581687450.html'
    }, {
        'id': 103,
        'name': '魔鬼猫（ZOMBIES CAT）蓝牙耳机ANC主动降噪无线半入耳式2024年新款游戏电竞运动跑步高音质降噪男女适用安卓苹果 月光银',
        'price': '159.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10100381407491.html'
    }, {
        'id': 104,
        'name': '艾珠儿休闲裤女装夏季新款减龄显瘦气质收腰雪纺阔腿裤两件套套装裤子女 图片色 M',
        'price': '126.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10030735523063.html'
    }, {
        'id': 105,
        'name': '朵帆520情人节女生生日礼物女男实用走心男生音响音箱送闺蜜乔迁摆件',
        'price': '169.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100091922996.html'
    }, {
        'id': 106,
        'name': '皮尔卡丹雪纺职业套装女夏季2023时尚气质洋气两件套套装小个子阔腿裤大版 杏色套装 XL码数建议【105-120斤】',
        'price': '168.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10073467599086.html'
    }, {
        'id': 107,
        'name': 'KEYSME Lunar01太空船机械键盘无线蓝牙客制化热插拔gasket三模87键电竞游戏平板电脑办公有线磁轴x-one Lunar01白月光曜白版/小火箭不发光 佳达隆银轴Gpro3.0线性轴【成',
        'price': '1399.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10086539631808.html'
    }, {
        'id': 108,
        'name': 'Double Shell 静音无线蓝牙有线三模机械键盘办公深海樱桃静音红轴深海孤岛轴多系统WIN/Mac/ipad兼容 M96太空灰+cherry静音红轴 静音红轴',
        'price': '538.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/10054892745623.html'
    }, {
        'id': 109,
        'name': '罗技（Logitech）MK470 键鼠套装 无线键鼠套装 超薄 全尺寸 芍药白 带无线2.4G接收器',
        'price': '249.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100005993834.html'
    }, {
        'id': 110,
        'name': '皮尔卡丹（pierre cardin）杏色毛呢秋冬套装裙女2023年新款时尚气质中长款高端职业装两件装 杏色套装(外套+连衣裙) L',
        'price': '598.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10090527073341.html'
    }, {
        'id': 111,
        'name': '棉致百搭显瘦复古高腰直筒牛仔裤女春秋夏季新款休闲阔腿裤子宽松 浅蓝色【658常规高品质29】 L 105-115斤',
        'price': '55.50',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10098327497239.html'
    }, {
        'id': 112,
        'name': 'CANDYSIGN制糖工厂硬糖120W小电拼家旅双栖超能桌面充电站适用iPad苹果iPhone15安卓MacBook氮化镓快充电器 复古白',
        'price': '429.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10080971147216.html'
    }, {
        'id': 113,
        'name': '蝶娇诺（DIEJIAONUO）新款连衣裙子女装2024年早春穿搭甜辣纯欲风气质女神范短裙套装女 6019白色+灰色裙子【没链子的】 【S】',
        'price': '136.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10068974779283.html'
    }, {
        'id': 114,
        'name': '啄木鸟冰丝国风雪纺碎花半身裙长裙夏2023新款气质遮胯大摆印花高腰A字 抹茶绿【后松紧】 M 【80-110斤】',
        'price': '68.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10078105978756.html'
    }, {
        'id': 115,
        'name': '兰蔻极光洁面乳125ml 洗面奶温和清洁 礼盒520情人节生日礼物男友',
        'price': '400.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100007592117.html'
    }, {
        'id': 116,
        'name': 'Divoom点音 时光之门任意门辉光管时钟电竞房装饰科技感电脑桌搭rgb氛围灯智能桌面潮玩摆件创意生日礼物 时光之门任意屏（银色）',
        'price': '899.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10075210035253.html'
    }, {
        'id': 117,
        'name': '蝶娇诺（DIEJIAONUO）早秋连衣裙秋季套装纯欲风穿搭御姐港味填辣妹小个子短裙套装裙子 黑色上衣+黑色短裙 M',
        'price': '168.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10084510476357.html'
    }, {
        'id': 118,
        'name': '手摇升降桌子电脑桌家用卧室学习书桌学生写字桌简易办公桌工作台 亏本冲量【无升降款】简约白80',
        'price': '328.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10102070487749.html'
    }, {
        'id': 119,
        'name': '蓝朗蓝牙音箱宇航员机器人智能音响太空人男生生日礼物男520情人节礼物送男朋友男友老公男士ai高音质 宇航员蓝牙音响【AI语音+时钟显示+闹钟+小夜灯】',
        'price': '138.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10066713575046.html'
    }, {
        'id': 120,
        'name': '电沃达充电宝57000毫安大容量120w超级快充移动电源适用于华为苹果OPPO安卓vivo小米等手机 优雅白丨超级快充丨进口电芯丨提速999% 20000毫安时【可上飞机】',
        'price': '48.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10094049077348.html'
    }, {
        'id': 121,
        'name': 'SK-II神仙水护肤品套装 SK2神仙水skll护肤精华  520礼物 75ml全晶透随心装',
        'price': '690.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/29734915323.html'
    }, {
        'id': 122,
        'name': '简蜓高级感小西装套装女春秋季2024新款职业装气质短款休闲西服女神范 黑色西装+裤子+配白色吊带 M（推荐90-105斤）',
        'price': '268.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10059609259714.html'
    }, {
        'id': 123,
        'name': '罗宾汉  ROBINHOOD新中式连衣裙子夏天女装2024夏季新款辣妹包臀新品改良旗袍裙子 白色 M【建议96-106斤】',
        'price': '148.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10097855848803.html'
    }, {
        'id': 124,
        'name': '极地物种520情人节礼物 摆件音响生日礼物男送男生女高级感蓝牙音箱灯男士 冰川伴睡蓝牙音响【配精美礼袋】',
        'price': '128.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10079453689725.html'
    }, {
        'id': 125,
        'name': 'LAMAOE法国兰黛小黑瓶护肤品套装化妆品全套送女友精美礼盒情人节日礼物 小黑瓶奢宠七件套礼盒+礼品',
        'price': '268.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/10051411997682.html'
    }, {
        'id': 126,
        'name': '罗技（G） 游戏锁边鼠标垫 细面加大加厚鼠标垫 家用办公超大桌垫 罗技G大桌垫（800*300mm）',
        'price': '29.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/30269024438.html'
    }, {
        'id': 127,
        'name': 'MDUG法式连衣裙女早春秋2024新款小众感气质甜美显瘦裙子 图片色 S 建议8095斤',
        'price': '308.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10097028004448.html'
    }, {
        'id': 128,
        'name': '猎嘉原厂系列PM9A1 PM9A1a PM981 PM981a  PM991 PM991a PM971 M.2 NVMe PCIe Gen原厂固态硬盘SSD PM981a M.2 2280 PCIe3',
        'price': '479.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/10036863300534.html'
    }, {
        'id': 129,
        'name': 'B&O Beosound 2 3rd Gen 3代音响铂傲家庭影院无线蓝牙HIFI家用互联多媒体音响音箱 炭黑色',
        'price': '23480.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/100056927224.html'
    }, {
        'id': 130,
        'name': '罗技（G） G502 HERO主宰者游戏鼠标电竞鼠标有线RGB机械配重竞技FPS吃鸡宏cf送男友男生礼物 G502HERO',
        'price': '209.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/14736010459.html'
    }, {
        'id': 131,
        'name': '川朗新中式外套女2024春秋新款小个子女装盘扣改良汉服刺绣短款上衣女 米色 XXL（135斤-150斤）',
        'price': '258.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10100435900259.html'
    }, {
        'id': 132,
        'name': '荧蒂新中式国风刺绣旗袍衬衫女2024春秋新款复古衬衣马面裙搭配的上衣 白色 S',
        'price': '128.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10097723649655.html'
    }, {
        'id': 133,
        'name': '妍莉芬 休闲裤女2024夏装新款时尚女装休闲套装气质阔腿裤女神套装裤子 灰蓝色条纹 M【建议99-108斤】',
        'price': '118.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10034301379057.html'
    }, {
        'id': 134,
        'name': '罗技（Logitech）MK220 键鼠套装 无线键鼠套装 办公键鼠套装  多媒体键鼠套装 带无线2.4G接收器 黑色',
        'price': '89.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/435592.html'
    }, {
        'id': 135,
        'name': '深海之声（SEEAI)蓝牙耳机开放式挂耳式空气传导真无线不入耳舒适运动跑步骑行健身超长续航 静夜黑（长续航+1年全保换新）',
        'price': '398.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10086596488280.html'
    }, {
        'id': 136,
        'name': 'GLTEN【施华洛世奇锆】999足银手链女手镯女生日520情人节礼物送女朋友 【施华洛世奇白锆】手链+证书',
        'price': '318.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/55218513104.html'
    }, {
        'id': 137,
        'name': '艾蒲达 mp3蓝牙音乐播放器mp4全屏学生随身听无损看小说触屏操作英语听力宝外放复读机高中生   魅力黑  8G （触屏版）',
        'price': '79.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/10037528602582.html'
    }, {
        'id': 138,
        'name': '赫拓摆件定制全息升降模拟地形沙盘系统军事指挥中心电子作战沙盘定制 军事沙盘',
        'price': '300000.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10094203768809.html'
    }, {
        'id': 139,
        'name': '皮尔卡丹（pierre cardin）夏季新款弹力微喇牛仔裤女修身高腰显瘦时尚气质中年百搭喇叭裤 深蓝色 28 建议100-110斤',
        'price': '118.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10072989490211.html'
    }, {
        'id': 140,
        'name': 'LiberLiveC1 融合伴奏吉他【现货】 无弦吉他自动挡弹唱一人乐队 LiberLive 石墨灰 官方标配',
        'price': '2399.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10088558264633.html'
    }, {
        'id': 141,
        'name': 'EM｜eleksmaker区块化插排USB开关排插独立控制钮复古插座桌面拓展坞usb控制器分线器插座 EM｜NK1【6路独立控制开关】',
        'price': '98.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10068223604859.html'
    }, {
        'id': 142,
        'name': '妙奈日照金山创意生日礼物氛围灯床头灯桌面小灯光画男女朋友纪念桌搭 日照金山-创意氛围灯',
        'price': '129.80',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10094097571562.html'
    }, {
        'id': 143,
        'name': '富士通扫描仪a4连续快速扫描机自动批量文件票据高速双面扫描仪机 fi-6130（30张/分）',
        'price': '1030.91',
        'picLastIndex': 1,
        'href': 'https://item.jd.com/10082262101771.html'
    }, {
        'id': 144,
        'name': '兰蔻极光乳液75ml面霜提亮保湿美白化妆品套装礼盒520情人节生日礼物',
        'price': '830.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100018722646.html'
    }, {
        'id': 145,
        'name': '华为 HUAWEI WATCH ULTIMATE DESIGN 非凡大师 黄金表 高端款 双向北斗卫 WATCH ULTIMATE DESIGN',
        'price': '22999.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/10095340326810.html'
    }, {
        'id': 146,
        'name': '花西子同心锁口红3.2g 生日礼物送女友M1314红枫柿子',
        'price': '219.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/100012969173.html'
    }, {
        'id': 147,
        'name': 'okkdey 高端轻奢网纱半身裙女春装新款高腰伞裙半裙中长款纱裙子 浅蓝色 均码(松紧弹力腰围90-145斤穿)',
        'price': '329.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10044969634699.html'
    }, {
        'id': 148,
        'name': '勇伦（YONGLUN）雪纺连衣裙女夏季新款收腰显瘦裙子气质碎花超仙女裙穿搭2024女装 白色 L（建议105-115斤）',
        'price': '168.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10054353492425.html'
    }, {
        'id': 149,
        'name': '珂芝（KZZI）Z98IP定制款无线机械键盘LINA蓝牙有线电竞游戏键盘女团联名款高颜值潮玩版 Z98-定制款-LINA【波塞冬轴 游戏办公两用】',
        'price': '468.90',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10092683930992.html'
    }, {
        'id': 150,
        'name': '赟娅生日情人节礼物男生送男朋友浪漫惊喜男实用治愈走心轻奢高级音响 星空系列B+发光小夜灯音箱画',
        'price': '113.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10090871394503.html'
    }, {
        'id': 151,
        'name': 'KAWOO开物听海助眠蓝牙音箱无线复古白噪音小型迷你电脑桌面音响noowere唱片机氛围灯摆件520情人节礼物 海盐白|水波纹透明转盘|投影灯光',
        'price': '154.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10097311738849.html'
    }, {
        'id': 152,
        'name': 'COON ARPER法式高个子小香风连衣裙女2023秋冬感仙气雪纺内搭裙打底 杏色 S',
        'price': '419.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10086102906124.html'
    }, {
        'id': 153,
        'name': 'SK-II清莹嫩肤露160ml抗皱紧致保湿sk2爽肤水护肤品生日520情人节礼物',
        'price': '610.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/3342868.html'
    }, {
        'id': 154,
        'name': '罗技（G）G402游戏鼠标 有线鼠标 电竞鼠标 高速追踪 FPS鼠标吃鸡竞技宏编程 G402',
        'price': '239.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/26018789395.html'
    }, {
        'id': 155,
        'name': '秀匠林【洞洞板】电脑桌台式学生学习写字桌子家用办公电竞书桌 80长【白色+白架】',
        'price': '265.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10088023384559.html'
    }, {
        'id': 156,
        'name': '皮尔卡丹（pierre cardin）新中式国风刺绣衬衫女2024春款长袖马面上衣搭配复古气质优雅衬衣 杏色 L 建议 95-105 斤',
        'price': '139.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10097150848992.html'
    }, {
        'id': 157,
        'name': '宏资琦休闲裤女装时尚套装2024夏季新款韩版女神范显瘦休闲阔腿裤长裤子 蓝色 M（建议90—105斤）',
        'price': '118.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10046817801589.html'
    }, {
        'id': 158,
        'name': '郝能RGB氛围灯拾音电竞电脑桌面声控灯音乐音响节奏车载装饰摆件律动 黑色16灯（充电款） 普通款（一个装）',
        'price': '19.80',
        'picLastIndex': 3,
        'href': 'https://item.jd.com/10076157611296.html'
    }, {
        'id': 159,
        'name': '小米移动电源3 原装20000毫安时 USB-C18W双向快充版 充电宝 内含数据线 适用小米苹果安卓redmi手机',
        'price': '109.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100005336363.html'
    }, {
        'id': 160,
        'name': '索爱蓝牙音箱小身材√大音量√长续航√梦幻星球灯√',
        'price': '168.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100031383094.html'
    }, {
        'id': 161,
        'name': '晨芙短款西装外套女小个子气质职业套装时尚主持人休闲西服正装工作服 A050单件杏色外套 L码(建议100-110斤)',
        'price': '158.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/10020493664908.html'
    }, {
        'id': 162,
        'name': '蝶娇诺（DIEJIAONUO）连衣裙女装2024年夏季新款韩版甜辣妹小个子学院风穿搭牛仔短裙子 上衣+裙子 M',
        'price': '158.00',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10099862742626.html'
    }, {
        'id': 163,
        'name': '银卡【有你竹够】手链女生日礼物女520情人节礼物送女朋友什么礼物送老婆实用高级感镀黄金手镯',
        'price': '389.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100055271470.html'
    }, {
        'id': 164,
        'name': '蔓草寇法式复古收腰显瘦蝴蝶结连衣裙女学生夏季韩版蕾丝拼接蓬蓬公主裙 格纹连衣裙 M',
        'price': '103.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10079967184215.html'
    }, {
        'id': 165,
        'name': 'monqiqi【2024超级新品丨开创5.4蓝牙】蓝牙耳机骨传导概念舒适开放式无线不入耳夹耳耳夹式运动适用华为 耀夜黑丨超清臻音低频丨臻享版 金奖大师调音丨70H续航索尼通用',
        'price': '300.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10096756795639.html'
    }, {
        'id': 166,
        'name': '赫莲娜HR黑绷带50ml+白绷带50护肤品套装化妆品玻色因面霜520情人节礼物',
        'price': '7460.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/100012372599.html'
    }, {
        'id': 167,
        'name': '罗技（G）游戏电竞鼠标垫布面中小号办公细面加厚锁边鼠标垫 大G游戏鼠标垫(340*280*4mm)',
        'price': '17.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10076126982452.html'
    }, {
        'id': 168,
        'name': '闪动少女2024春秋季新款法式长袖连衣女小众设计感温柔风森系超仙仙女 奶 XS_建议7085斤',
        'price': '71.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10096750292763.html'
    }, {
        'id': 169,
        'name': '公子玉公主裙女童礼服连衣裙春夏装中大童小女孩钢琴高端蓬蓬网纱背心裙 香槟色 110cm',
        'price': '138.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10030449706601.html'
    }, {
        'id': 170,
        'name': '凯安尼（KAIANNI）别致法式复古甜辣黑色小个子盐系炸街假两件连衣裙子ins风女夏季 黑色 S',
        'price': '62.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/10033365582191.html'
    }, {
        'id': 171,
        'name': '百雀羚面膜 小雀幸面膜缤纷装30片补水透亮保湿(滢润+澄静+紧弹)520礼物',
        'price': '118.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/100000060085.html'
    }, {
        'id': 172,
        'name': '待婉衣服女装2023纯欲风连衣裙夏季春季温柔系穿搭女韩版气质吊带 杏色卫衣+杏色短裙 2XL 建议140-160斤',
        'price': '94.08',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10094215499987.html'
    }, {
        'id': 173,
        'name': '皮尔卡丹（pierre cardin）时尚休闲套装女纯色半袖上衣短裤显瘦两件套套装2024新款夏季洋气 杏色 XL',
        'price': '297.89',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/10054171629738.html'
    }, {
        'id': 174,
        'name': '赟娅日照金山摆件桌面香薰扩香石高级创意礼盒男女生氛围灯生日礼物 金山+三色灯【小苍兰】',
        'price': '79.00',
        'picLastIndex': 8,
        'href': 'https://item.jd.com/10093719019685.html'
    }, {
        'id': 175,
        'name': '赛途显示器增高架 加长桌面收纳多功能置物架电竞风电脑底座支架层架',
        'price': '168.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/100028295308.html'
    }, {
        'id': 176,
        'name': 'GPD win4 游戏机掌机锐龙7 8840U/锐龙5高性能迷你6英寸掌上电脑畅玩3A大作单机steam掌机 AMD R7-7840U 64G+4TB 黑 标配版',
        'price': '7998.00',
        'picLastIndex': 9,
        'href': 'https://item.jd.com/10079740777729.html'
    }, {
        'id': 177,
        'name': '一晨卫生纸48卷布感本色卷纸竹浆纸巾厕所手纸大包装家庭用纸批发',
        'price': '24.90',
        'picLastIndex': 5,
        'href': 'https://item.jd.com/50538449989.html'
    }, {
        'id': 178,
        'name': '罗技（G）G502无线游戏鼠标 电竞游戏鼠标 RGB炫彩灯光 无线有线双模鼠标 25600DPI G502无线+鼠标垫',
        'price': '479.00',
        'picLastIndex': 6,
        'href': 'https://item.jd.com/48280249836.html'
    }, {
        'id': 179,
        'name': '皮尔卡丹（pierre cardin）新中式盘扣长袖女士衬衫秋季2024秋装新款中国风复古气质短款上衣 提花杏色衬衫 XL【115-125斤】',
        'price': '89.00',
        'picLastIndex': 4,
        'href': 'https://item.jd.com/10096688551354.html'
    }, {
        'id': 180,
        'name': 'Divoom点音 DIY像素动态数码屏画框桌面电竞房装饰摆件RGB氛围灯电脑桌搭科技感pixoo64礼物 PIXOO（16x16像素画）',
        'price': '369.00',
        'picLastIndex': 7,
        'href': 'https://item.jd.com/37605202000.html'
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

// 全局的 orders 对象，用于存储所有用户的订单
let orders = {
    "1": [],
    "2": []
};

// 模拟 GET 请求，获取用户订单
Mock.mock(new RegExp('http://localhost:8080/shop/order/\\d+'), 'get', config => {
    let arr = config.url.split('/');
    let id = arr[arr.length - 1];
    return success("查询成功", orders[id] || []); // 如果找不到用户订单，返回空数组
});

// 模拟 POST 请求，创建订单
Mock.mock("http://localhost:8080/shop/order/", "post", config => {
    // 解析 JSON 数据
    let data = JSON.parse(config.body);

    // 获取用户 ID
    let userId = data.userId;

    // 获取产品数组
    let products = data.products;
    console.log(products)
    // 如果 orders 中没有该用户，则创建一个空数组来存储他们的订单
    if (!orders[userId]) {
        orders[userId] = [];
    }
    // 为该用户新增订单
    for (let product of products) {
        if (product.checked) {
            let total = product.price * product.count;
            let order = {
                id: (orders[userId].length + 1),
                name: product.name,
                total: total,
                createdAt: new Date().toISOString(),
                status: "1"
            };
            orders[userId].push(order);
        }
    }

    // 打印用户的订单列表（可选）
    console.log(orders[userId]);

    // 返回成功消息
    return success("订单创建成功，请于30min完成支付！");
});
