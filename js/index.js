new Vue({
  el: "#app",
  data: function () {
    return {
      isEnter: false,
      activeMenuIndex: -1,
      dialectSwiper: null,
      activeLevelIndex: 0,
      dialects: {
        0: [
          {
            title: "今天",
            pinyin: "Jing Tian",
            desc: "上海话里通常管“今天”叫",
            options: [
              { key: "A", label: "今日", value: false },
              { key: "B", label: "今夜", value: false },
              { key: "C", label: "今朝", value: true },
              { key: "D", label: "今天", value: false },
            ],
          },
          {
            title: "汽水",
            pinyin: "Qi Shui",
            desc: "在旧上海方言中，汽水一般被称作",
            options: [
              { key: "A", label: "印度水", value: false },
              { key: "B", label: "挪威水", value: false },
              { key: "C", label: "荷兰水", value: true },
              { key: "D", label: "东洋水", value: false },
            ],
          },
          {
            title: "嘎讪胡",
            pinyin: "Ge Shang Hu",
            desc: "上海话中，“嘎讪胡”指",
            options: [
              { key: "A", label: "聊天、闲聊", value: true },
              { key: "B", label: "吵架", value: false },
              { key: "C", label: "制作珊瑚类的工艺品", value: false },
              { key: "D", label: "语气助词", value: false },
            ],
          },
          {
            title: "轧闹猛",
            pinyin: "Ya Nao Meng",
            desc: "上海话中，“轧闹猛”指",
            options: [
              { key: "A", label: "凑热闹，哪里人多往哪里挤", value: true },
              { key: "B", label: "心情不好乱发脾气", value: false },
              { key: "C", label: "为了达到目的而耍手段", value: false },
              { key: "D", label: "比比谁厉害", value: false },
            ],
          },
          {
            title: "扒分",
            pinyin: "Ba Feng",
            desc: "在上海方言中，“扒分”是指",
            options: [
              { key: "A", label: "到处找分子钱", value: false },
              { key: "B", label: "赚外快", value: true },
              { key: "C", label: "收钱", value: false },
              { key: "D", label: "敲诈勒索钱财", value: false },
            ],
          },
          {
            title: "逛马路",
            pinyin: "Guang Ma Lu",
            desc: "上海人习惯把“逛马路”说成",
            options: [
              { key: "A", label: "走马路", value: false },
              { key: "B", label: "骑马路", value: false },
              { key: "C", label: "穿马路", value: false },
              { key: "D", label: "兜马路", value: true },
            ],
          },
          {
            title: "老虎脚爪",
            pinyin: "Lao Hu Jiao Zhua",
            desc: "上海话里“老虎脚爪”是指",
            options: [
              { key: "A", label: "老虎爪子", value: false },
              { key: "B", label: "一种面食", value: true },
              { key: "C", label: "指人的手脚很有力气", value: false },
              { key: "D", label: "写字很难看", value: false },
            ],
          },
          {
            title: "打桩模子",
            pinyin: "Da Zhuang Mu Zi",
            desc: "在上海方言中，“打桩模子”是指这个人",
            options: [
              { key: "A", label: "劳动工具", value: false },
              { key: "B", label: "打桩工人", value: false },
              { key: "C", label: "黄牛", value: true },
              { key: "D", label: "有点笨", value: false },
            ],
          },
          {
            title: "水门汀",
            pinyin: "Shui Men Ding",
            desc: "在上海方言中，“水门汀”是指",
            options: [
              { key: "A", label: "水泥板", value: true },
              { key: "B", label: "酒吧", value: false },
              { key: "C", label: "水闸", value: false },
              { key: "D", label: "水泥灰", value: false },
            ],
          },
          {
            title: "吃客",
            pinyin: "Chi Ke",
            desc: "这个人是个“吃客”，“吃客”是指",
            options: [
              { key: "A", label: "请客吃饭的人", value: false },
              { key: "B", label: "专门吃白食的人", value: false },
              { key: "C", label: "吃货", value: false },
              { key: "D", label: "美食家", value: true },
            ],
          },
        ],
        1: [
          {
            title: "AA制",
            pinyin: "AA Zhi",
            desc: "上海人一起吃饭，实行AA制，叫做",
            options: [
              { key: "A", label: "开山头", value: false },
              { key: "B", label: "寻开心", value: false },
              { key: "C", label: "触壁脚", value: false },
              { key: "D", label: "劈硬柴", value: true },
            ],
          },
          {
            title: "222元",
            pinyin: "222 Yuan",
            desc: "上海话“222元”的读音是什么",
            options: [
              { key: "A", label: "贰佰贰拾贰元", value: false },
              { key: "B", label: "贰贰贰元", value: false },
              { key: "C", label: "两百乃尼块", value: true },
              { key: "D", label: "两百两十两元", value: false },
            ],
          },
          {
            title: "包脚布",
            pinyin: "Bao Jiao Bu",
            desc: "上海话里的“包脚布”常常指一种",
            options: [
              { key: "A", label: "外国进口布料", value: false },
              { key: "B", label: "街头小报", value: false },
              { key: "C", label: "限制你自由的人", value: false },
              { key: "D", label: "面食", value: true },
            ],
          },
          {
            title: "幺二角落",
            pinyin: "You Er Jiao Luo",
            desc: "“幺二角落”在上海方言中是指",
            options: [
              { key: "A", label: "第二个路口", value: false },
              { key: "B", label: "不被注意的地方", value: false },
              { key: "C", label: "热闹的市场", value: false },
              { key: "D", label: "很差的地方", value: true },
            ],
          },
          {
            title: "条子",
            pinyin: "Tiao Zi",
            desc: "“条子”在上海方言中是指",
            options: [
              { key: "A", label: "身材", value: true },
              { key: "B", label: "警察", value: false },
              { key: "C", label: "麻将牌", value: false },
              { key: "D", label: "卧底", value: false },
            ],
          },
          {
            title: "落苏",
            pinyin: "Luo Su",
            desc: "“阿拉夜饭吃格是油焖落苏。”落苏就是",
            options: [
              { key: "A", label: "番茄", value: false },
              { key: "B", label: "西红柿", value: false },
              { key: "C", label: "茄子", value: true },
              { key: "D", label: "萝卜", value: false },
            ],
          },
          {
            title: "那摩温",
            pinyin: "Na Mo Wen",
            desc: "旧上海话里的“那摩温”常常指",
            options: [
              { key: "A", label: "买办", value: false },
              { key: "B", label: "蝌蚪", value: false },
              { key: "C", label: "一种食物", value: false },
              { key: "D", label: "工头", value: true },
            ],
          },

          {
            title: "单档 双档",
            pinyin: "DanDang ShuangDang",
            desc: "上海话里的“单档”、“双档”是什么？",
            options: [
              {
                key: "A",
                label: "单档是一只面筋一只百叶包，双档是两只面筋两只百叶包",
                value: true,
              },
              { key: "B", label: "单杠、双杠", value: false },
              { key: "C", label: "一份档案和两份档案", value: false },
              { key: "D", label: "是开关的品种", value: false },
            ],
          },
          {
            title: "绷忒",
            pinyin: "Beng Tei",
            desc: "在上海方言中，“绷忒”一般是指________。",
            options: [
              { key: "A", label: "一种绷床", value: false },
              { key: "B", label: "受了伤", value: false },
              { key: "C", label: "没劲", value: false },
              { key: "D", label: "一拍两散", value: true },
            ],
          },
          {
            title: "吃力不讨好",
            pinyin: "Chi Li Bu Tao Hao",
            desc: "“吃力不讨好”后一句是________。",
            options: [
              { key: "A", label: "有理讲不清", value: true },
              { key: "B", label: "人嘴扎勿牢", value: false },
              { key: "C", label: "阿王炒年糕", value: false },
              { key: "D", label: "明朝晒断腰", value: false },
            ],
          },
        ],
        2: [
          {
            title: "伊老坍板格",
            pinyin: "Yi Lao Tan Ban Ge",
            desc: "“伊老坍板格。”坍板可以用________代替。",
            options: [
              { key: "A", label: "丘", value: false },
              { key: "B", label: "没腔调", value: true },
              { key: "C", label: "十三点", value: false },
              { key: "D", label: "贼忒兮兮", value: false },
            ],
          },
          {
            title: "鹿六陆露",
            pinyin: "Lu Liu Lu Lu",
            desc: "现代上海话中，下列哪个字的发音和其他不同？",
            options: [
              { key: "A", label: "鹿", value: false },
              { key: "B", label: "六", value: false },
              { key: "C", label: "陆", value: false },
              { key: "D", label: "露", value: true },
            ],
          },
          {
            title: "四马路",
            pinyin: "Si Ma Lu",
            desc: "上海话里“四马路”是指现在哪条道路？",
            options: [
              { key: "A", label: "九江路", value: false },
              { key: "B", label: "福州路", value: true },
              { key: "C", label: "山东中路", value: false },
              { key: "D", label: "四川北路", value: false },
            ],
          },
          {
            title: "掼奶油 白脱 吃排头 沙司",
            pinyin: "GuanNaiYou BaiTuo ChiPaiTou ShaSi",
            desc: "下面哪个词语与其他不是同一类？",
            options: [
              { key: "A", label: "掼奶油", value: false },
              { key: "B", label: "白脱", value: false },
              { key: "C", label: "吃排头", value: true },
              { key: "D", label: "沙司", value: false },
            ],
          },
          {
            title: "烂糊三鲜汤",
            pinyin: "Lan Hu San Xian Tang",
            desc: "“烂糊三鲜汤”是指________",
            options: [
              { key: "A", label: "上海的一种汤点", value: false },
              { key: "B", label: "形容很难吃的食物", value: false },
              { key: "C", label: "做事情一塌糊涂", value: true },
              {
                key: "D",
                label: "A.比喻把不相关的事情搅和在一起",
                value: false,
              },
            ],
          },
          {
            title: "一支司的克",
            pinyin: "Yi Zhi Si De Ke",
            desc: "“我送了他一支司的克”的意思是________？",
            options: [
              { key: "A", label: "我送了他一柄雨伞", value: false },
              { key: "B", label: "我送了他一支拐杖", value: true },
              { key: "C", label: "我送了他一支派克笔", value: false },
              { key: "D", label: "我送了他一个领带夹", value: false },
            ],
          },
          {
            title: "额角头碰到天花板",
            pinyin: "E Jiao Tou Peng Dao Tian Hua Ban",
            desc: "“额角头碰到天花板”是指________？",
            options: [
              { key: "A", label: "人长得很高", value: false },
              { key: "B", label: "不注意撞到墙", value: false },
              { key: "C", label: "运气爆棚", value: true },
              { key: "D", label: "倒霉到极点", value: false },
            ],
          },
          {
            title: "煞根",
            pinyin: "Sha Gen",
            desc: "“煞根”是指________？",
            options: [
              { key: "A", label: "很厉害的，令人满足的", value: true },
              { key: "B", label: "很刺激的，有趣的", value: false },
              { key: "C", label: "不好受，难受", value: false },
              { key: "D", label: "心中得意", value: false },
            ],
          },
          {
            title: "大舞台对过",
            pinyin: "Da Wu Tai Dui Guo",
            desc: "歇后语“大舞台对过－－”的后半句是？",
            options: [
              { key: "A", label: "拎勿清", value: false },
              { key: "B", label: "弄伊勿懂", value: false },
              { key: "C", label: "天晓得", value: true },
              { key: "D", label: "吃伊勿消", value: false },
            ],
          },
          {
            title: "四大金刚",
            pinyin: "Si Da Jin Gang",
            desc: "上海早饭的“四大金刚”是哪四样？",
            options: [
              { key: "A", label: "大饼、油条、豆浆、粢饭", value: true },
              { key: "B", label: "馒头、包子、煎饼果子、牛奶", value: false },
              { key: "C", label: "面包、香肠、三明治、咖啡", value: false },
              { key: "D", label: "生煎、锅贴、南翔小笼、豆浆", value: false },
            ],
          },
        ],
        3: [
          {
            title: "麦克麦克",
            pinyin: "Mai Ke Mai Ke",
            desc: "老上海话中“麦克麦克”是指________？",
            options: [
              { key: "A", label: "人名", value: false },
              { key: "B", label: "钞票多", value: true },
              { key: "C", label: "做标记", value: false },
              { key: "D", label: "胡说八道", value: false },
            ],
          },
          {
            title: "墙头浪绣花",
            pinyin: "Qiang Tou Lang Xiu Hua",
            desc: "上海话中“墙头浪绣花”这句话的下半句是________。",
            options: [
              { key: "A", label: "出风头", value: false },
              { key: "B", label: "勿识相", value: false },
              { key: "C", label: "戳壁脚", value: true },
              { key: "D", label: "活里活络 ", value: false },
            ],
          },
          {
            title: "伊拉专门斩洋葱头",
            pinyin: "Yi La Zhuan Men Zhan Yang Cong Tou",
            desc: "“伊拉专门斩洋葱头。”这句话的意思可能是________。",
            options: [
              { key: "A", label: "他们是加工洋葱的专家。", value: false },
              {
                key: "B",
                label: "他们敲了一个叫洋葱头的人一笔竹杠。",
                value: false,
              },
              { key: "C", label: "他们既是洋盘也是冲头。", value: false },
              { key: "D", label: "他们专骗外国人的钱。", value: true },
            ],
          },
          {
            title: "气急败坏",
            pinyin: "Qi Ji Bai Huai",
            desc: "上海话里形容“气急败坏”的形象化说法为________。",
            options: [
              { key: "A", label: "阿潽阿潽", value: true },
              { key: "B", label: "阿兀阿兀", value: false },
              { key: "C", label: "阿咕阿咕", value: false },
              { key: "D", label: "阿噜阿噜", value: false },
            ],
          },
          {
            title: "掼侬三条横马路",
            pinyin: "Guan Nong San Tiao Heng Ma Lu",
            desc: "上海话中“掼侬三条横马路”是指________。",
            options: [
              { key: "A", label: "两人离得很远", value: false },
              { key: "B", label: "比你好很多 ", value: true },
              { key: "C", label: "把人丢出三条马路", value: false },
              { key: "D", label: "比你力气大很多", value: false },
            ],
          },
          {
            title: "吃的洋籼米",
            pinyin: "Chi De Yang Xian Mi",
            desc: "上海话中“吃的洋籼米”这句话的下半句是________。",
            options: [
              { key: "A", label: "操不完的心", value: false },
              { key: "B", label: "发的糯米嗲", value: true },
              { key: "C", label: "操的老板心", value: false },
              { key: "D", label: "发的油条嗲", value: false },
            ],
          },
          {
            title: "小吃",
            pinyin: "Xiao Chi",
            desc: "“上海小吃花样多，________，吃好今朝想明朝。”",
            options: [
              {
                key: "A",
                label:
                  "大饼油条粢饭糕，豆花生煎肉包子，排骨年糕腌笃鲜，松鼠桂鱼两面黄",
                value: false,
              },
              {
                key: "B",
                label:
                  "红烧大排三黄鸡，三鲜馄饨蟹壳黄，煎饼果子梨膏糖，南翔小笼葱油面",
                value: false,
              },
              {
                key: "C",
                label:
                  "大饼油条小笼包，咸浆锅贴肉馒头，老虎脚爪粢饭糕，粢饭炝饼小馄饨",
                value: false,
              },
              {
                key: "D",
                label:
                  "豆浆麻球油墩子，冰糖葫芦酸梅汤，酒酿圆子葱油饼，牛肉拉面海棠糕",
                value: false,
              },
            ],
          },
        ],
      },
      currentDialects: [],
      dialectSelectedOption: null,
      dialectSelectedIndex: null,
      dialectSelectFlag: false, //是否已选择
      menus: ["上海方言", "沪语听译", "沪语童谣", "洋泾浜话"],
      levels: ["初级", "中级", "高级", "终极"],
    };
  },
  methods: {
    handleEnter: function () {
      this.isEnter = true;
    },
    handleMenu: function (index) {
      this.activeMenuIndex = index;
      if (!this.activeMenuIndex) {
        this.initDialectSwiper();
        this.handleDialectLevel(0);
      }
    },
    handleBack: function () {},
    handleFullScreen: function() {
      
    },
    handleClickOption: function (index, item) {
      this.dialectSelectFlag = true;
      this.dialectSelectedIndex = index;
      this.dialectSelectedOption = item;
    },
    handleDialectLevel: function (index) {
      this.activeLevelIndex = index;
      this.currentDialects = this.dialects[index];
      this.dialectSwiper.slideTo(0, 100);
    },
    handleBackToIndex: function () {
      window.location.href = "../index.html";
    },
    initDialectSwiper() {
      let _this = this;
      this.dialectSwiper = new Swiper(".menu1 .swiper-container", {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function() {
            _this.dialectSelectFlag = false;
            _this.dialectSelectedIndex = null;
            _this.dialectSelectedOption = null;
          }
        }
      });
    },
    initListenTranslationSwiper() {
      new Swiper(".menu2 .swiper-container", {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
});
