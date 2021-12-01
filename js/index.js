new Vue({
  el: "#app",
  data: function () {
    return {
      isEnter: false,
      activeMenuIndex: -1,
      // 方言
      dialectSwiper: null,
      activeLevelIndex: 0,
      dialects: [
        [
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
        [
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
        [
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
        [
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
      ],
      currentDialects: [],
      dialectSelectedOption: null,
      dialectSelectedIndex: null,
      dialectSelectFlag: false, //是否已选择
      menus: ["上海方言", "沪语听译", "沪语童谣", "洋泾浜话"],
      levels: ["初级", "中级", "高级", "终极"],

      //听译
      listens: [
        {
          title: "第一课 问候 情景(一)",
          audio: "",
          options: [
            {
              key: "A",
              label:
                "B：你今天为什么起来那么早？ A：学校今天有事情，所以我早点去了。",
              value: true,
            },
            {
              key: "B",
              label:
                "B：你今天为什么起来那么早？ A：今天公司有事情，我先走了。",
              value: false,
            },
          ],
        },
        {
          title: "第一课 问候 情景(二)",
          audio: "",
          options: [
            {
              key: "A",
              label:
                "B：你今天为什么起来那么早？ A：学校今天有事情，所以我早点去了。",
              value: true,
            },
            {
              key: "B",
              label:
                "B：你今天为什么起来那么早？ A：今天公司有事情，我先走了。",
              value: false,
            },
          ],
        },
        {
          title: "第一课 问候 情景(一)",
          audio: "",
          options: [
            {
              key: "A",
              label:
                "B：你今天为什么起来那么早？ A：学校今天有事情，所以我早点去了。",
              value: true,
            },
            {
              key: "B",
              label:
                "B：你今天为什么起来那么早？ A：今天公司有事情，我先走了。",
              value: false,
            },
          ],
        },
        {
          title: "第二课 在路上 情景(一)",
          audio: "",
          options: [
            {
              key: "A",
              label:
                "B：你今天为什么起来那么早？ A：学校今天有事情，所以我早点去了。",
              value: true,
            },
            {
              key: "B",
              label:
                "B：你今天为什么起来那么早？ A：今天公司有事情，我先走了。",
              value: false,
            },
          ],
        },
      ],

      //童谣
      activeTabIndex: 0,
      tabs: ["沪语童谣", "沪语老照片"],
      musicData: [
        {
          title: "《小八腊子开会了》",
          audio: "",
          lyric: [
            "落雨啦，打烊啦，小八腊子开会了，小八腊子开会了，开会了！",
            "落雨了，打烊了，小八腊子开会了。",
            "落雨了，打烊了，小八腊子开会了。",
            "落雨啦，打烊啦，落雨啦，打烊啦，落雨啦，打烊啦，小八腊子开会了。",
            "喂，喂，侬姓啥？我姓黄。啥个黄？草头黄。啥个草？青草。啥个青？碧历青。啥个碧？毛笔。啥个毛？三毛。啥个三？高山。啥个高？年糕。啥个年？ 新年。大家拜个年！",
            "哆来咪，就是你；哆来啦，就是他；哆来咪西拉，就是你和他，就是你和他。",
            "落雨啦，打烊啦，小八腊子开会了，小八腊子开会了，小八腊子开会了！啦啦啦！",
          ],
        },
        {
          title: "《摇啊摇！摇到外婆桥》",
          audio: "",
          lyric: [
            "摇啊摇，摇啊摇，摇到外婆桥，摇啊摇，摇啊摇，摇到外婆桥，外婆叫我好宝宝，一只馒头一块糕。",
            "摇啊摇，摇啊摇，摇到外婆桥，摇啊摇，摇啊摇，摇到外婆桥，外婆叫我好宝宝，一只馒头一块糕。",
            "插秧船真灵巧，外婆见了末嘻嘻啊笑,坐辣隔板插秧苗，十天八朝末勿伸腰,",
            "插秧船真灵巧，外婆见了末嘻嘻啊笑,秧苗装进小船艄，颗颗秧苗末开心笑。",
            "摇啊摇，摇到外婆桥，外婆叫我好宝宝，外婆叫我好宝宝。伊哎。",
          ],
        },
        {
          title: "《啋冬啋》",
          audio: "",
          lyric: [
            "啋冬里啋，乒令乓冷气，啋冬里啋来，乒令乓冷气！我呀出把剪刀，我呀出块石头，剪刀砸石头，败呀败下来。",
            "乒令乓冷啋冬啋，乒令乓冷啋冬啋，啋呀冬里啋。侬来啋，（我来啋，）侬来啋呀，我来啋，啋冬里啋！啋！",
            "啋冬里啋，乒令乓冷气，啋冬里啋来，乒令乓冷气！我呀出块石头，我呀出块绢头，绢头包石头，凯歌响起来。",
            "乒令乓冷啋冬啋，乒令乓冷啋冬啋，啋呀冬里啋。侬来啋，（我来啋，）侬来啋呀，我来啋，啋冬里啋！啋！",
          ],
        },
        {
          title: "《酱油蘸鸡萝卜烧蹄箫》",
          audio: "",
          lyric: [
            "酱油蘸鸡，萝卜烧蹄髈，肉丝清炒炒，十锦两面黄，糖醋小排，红烧狮子头。红烧狮子头。",
            "酱油蘸鸡，萝卜烧蹄髈，肉丝清炒炒，十锦两面黄，糖醋小排，红烧狮子头。",
            "萝卜烧蹄髈，糖醋小排，红烧蹄髈。",
            "少吃身体健康，多吃身体发胖。少吃身体健康，多吃身体发胖。伲要健康，勿要发胖。哈哈…… ",
            "嗨 嗨。",
          ],
        },
        {
          title: "《笃笃笃，卖糖粥》",
          audio: "",
          lyric: [
            "笃笃笃，卖糖粥，三斤胡桃四斤壳，吃侬个肉，还侬个壳。张家老伯伯，问侬讨只小花狗汪汪。",
            "笃笃笃，卖糖粥，三斤胡桃四斤壳，吃侬个肉，还侬个壳。张家老伯伯，问侬讨只小花狗汪汪。",
            "小弟弟小妹妹跑开点，敲碎玻璃老价钿，嗨嗨嗨哈哈哈，敲碎玻璃老价钿。",
            "小弟弟，（小呀小弟弟呀，）小妹妹，（小呀小妹妹呀，）敲碎玻璃老价钿。钿。",
            "小弟弟小妹妹跑开点，敲碎玻璃老价钿，嗨嗨嗨哈哈哈，敲碎玻璃老价钿。",
            "小弟弟，（小呀小弟弟呀，）小妹妹，（小呀小妹妹呀，）敲碎玻璃老价钿。钿。",
          ],
        },
        {
          title: "《小皮球》",
          audio: "",
          lyric: [
            "小皮球，小小篮，落地开花二十一，二六二七二八二九三十一，三六三七三八三九四十一，",
            "四六四七四八四九五十一，五六五七五八五九六十一，六六六七六八六九七十一，七六七七七八七九八十一，八六八七八八八九就十一，九六九七九八九九一百一。",
            "小小皮球，小小篮，转转花头开心来。",
            "乒乓球乒乒乓，呼啦圈转转转。",
            "乒乓球乒乒乓，呼啦圈转转转。",
            "乒乓球乒乒乓，呼啦圈转转转。",
            "乒乓球乒乒乓，呼啦圈转转转。",
            "呼啦圈，（呼啦圈，呼啦圈）乒乓球，（乒乓球，乒乓球，）乒呀乒乓球，乒乒乓。",
          ],
        },
        {
          title: "《童谣朗读(一)》",
          audio: "",
          lyric: [
            "（一）",
            "嘟嘟飞，虫虫飞，拍拍小手虫虫飞；嘟嘟飞，虫虫飞，扇扇翅膀虫虫飞；",
            "嘟嘟飞，虫虫飞，翻个跟斗虫虫飞；嘟嘟飞，虫虫飞，恭喜拜年虫虫飞。",
            "（二）",
            "一歇哭，一歇笑，两只眼睛开大炮。一开开到城隍庙，城隍老爷哈哈笑。",
            "（三）",
            "三三三，阿拉侪是木头人，勿许讲话勿许动，还有一个勿许笑。",
            "（四）",
            "二三月，放风筝，放得高，大家吃块糕，放得低，大家吃眼烂污泥。",
            "（五）",
            "一箩麦，二箩麦，三箩开手拍大麦，劈劈拍，劈劈拍。",
            "（六）",
            "小老虫，上灯台，偷油吃，勿下来，骨落骨落滚下来。",
            "（七）",
            "金锁，银锁，轧辣辣吱一锁，金锁，银锁，轧辣辣吱一锁，金锁，银锁，轧辣辣吱一锁，锁牢伊！",
            "（八）",
            "炒炒炒，炒黄豆，炒好黄豆翻跟头。炒炒炒，炒黄豆，炒好黄豆翻跟头。",
            "（九）",
            "冬瓜皮，西瓜皮，小姑娘赤膊老面皮。",
            "（十）",
            "啷啷啷，啷啷啷，骑马到松江，松江老虎叫，别转马头朝北跑。朝北跑。",
            "（十一）",
            "本来要打千千万万记，现在辰光来勿及，马马虎虎打十记。一、二、三、四、五， 六、七、八、九、十！",
          ],
        },
        {
          title: "《一根紫竹直苗苗》",
          audio: "",
          lyric: [
            "一根呀紫竹直呀直苗苗，早早扯起豆腐标，啊呀豆腐末扦销销，（啊呀豆腐末扦销销呀，）",
            "啊呀也好生吃也好做汤烧。问娇娇呀，迭板豆腐好勿好？问娇娇呀，迭板豆腐好勿好？",
            "一根呀紫竹直呀直苗苗，早早扯起豆腐标，啊呀豆腐末扦销销，啊呀豆腐末扦销销，也好生吃也好做汤烧。啊呀呀也好做汤烧。问娇娇，迭板豆腐好勿好？问娇娇，迭板豆腐好勿好？",
            "一呀根紫竹，一根紫竹直苗苗，早早扯起，早早扯起豆腐标，豆腐末扦销销，（啊呀豆腐末扦销销呀，）啊呀也好生吃也好做汤烧。问娇娇呀，迭板豆腐好勿好？问娇娇呀，迭板豆腐好勿好？",
            "一根呀紫竹直呀直苗苗，早早扯起豆腐标，啊呀豆腐末扦销销，啊呀豆腐末扦销销，也好生吃也好做汤烧。啊呀呀也好做汤烧。问娇娇，迭板豆腐好勿好？问娇娇，迭板豆腐好勿好？问娇娇，迭板豆腐好勿好？",
          ],
        },
        {
          title: "《飞过太湖艄》",
          audio: "",
          lyric: [
            "啥个花开来黑良心哎，哟喂啥个花开来满天星？啥个花开来当饭吃嗫，啥个花开来当点心？",
            "蚕豆花开来黑良心哎，哟喂绿肥花开来满天星，小麦花开来当饭吃嗫，南瓜花开来当点心。",
            "啥个鸟飞来末节节高哎，哟喂啥个鸟飞来像双刀？啥个鸟飞进青草里嗫，啥个鸟飞过太湖艄。",
            "叫天子飞来末节节高，燕子末飞来像双刀，野鸟末飞进青草里，野鸭子飞过太湖艄。",
            "蚕豆花开来末黑良心，绿肥花开来满天星，小麦花开来当饭吃，南瓜花开来末当心点。",
            "叫天子飞来末节节高，燕子末飞来像双刀，野鸟末飞进青草里，野鸭子飞过太湖艄。哎",
            "山歌好唱口难开，哎樱桃末好吃树难栽，白米饭好吃田难种啊，鲜鱼汤好吃网难扳。喂喂哟！",
          ],
        },
        {
          title: "《说不尽的好风光》",
          audio: "",
          lyric: [
            "上有呀天堂，下呀有苏杭。杭州西湖，苏州有山塘，哎呀两处好风光。",
            "哎呀哎哎呀哎呀，两处好风光。正月里梅花开，哎哎呀，二月里玉兰放，哎呀，三月里桃花",
            "满园尽开放。四月里蔷薇花开牡丹花开斗芬芳。",
            "上有呀天堂，下呀有苏杭。杭州西湖，苏州有山塘，哎呀两处好风光。",
            "哎呀哎哎呀哎呀，两处好风光。",
          ],
        },
        {
          title: "《凤阳花鼓》",
          audio: "",
          lyric: [
            "今日的锣，明日的鼓哎，啥人叫我来打花鼓啊，别样的花鼓都不会唱，我要唱的一支凤阳花鼓啊，凤呀凤阳花鼓依呀依呀嗨。刺冬刺冬嘭冬嘭，刺冬刺冬嘭冬嘭，刺冬刺冬嘭，冬冬冬嘭嘭，冬嘭！",
            "今日的锣，明日的鼓哎，啥人叫我来打花鼓啊，别样的花鼓都不会唱，我要唱的一支凤阳花鼓啊，凤呀凤阳花鼓依呀依呀嗨。刺冬刺冬嘭冬嘭，刺冬刺冬嘭冬嘭，刺冬刺冬嘭，冬冬冬嘭嘭，冬嘭！",
            "今日的锣，明日的鼓哎，啥人叫我来打花鼓啊，别样的花鼓都不会唱，我要唱的一支凤阳花鼓啊，凤呀凤阳花鼓依呀依呀嗨。刺冬刺冬嘭冬嘭，刺冬刺冬嘭冬嘭，刺冬刺冬嘭，冬冬冬嘭嘭，冬嘭！哟嗨嗨！",
          ],
        },
        {
          title: "《童谣朗读(二)》",
          audio: "",
          lyric: [
            "（一）",
            "哎呦哇，做啥啦，蚊子咬我呀，快点上来呀，上来做啥呀，上来白相呀。",
            "（二）",
            "排排坐，吃果果，侬一个，我一个，还给妹妹留一个。",
            "（三）",
            "背背驮，买猪猡，开年卖脱侬。勿肯格！",
            "（四）",
            "哩吱哩吱轿子，轿子轿子哩吱，抬轿子，抬轿子，一抬抬到城隍庙，叭拉搭，掼一跤，拾着一只大元宝。",
            "（五）",
            "新剃头，要打头，勿打三记触霉头。一，二，三！",
            "（六）",
            "山上有只老虎，老虎关辣笼子里，笼子坏脱，老虎逃脱，逃到南京，买包糖精，摆辣水里浸一浸，咪唏咪唏拉胡琴。",
            "（七）",
            "两只老虎，两只老虎，一只呒没尾巴，一只呒没耳朵，真奇怪，真奇怪！",
            "（八）",
            "赖学精，白相精。书包掼辣屋头顶，看见先生难为情。三十二只钉鞋钉，钉死钉杀钉勿进。",
            "（九）",
            "弟弟倦了，眼睛小了，眼睛小，眼睛小，要睏觉，要睏觉。姆妈坐辣摇篮边，摇篮摇啊摇，盎盎我的小宝宝，安安稳稳睏一觉。今朝睏得好，明朝起得早，花园里去采葡萄。",
            "（十）",
            "长脚鹭鸶敲洋钉，敲来敲去敲勿进，原来是只螺丝钉。",
            "（十一）",
            "山浪有只庙，庙里有只缸，缸里有只碗，碗里有只蛋，蛋里有个小和尚，嗯牙嗯牙要吃绿豆汤。",
            "（十二）",
            "吃橘子，剥橘壳，橘壳掼辣壁角落。勿吃橘子，勿剥壳，橘壳勿必掼辣壁角落。",
            "（十三）",
            "小星星，亮晶晶，青石板浪钉铜钉。小星星，亮晶晶，伊拉对侬眨眼睛。",
            "（十四）",
            "勾勾，还还，一百年，勿许赖。勾勾，还还，一百年，勿许赖。勾勾，还还，一百年，勿许赖。",
          ],
        },
        {
          title: "《春晓》",
          audio: "",
          lyric: [
            "春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少？夜来风雨声，花落知多少？花落知多少？",
            "春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少？夜来风雨声，花落知多少？花落知多少？",
            "春眠（春眠）不觉晓（不觉晓），处处闻啼鸟，蝈蝈，（蝈蝈，）蝈蝈，（蝈蝈，）夜来（夜来）风雨声，风雨声，花落知多少？夜来风雨声，花落知多少？花落知多少？",
            "春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少？夜来风雨声，花落知多少？花落知多少？花落知多少？",
          ],
        },
        {
          title: "《山居秋暝》",
          audio: "",
          lyric: [
            "空山新雨后，天气晚来秋。空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。",
            "啦啦啦啦啦，啦啦啦啦啦啦，啦啦啦啦啦，啦啦啦啦啦啦，啦啦啦啦啦，啦啦啦啦啦啦，啦啦啦啦啦啦啦啦，啦啦啦啦啦。",
            "空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。",
            "空山新雨新雨后，天气晚来晚来秋。明月松间松间照，清泉石上石上流。",
            "空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。王孙自可留。依哎！",
          ],
        },
        {
          title: "《游子吟》",
          audio: "",
          lyric: [
            "慈母手中线，手中线，游子身上衣，身上衣。临行密密缝，意恐迟迟归。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。谁言寸草心，报得三春晖。报得三春晖。",
            "慈母手中线，手中线，游子身上衣，身上衣。临行密密缝，意恐迟迟归。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。谁言寸草心，报得三春晖，三春晖。",
          ],
        },
      ],
      oldPictureData: [
        "./imgs/pic_1.png",
        "./imgs/pic_2.png",
        "./imgs/pic_3.png",
        "./imgs/pic_4.png",
        "./imgs/pic_5.png",
        "./imgs/pic_6.png",
        "./imgs/pic_7.png",
        "./imgs/pic_8.png",
        "./imgs/pic_9.png",
        "./imgs/pic_10.png",
        "./imgs/pic_11.png",
        "./imgs/pic_12.png",
        "./imgs/pic_13.png",
        "./imgs/pic_14.png",
        "./imgs/pic_15.png",
        "./imgs/pic_16.png",
        "./imgs/pic_17.png",
        "./imgs/pic_18.png",
        "./imgs/pic_19.png",
        "./imgs/pic_20.png",
        "./imgs/pic_21.png",
        "./imgs/pic_22.png",
        "./imgs/pic_23.png",
        "./imgs/pic_24.png",
        "./imgs/pic_25.png",
        "./imgs/pic_26.png",
        "./imgs/pic_27.png",
        "./imgs/pic_28.png",
        "./imgs/pic_29.png",
        "./imgs/pic_30.png",
        "./imgs/pic_31.png",
        "./imgs/pic_32.png",
        "./imgs/pic_33.png",
        "./imgs/pic_34.png",
        "./imgs/pic_35.png",
        "./imgs/pic_36.png",
        "./imgs/pic_37.png",
      ],
      musicSwiper: null,
      musicSwiperIndex: 0,
      oldPictureSwiper: null,
      oldPictureSwiperIndex: 0,

      //洋泾浜话
      categorys: ["酒类", "食品类", "交通类", "乐器类", "生活类"],
      activeCategoryIndex: 0,
      iconData: [
        [
          [
            "./imgs/group1_1_left.png",
            "./imgs/group1_2_left.png",
            "./imgs/group1_3_left.png",
            "./imgs/group1_4_left.png",
            "./imgs/group1_5_left.png",
          ],
          [
            "./imgs/group1_1_right.png",
            "./imgs/group1_2_right.png",
            "./imgs/group1_3_right.png",
            "./imgs/group1_4_right.png",
            "./imgs/group1_5_right.png",
          ],
        ],
      ],
      currentIcons: [],
      answerOfCurrentIcons: [],
      isFinish: false,
    };
  },
  created: function () {
    this.currentIcons = this.iconData[this.activeCategoryIndex];
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
      if (this.activeMenuIndex === 1) {
        this.initListenAndTranslateSwiper();
      }
      if (this.activeMenuIndex === 2) {
        this.initMusicSwiper();
      }
    },
    handleBack: function () {},
    handleFullScreen: function () {},
    handleClickOption: function (index, item) {
      this.dialectSelectFlag = true;
      this.dialectSelectedIndex = index;
      this.dialectSelectedOption = item;
    },
    handleDialectLevel: function (index) {
      this.activeLevelIndex = index;
      this.currentDialects = this.dialects[index];
      this.dialectSwiper.slideTo(0);
    },
    handleClickCategory: function (index) {
      this.isFinish = false;
      this.activeCategoryIndex = index;
      this.currentIcons = this.iconData[index] || [];
    },
    handleBackToIndex: function () {
      window.location.href = "../index.html";
    },
    handleClickTab: function (index) {
      this.activeTabIndex = index;
      this.activeTabIndex
        ? this.initOldPictureSwiper()
        : this.initMusicSwiper();
    },
    handleDrag: function (e) {
      e.dataTransfer.setData("id", e.currentTarget.id);
    },
    handleDragOver: function (e) {
      e.preventDefault();
    },
    handleDrop: function (e) {
      e.preventDefault();
      let _this = this;
      const dragElementId = e.dataTransfer.getData("id");
      const targetId = e.currentTarget.id;
      const flag = this.dealElementId(dragElementId, targetId);
      if (!flag) {
        return;
      }
      this.answerOfCurrentIcons.push(dragElementId);
      $(".icons-inner #" + dragElementId).hide();
      $(".icons-inner #" + targetId).hide();
      $(".icons-inner #" + targetId)
        .next()
        .fadeIn(1000, function () {
          $(".icons-inner #" + targetId)
            .next()
            .fadeOut(500);
          _this.isFinish = !!(
            _this.answerOfCurrentIcons.length === _this.currentIcons[0].length
          );
          _this.currentIcons = _this.isFinish ? [] : _this.currentIcons;
        });
    },

    dealElementId(originId, targetId) {
      let _originId = originId.match(/(\S*)_/)[1];
      let _targetId = targetId.match(/(\S*)_/)[1];
      return _originId === _targetId;
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
          slideChange: function () {
            _this.dialectSelectFlag = false;
            _this.dialectSelectedIndex = null;
            _this.dialectSelectedOption = null;
          },
        },
      });
    },
    initListenAndTranslateSwiper() {
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
    initMusicSwiper: function () {
      let _this = this;
      this.musicSwiper = new Swiper(".menu3 .music", {
        spaceBetween: 10,
        slidesPerView: 6,
        // centeredSlides: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            _this.musicSwiperIndex = this.activeIndex;
          },
        },
      });
    },
    initOldPictureSwiper: function () {
      let _this = this;
      this.oldPictureSwiper = new Swiper(".menu3 .old-pic", {
        spaceBetween: 30,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            _this.oldPictureSwiperIndex = this.activeIndex;
          },
        },
      });
    },
  },
});
