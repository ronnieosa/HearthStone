/**
 * Created by knrainy on 18/1/2.
 */

$(function(){

    // 卡组数据设计
    var cardRsource=[
        // 德鲁伊卡牌
        [
            // page1
            [
                {
                    'id':'1','card_cost':'0',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_008_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_008_zhCN_.png',
                    'desc':'“把月火术拖到每一个技能栏位上。”——《如何成为一名德鲁伊》，第五章，第三节',
                    'type':'基本','author':'画家：Richard Wright',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_008_zhCN_.png',
                    'card_name':'月火术','cost':'cost_num_0'
                },
                {
                    'id':'4','card_cost':'1',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_116_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_116_zhCN_.png',
                    'desc':'自从一脚踩出了葛拉卡盆地后，班纳布斯的跳舞生涯便宣告结束了。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary',
                    'author':'画家：Konstantin Turovec',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_116_zhCN_.png',
                    'card_name':'丛林巨兽',
                    'cost':'cost_num_1'
                },
                {
                    'id':'7','card_cost':'2',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_048_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_048_zhCN_.png',
                    'desc':'只要能变强，丑一点也是值得的。','type':'上古之神的低语',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Efrem Palacios',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_048_zhCN_.png',
                    'card_name':'亚煞极印记',
                    'cost':'cost_num_2'
                },
                {
                    'id':'10','card_cost':'3',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_808_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_808_zhCN_.png',
                    'desc':'他曾是甲虫乐队的一员，效忠巫妖王后便隐退了。','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Konstanin Turovec',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_808_zhCN_.png',
                    'card_name':'地穴领主',
                    'cost':'cost_num_3'
                },
                {
                    'id':'13','card_cost':'4',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_392_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_392_zhCN_.png',
                    'desc':'喜欢在公会活动中划水的德鲁伊专用。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Alexey Aparin',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_392_zhCN_.png',
                    'card_name':'世界之树的嫩枝',
                    'cost':'cost_num_4'
                },
                {
                    'id':'16','card_cost':'5',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_329_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_329_zhCN_.png',
                    'desc':'好的宠物会陪伴你成长，糟糕的宠物会长到你身上。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_329_zhCN_.png',
                    'card_name':'伊克斯里德，真菌之王',
                    'cost':'cost_num_5'
                },
                {
                    'id':'19','card_cost':'6',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_054_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_054_zhCN_.png',
                    'desc':'我一直以为瘟疫都是苍蝇老鼠在传播，可没想到你是这样的精灵。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Alex Alexandrov',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_054_zhCN_.png',
                    'card_name':'传播瘟疫',
                    'cost':'cost_num_6'
                },
                {
                    'id':'22','card_cost':'7',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_195_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_195_zhCN_.png',
                    'desc':'只不过是打上了“上古之神”的商标，其实和普通的小精灵并无二致。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Skan Srisuwan',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_195_zhCN_.png',
                    'card_name':'上古之神的小精灵',
                    'cost':'cost_num_7'
                }
            ],
            // page2
            [
                {
                    'id':'25','card_cost':'8',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_232_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_232_zhCN_.png',
                    'desc':'我打赌你一定不敢进攻达纳苏斯。','type':'基本','author':'画家：Skan Srisuwan',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_232_zhCN_.png',
                    'card_name':'埃隆巴克保护者',
                    'cost':'cost_num_8'
                },
                {
                    'id':'28','card_cost':'9',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_835_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_835_zhCN_.png',
                    'desc':'艾卓-尼鲁布的元老释放出哈多诺克斯作为抵御巫妖王的最后一道防线。他们非常小心地在一家主流报纸上进行了抢先报道。','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Zoltan Boros',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_835_zhCN_.png',
                    'card_name':'哈多诺克斯',
                    'cost':'cost_num_9'
                },
                {
                    'id':'31','card_cost':'10',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_852_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_852_zhCN_.png',
                    'desc':'历经数千年的演变后，它变成了我们现在所熟知的精灵龙。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Chris Rahn',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_852_zhCN_.png',
                    'card_name':'泰拉图斯',
                    'cost':'cost_num_10'
                }
            ]
        ],
        // 猎人卡牌
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__UNG_916_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__UNG_916_zhCN_.png',
                    'desc':'猎人们就喜欢这种乱哄哄一拥而上的感觉。','type':'勇闯安戈洛',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Daren Bader'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__CFM_026_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__CFM_026_zhCN_.png',
                    'desc':'传言曾有一个污手党的菜鸟将一整瓶牛奶打翻在了军备宝箱上，于是出现了艾泽拉斯的第一个毒性污水软泥怪。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Dan Scott'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__EX1_538_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__EX1_538_zhCN_.png',
                    'desc':'在你使用这张牌的时候，一定要喊出它的名字。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Linggar Bramanty'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_077_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_077_zhCN_.png',
                    'desc':'狼群在左，箭雨在右。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Arthur Bozonnet'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_309_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_309_zhCN_.png',
                    'desc':'哈霍兰公主游荡在安其拉废墟的上空，梦想有朝一日能遇见自己的心上人，并为他生下成千上万个孩子。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Jaemin Kim'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_217_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_217_zhCN_.png',
                    'desc':'我独自狩猎。还有米莎。还有霍弗。还有雷欧克。','type':'狗头人与地下世界',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Peter Stapleton'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_085_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_085_zhCN_.png',
                    'desc':'迷人的西蒙妮，疯狂的克林弗兰，毁灭者阿特留斯和屠杀者索伦诺尔觉得这件武器很棒。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Trent Kaniuga'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_511_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_511_zhCN_.png',
                    'desc':'她不是那种喜欢抱着树的精灵，不过偶尔的拥抱还是很让人舒服的。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Garrett Hanna'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_211_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_211_zhCN_.png',
                    'desc':'总有人抱怨使用“动物伙伴”这张牌时，召唤出来的并不是他们想要的。现在好了，三个愿望，一次满足。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Peter Stapleton'
                }
            ]
        ],
        //法师卡牌
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_021_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_021_zhCN_.png',
                    'desc':'冻住，不许走！','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Arthur Bozonnet'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_836_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_836_zhCN_.png',
                    'desc':'是这里本来就冷，还是因为辛达苟萨？','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Eric Braddock'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__LOOT_170_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__LOOT_170_zhCN_.png',
                    'desc':'乌鸦问道：“但代价是什么呢？”','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Eva Wildermann'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_252_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_252_zhCN_.png',
                    'desc':'他的骨头都快冻碎了！','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Andrew Hou'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__EX1_275_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__EX1_275_zhCN_.png',
                    'desc':'冰锥术在大约90年前开始流行起来，而在那之前，肯瑞托的法师们习惯用的是冰块术。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Leo Che'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_671_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_671_zhCN_.png',
                    'desc':'人人都爱她，尤其是在夏天！','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Tyler West Studios'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__OG_207_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__OG_207_zhCN_.png',
                    'desc':'无面者夜以继日不停工作，却从未得到应有的认可。','type':'上古之神的低语',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Mark Abadier'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_687_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_687_zhCN_.png',
                    'desc':'暗金教教徒的纹身几乎由索莉娅一手包办。它们不仅可以赋予教徒神秘的魔法力量，还能有效防范敌对家族的卧底渗透。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：J. Ejsing & E. Amundsen'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_086_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_086_zhCN_.png',
                    'desc':'想学的话得先破冰。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Evgeniy Dlinnov'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_833_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_833_zhCN_.png',
                    'desc':'“年轻的阿尔萨斯是个被宠坏的孩子，玩弄着他既不能控制、也不甚了解的力量。过来，不要害怕寒冷。我让你见识一下冰封王座的真正力量。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Glenn Rane'
                }
            ]
        ],
        //骑士卡牌
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_198_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_198_zhCN_.png',
                    'desc':'人人都爱治疗术。可禁忌治疗……听起来有些不靠谱。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Mike Franchina'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_132_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_132_zhCN_.png',
                    'desc':'有时正义的表现形式就是这么简单：紧握的拳头打在瘫软的脸上。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：James Ryman'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_089_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_089_zhCN_.png',
                    'desc':'如果你经常暴露于圣光之下，你应该考虑随身带着防晒霜。','type':'基本','author':'画家：Zoltan & Gabor'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CFM_905_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CFM_905_zhCN_.png',
                    'desc':'小家伙也能制造大麻烦。','type':'龙争虎斗加基森',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Daren Bader'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_034_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_034_zhCN_.png',
                    'desc':'说真的，要不是他能引来那只食尸鬼，这家伙就是个混球。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Anton Zemskov'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_355_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_355_zhCN_.png',
                    'desc':'“攻击翻倍，快乐加倍！”','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Tyler Walpole'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__UNG_952_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__UNG_952_zhCN_.png',
                    'desc':'恐龙骑士唯一的遗憾，就是没能参加“冠军的试炼”。','type':'勇闯安戈洛',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jim Nelson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_088_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_088_zhCN_.png',
                    'desc':'神圣的造物从天而降...真是老掉牙的剧情！','type':'基本','author':'画家：E.M. Gist'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_229_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_229_zhCN_.png',
                    'desc':'根据负负得正定理，当你去腐化一个已被腐化的火焰领主，其结果就是他变成了你们口中所谓的“好人”。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_829_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_829_zhCN_.png',
                    'desc':'“过来，忏悔！曾经的我只是圣光的仆人。但现在，我将独自审判你。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ]
        ],
        //牧师卡牌
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_332_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_332_zhCN_.png',
                    'desc':'专为施法者设计。施法者包括从墓地里钻出来的邪恶巫妖，也包括在黑铁酒吧里唱卡拉OK的麦霸。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Zoltan & Gabor'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS2_235_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS2_235_zhCN_.png',
                    'desc':'她们帮助被压迫和沮丧的人们。她们也卖饼干。','type':'基本','author':'画家：Terese Nielsen'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_341_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_341_zhCN_.png',
                    'desc':'以前有很多牧师都不明白，究竟是因为队友看不见光明之泉呢，还是他们故意不想点它呢？','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Blizzard Entertainment'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_035_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_035_zhCN_.png',
                    'desc':'好奇的不只有猫，还有萤根草。','type':'勇闯安戈洛',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Servando Lupini'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_335_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_335_zhCN_.png',
                    'desc':'光耀孕育之子嗣，吾等子嗣之光耀。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Daarken'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_963_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_963_zhCN_.png',
                    'desc':'起来吧，美丽的太阳！赶走那妒忌的敌人，他们因为你的传说卡牌美得多，已经气得面色惨白了。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Phil Saunders'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__OG_316_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__OG_316_zhCN_.png',
                    'desc':'作为传令官他的工作其实很简单，就是整天吆喝：“尤格-萨隆要来啦！”','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Luke Mancini'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_350_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_350_zhCN_.png',
                    'desc':'他被逐出他的家园。他兄弟们都变成了邪恶的主宰......但是除此之外，他好像也没有什么别的可以抱怨的了。','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wei Wang'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_830_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_830_zhCN_.png',
                    'desc':'“有一件事维伦从没教过我，我现在来告诉你：站在圣光面前的人……必将投下暗影。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wayne Reynolds'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_214_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_214_zhCN_.png',
                    'desc':'原画师花了大量工夫，用凿子在面部精雕细琢，才表现出这副嘲讽的表情。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：A.J. Nazzaro'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS1_113_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS1_113_zhCN_.png',
                    'desc':'被称为“最有可能让你的对手捶地撞墙的法术。”','type':'基本','author':'画家：Sean O’Daniels'
                }
            ]
        ],
        //盗贼
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CFM_630_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CFM_630_zhCN_.png',
                    'desc':'这些伪造的幸运币…似乎是玉莲帮的杰作。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Joe Wilson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_073_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_073_zhCN_.png',
                    'desc':'静如冰封，动如激瀑。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Alex Horley Orlandelli'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_058_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_058_zhCN_.png',
                    'desc':'难怪安戈洛没有僵尸。','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Sojin Hwang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__EX1_134_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__EX1_134_zhCN_.png',
                    'desc':'军情七处的特工们负责暴风城内的所有隐秘行动，包括间谍活动、暗杀以及秘密筹备皇室成员的生日派对。','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Chris Moeller'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_065_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_065_zhCN_.png',
                    'desc':'始祖龟园丁的噩梦。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Matt Dixon'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_080_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_080_zhCN_.png',
                    'desc':'只有真正的刺客才配拥有。如假包换。','type':'基本','author':'画家：Brian Huang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__NEW1_005_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__NEW1_005_zhCN_.png',
                    'desc':'他只是希望有人能看看他在假期里拍摄的照片而已。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Dave Allsop'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_077_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_077_zhCN_.png',
                    'desc':'潜行者们通常都不擅长慢跑。','type':'基本','author':'画家：James Zhang'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__OG_282_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__OG_282_zhCN_.png',
                    'desc':'克苏恩要求献上祭品，选谁好呢……死亡之翼不错！','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Steve Prescott'
                }
            ]
        ],
        //萨满
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__CS2_041_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__CS2_041_zhCN_.png',
                    'desc':'你能在战斗中能够召唤祖先的灵魂！所以，出生在一个强大的家族是很重要的！','type':'基本','author':'画家：Dan Scott'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_504_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_504_zhCN_.png',
                    'desc':'它们长得真快。','type':'狗头人与地下世界',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Tooth'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_056_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_056_zhCN_.png',
                    'desc':'等我们找到解药就来融化你。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：A.J. Nazzaro'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_344_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_344_zhCN_.png',
                    'desc':'一位法师学徒练习烈焰风暴时烧毁了一个狗头人定居点，只留下了这个护身符，还有一地各种形状的木头柱子。','type':'狗头人与地下世界',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Ivan Fomin'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__EX1_246_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__EX1_246_zhCN_.png',
                    'desc':'如果你对一个鱼人使用妖术...其实结果也没什么变化，对不对？','type':'基本','author':'画家：Steve Hui'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__OG_209_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__OG_209_zhCN_.png',
                    'desc':'根据能量守恒定律，你损失的生命值最终会转移到我身上。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wayne Reynolds'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_358_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_358_zhCN_.png',
                    'desc':'撼世者发出了隆隆的雷声，洞穴之外的狗头人都开始颤抖。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Hideaki Takamura'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_064_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_064_zhCN_.png',
                    'desc':'“蓝色的石头归海底的鱼人领主所有，被粘液包裹起来。很快鱼人就拥上了海滩，两只，四只，然后是更多，更多……”——《魔石》','type':'狗头人与地下世界',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jason Kang'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_506_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_506_zhCN_.png',
                    'desc':'当有人问牛头人铁匠这些符文有什么用时，铁匠憨笑着回答：“什么都能做一点……”','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Jakub Kasper'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_090_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_090_zhCN_.png',
                    'desc':'双11来了，你的卡准备好过载了吗？','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Steve Prescott'
                }
            ]
        ],
        //术士
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__NEW1_003_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__NEW1_003_zhCN_.png',
                    'desc':'这就是为何恶魔不愿意和术士交朋友的原因。','type':'基本','author':'画家：Jim Nelson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__UNG_829_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__UNG_829_zhCN_.png',
                    'desc':'探险者：“但是，古尔丹，代价是什么呢？” 古尔丹：“弃掉…六张牌…”','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Konstantin Turovec'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_041_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_041_zhCN_.png',
                    'desc':'让旅店清洁阿姨最头疼的法术之一。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Dave Allsop'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_206_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_206_zhCN_.png',
                    'desc':'拿人的手短，吃人的嘴软。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Jim Nelson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_315_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_315_zhCN_.png',
                    'desc':'不能少于1点！你在想什么坏主意呢！','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Tyler Walpole'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_075_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_075_zhCN_.png',
                    'desc':'他领养了三位孤儿，还有一群唯命是从的小跟班。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Konstantin Turovec'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__CS2_064_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__CS2_064_zhCN_.png',
                    'desc':'“地狱火！”——加拉克苏斯，燃烧军团的艾瑞达之王','type':'基本','author':'画家：Zoltan & Gabor'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_121_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_121_zhCN_.png',
                    'desc':'即便这么多年过去了，古尔丹还是会吩咐古加尔去准备咖啡和甜甜圈。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_312_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_312_zhCN_.png',
                    'desc':'扭曲虚空浩渺无际，充满着魔法、幻象和被放逐的生命体。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Dave Allsop'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_323_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_323_zhCN_.png',
                    'desc':'“渺小的侏儒！你们的傲慢将会招致灭亡！”','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Alex Horley Orlandelli'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_239_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_239_zhCN_.png',
                    'desc':'古往今来总有人在那里宣扬末日论，可我们现在不是还活得好好的吗。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Raymond Swanland'
                }
            ]
        ],
        //战士
        [
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_607_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_607_zhCN_.png',
                    'desc':'吃得苦中苦，方为人上人。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Slawomir Maniak'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CS2_103_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CS2_103_zhCN_.png',
                    'desc':'“伙计们！伙计们！你们稳着点儿！”——某些不属于战士的随从。','type':'基本','author':'画家：Alex Horley Orlandelli'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_603_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_603_zhCN_.png',
                    'desc':'“这个周末你们必须来加班。”——严酷的监工','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Phroilan Gardner'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__KAR_026_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__KAR_026_zhCN_.png',
                    'desc':'要想伤害国王，得先从我们的尸体上踏过去！','type':'卡拉赞之夜',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jim Nelson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__NEW1_011_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__NEW1_011_zhCN_.png',
                    'desc':'库卡隆就是加尔鲁什·地狱咆哮的精英部队。这么说吧，你最好不要穿着蓝色的战袍出现在这些壮汉面前。','type':'基本','author':'画家：Alex Horley Orlandelli'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CFM_756_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CFM_756_zhCN_.png',
                    'desc':'她每天凌晨4点就爬起来打铁了。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Rafael Zanchetin'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_365_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_365_zhCN_.png',
                    'desc':'上面的装饰吸引了无数冒险者。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Luca Zontini'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__OG_301_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__OG_301_zhCN_.png',
                    'desc':'在过去，她一个胳膊就能举起4面2吨重的盾牌，所以现在这点份量根本不在话下！','type':'上古之神的低语',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Alex Konstad'
                }
            ],
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_519_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_519_zhCN_.png',
                    'desc':'曾经用耳屎和强大的野心制造出一对手套。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Mike Azevedo'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__UNG_933_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__UNG_933_zhCN_.png',
                    'desc':'摩什觉得没有什么问题是踩一脚不能解决的。如果有，踩两脚。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ]
        ],
        //中立
        [
            [
                {
                    'id':'2','card_cost':'0',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_231_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_231_zhCN_.png',
                    'desc':'如果你用足够多的小精灵攻击艾瑞达领主的话，他就会爆炸。但这是为什么呢？','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Malcolm Davis',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_231_zhCN_.png',
                    'card_name':'小精灵',
                    'cost':'cost_num_0'
                },
                {
                    'id':'3','card_cost':'0',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_023_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_023_zhCN_.png',
                    'desc':'既然冲不了浪，那就溜冰吧。','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Matt Dixon',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_023_zhCN_.png',
                    'card_name':'雪鳍企鹅',
                    'cost':'cost_num_0'
                },
                {
                    'id':'5','card_cost':'1',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_120_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_120_zhCN_.png',
                    'desc':'相信我，我在喝下这瓶药水前就已经死了。','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：A.J. Nazzaro',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_120_zhCN_.png',
                    'card_name':'亡灵药剂师',
                    'cost':'cost_num_1'
                },
                {
                    'id':'6','card_cost':'1',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_205_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_205_zhCN_.png',
                    'desc':'最爱榴莲味！','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Paul Mafayon',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_205_zhCN_.png',
                    'card_name':'冰川裂片',
                    'cost':'cost_num_1'
                },
                {
                    'id':'8','card_cost':'2',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_045_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_045_zhCN_.png',
                    'desc':'为什么在你走动的时候，会感觉它的眼珠也在跟着你动？','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Richard Wright',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_045_zhCN_.png',
                    'card_name':'上古看守者',
                    'cost':'cost_num_2'
                },
                {
                    'id':'9','card_cost':'2',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_818_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_818_zhCN_.png',
                    'desc':'他和暴怒的狼人，格罗玛什·地狱咆哮还有愤怒的小鸡一同报了情绪管理课，但似乎没什么帮助。','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Nicola Saviori',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_818_zhCN_.png',
                    'card_name':'不稳定的元素',
                    'cost':'cost_num_2'
                },
                {
                    'id':'11','card_cost':'3',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_069_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_069_zhCN_.png',
                    'desc':'他长的像老鼠，穿的像老鼠，走路也像老鼠。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Andrew Hou',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_069_zhCN_.png',
                    'card_name':'下水道爬行者',
                    'cost':'cost_num_3'
                },
                {
                    'id':'12','card_cost':'3',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_017_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_017_zhCN_.png',
                    'desc':'荆棘谷是一个很适合观光的地方，但你绝对不会想住在那儿。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Jaemin Kim',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_017_zhCN_.png',
                    'card_name':'丛林猎豹',
                    'cost':'cost_num_3'
                }
            ],
            [
                {
                    'id':'14','card_cost':'4',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_808_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_808_zhCN_.png',
                    'desc':'“乐善好施”的加佐在加基森做信贷方面的生意，他提供的贷款无需任何抵押。但你要是没能及时还上钱，缺胳膊少腿也是常有的事，这也是他“鲨鱼”名号的由来。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Garrett Hanna',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_808_zhCN_.png',
                    'card_name':'“鲨鱼”加佐',
                    'cost':'cost_num_4'
                },
                {
                    'id':'15','card_cost':'4',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_810_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_810_zhCN_.png',
                    'desc':'一把奥金斧没什么好怕的，两把才可怕。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Luca Zontini',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_810_zhCN_.png',
                    'card_name':'亡斧惩罚者',
                    'cost':'cost_num_4'
                },
                {
                    'id':'17','card_cost':'5',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_851_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_851_zhCN_.png',
                    'desc':'雷诺教导她别老跟着藏宝图走，要勇敢地踏上未知的旅途。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Luke Mancini',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_851_zhCN_.png',
                    'card_name':'“开拓者”伊莉斯',
                    'cost':'cost_num_5'
                },
                {
                    'id':'18','card_cost':'5',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_652_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_652_zhCN_.png',
                    'desc':'等哪天适应了新配的隐形眼镜，他就会成为一流打手了。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Trent Kaniuga',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_652_zhCN_.png',
                    'card_name':'二流打手',
                    'cost':'cost_num_5'
                },
                {
                    'id':'20','card_cost':'6',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_840_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_840_zhCN_.png',
                    'desc':'虽然地精旅行社弄丢了他的行李，不过赫米特在安戈洛还是度过了一个美好的假期！','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Sam Nielson',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_840_zhCN_.png',
                    'card_name':'“丛林猎人”赫米特',
                    'cost':'cost_num_6'
                },
                {
                    'id':'21','card_cost':'6',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_290_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_290_zhCN_.png',
                    'desc':'先驱的主要工作就是为身后的狠角色们预先暖场。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Zoltan Boros',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_290_zhCN_.png',
                    'card_name':'上古之神先驱',
                    'cost':'cost_num_6'
                },
                {
                    'id':'23','card_cost':'7',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_186_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_186_zhCN_.png',
                    'desc':'傀儡们从来不会胆怯，但是出于某种原因，当你对它们施放“恐惧”的时候，它们依然会逃跑。也许这就是天性？或是想要融入这个世界的渴望？','type':'基本','author':'画家：Dave Kendall',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_186_zhCN_.png',
                    'card_name':'作战傀儡',
                    'cost':'cost_num_7'
                },
                {
                    'id':'24','card_cost':'7',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_685_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_685_zhCN_.png',
                    'desc':'作为污手党家族的主心骨，汉有时候真想把愚钝的古扫地出门，但他没法这么做。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Tyson Murphy',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_685_zhCN_.png',
                    'card_name':'唐·汉古',
                    'cost':'cost_num_7'
                }
            ],
            [
                {
                    'id':'26','card_cost':'8',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_357_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_357_zhCN_.png',
                    'desc':'我是“老狐狸”马林。你抢了我的财宝！准备受死吧！','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Zoltan Boros',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_357_zhCN_.png',
                    'card_name':'“老狐狸”马林',
                    'cost':'cost_num_8'
                },
                {
                    'id':'27','card_cost':'8',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_255_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_255_zhCN_.png',
                    'desc':'为什么会有人蠢到去召唤厄运？','type':'上古之神的低语',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Benjamin Zhang',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_255_zhCN_.png',
                    'card_name':'厄运召唤者',
                    'cost':'cost_num_8'
                },
                {
                    'id':'29','card_cost':'9',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_572_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_572_zhCN_.png',
                    'desc':'伊瑟拉统治翡翠梦境。所谓翡翠梦境，究竟只是现实世界的绿色朦胧倒影，还是其它别的什么地方？','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Gabor Szikszai',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_572_zhCN_.png',
                    'card_name':'伊瑟拉',
                    'cost':'cost_num_9'
                },
                {
                    'id':'30','card_cost':'9',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_562_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_562_zhCN_.png',
                    'desc':'伪装成女伯爵卡特拉娜·普瑞斯托，奥妮克希亚长期控制着暴风城议会。你可能会想，一定是她的大翅膀和鳞片让她漏出了马脚。','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Dany Orizio',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_562_zhCN_.png',
                    'card_name':'奥妮克希亚',
                    'cost':'cost_num_9'
                },
                {
                    'id':'32','card_cost':'10',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_042_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_042_zhCN_.png',
                    'desc':'如果亚煞极没那么“怒发冲冠”时，它会扎个马尾辫做一些户外运动。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Samwise',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_042_zhCN_.png',
                    'card_name':'亚煞极',
                    'cost':'cost_num_10'
                },
                {
                    'id':'33','card_cost':'10',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_280_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_280_zhCN_.png',
                    'desc':'克苏恩最讨厌的一张牌，就是圣骑士的奥秘“以眼还眼”。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_280_zhCN_.png',
                    'card_name':'克苏恩',
                    'cost':'cost_num_10'
                },
                {
                    'id':'34','card_cost':'12',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__KAR_711_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__KAR_711_zhCN_.png',
                    'desc':'表面上他们是被卡拉赞的魔法吸引所至，但实际上他们的最爱是莫罗斯的厨艺。','type':'卡拉赞之夜',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Dan Scott',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__KAR_711_zhCN_.png',
                    'card_name':'奥术巨人',
                    'cost':'cost_num_12'
                },
                {
                    'id':'35','card_cost':'12',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_105_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_105_zhCN_.png',
                    'desc':'他的妈妈说，他只是骨架比较大而已。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Samwise',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_105_zhCN_.png',
                    'card_name':'山岭巨人',
                    'cost':'cost_num_12'
                }
            ],
            [
                {
                    'id':'36','card_cost':'25',
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_620_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_620_zhCN_.png',
                    'desc':'无数初次来到熔火之心的冒险者倒在他滚烫的脚掌之下。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Glenn Rane',
                    'bg_src':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_620_zhCN_.png',
                    'card_name':'熔核巨人',
                    'cost':'cost_num_25'
                }
            ]
        ]
    ];
    // 初始化函数
    function init(heroIndex,pageIndex){
        var sliCStr = '';
        for(var i =0;i<cardRsource[heroIndex][pageIndex].length;i++){
            sliCStr +='<div class="cards_place" data-hero="'+heroIndex+'">';
            sliCStr +='<a href="#" class="cards_link">';
            sliCStr +='<img src="'+cardRsource[heroIndex][pageIndex][i].src_sm+'" class="card_img" ' +
                'data-src="'+cardRsource[heroIndex][pageIndex][i].src_lg+'" data-desc="'+cardRsource[heroIndex][pageIndex][i].desc+'" ' +
                'data-author="'+cardRsource[heroIndex][pageIndex][i].author+'" data-type="'+cardRsource[heroIndex][pageIndex][i].type+'" ' +
                'data-text="'+cardRsource[heroIndex][pageIndex][i].text+'" data-color="'+cardRsource[heroIndex][pageIndex][i].color+'" ' +
                'data-pcolor="'+cardRsource[heroIndex][pageIndex][i].pcolor+'" data-bgsrc="'+cardRsource[heroIndex][pageIndex][i].bg_src+'"' +
                'data-name="'+cardRsource[heroIndex][pageIndex][i].card_name+'" data-cost="'+cardRsource[heroIndex][pageIndex][i].cost+'" ' +
                'data-id="'+cardRsource[heroIndex][pageIndex][i].id+'" data-cardcost="'+cardRsource[heroIndex][pageIndex][i].card_cost+'"/>';
            sliCStr +='<span></span>';
            sliCStr +='</a>';
            sliCStr +='</div>';
        }
        var slideDom = $('<div></div>');
        slideDom.addClass("swiper-slide");
        slideDom.html(sliCStr);
        var swiContainer = $(".swiper-wrapper");
        swiContainer.append(slideDom);
    }
    //加载新数据函数
    function addPage(heroIndex){
        // var sliCount = $(".swiper-slide").length;
        var tot = cardRsource[heroIndex].length;
        // alert(tot)
        step++;

        if(step < tot){
            var sliCStr = '';
            for(var i =0;i<cardRsource[heroIndex][step].length;i++){
                if(cardRsource[heroIndex][step].length <8){
                    $(".swiper-button-next").removeClass("status-bar");
                }
                sliCStr +='<div class="cards_place" data-hero="'+heroIndex+'">';
                sliCStr +='<a href="#" class="cards_link">';
                sliCStr +='<img src="'+cardRsource[heroIndex][step][i].src_sm+'" class="card_img" ' +
                    'data-src="'+cardRsource[heroIndex][step][i].src_lg+'" data-desc="'+cardRsource[heroIndex][step][i].desc+'" ' +
                    'data-author="'+cardRsource[heroIndex][step][i].author+'" data-type="'+cardRsource[heroIndex][step][i].type+'" ' +
                    'data-text="'+cardRsource[heroIndex][step][i].text+'" data-color="'+cardRsource[heroIndex][step][i].color+'" ' +
                    'data-pcolor="'+cardRsource[heroIndex][step][i].pcolor+'" data-bgsrc="'+cardRsource[heroIndex][step][i].bg_src+'"' +
                    'data-name="'+cardRsource[heroIndex][step][i].card_name+'" data-cost="'+cardRsource[heroIndex][step][i].cost+'" ' +
                    'data-id="'+cardRsource[heroIndex][step][i].id+'" data-cardcost="'+cardRsource[heroIndex][step][i].card_cost+'"/>';
                sliCStr +='<span></span>';
                sliCStr +='</a>';
                sliCStr +='</div>';
            }
            var slideDom = $('<div data-p="'+step+'"></div>');
            slideDom.addClass("swiper-slide");
            slideDom.html(sliCStr);
            var swiContainer = $(".swiper-wrapper");
            swiContainer.append(slideDom);
        }
    }
    //费用选择函数
    function selectCostHero(costId,heroId){
        // alert(costId);
        // alert(heroId);
        $(".swiper-wrapper").empty(".swiper-slider");
        $(".swiper-button-next").removeClass("status-bar");
        var textStr = '';
        for(var i =0;i<costResource[costId][heroId].length;i++){
            textStr +='<div class="cards_place">';
            textStr +='<a href="#" class="cards_link">';
            textStr +='<img src="'+costResource[costId][heroId][i].src_sm+'" class="card_img" ' +
                'data-src="'+costResource[costId][heroId][i].src_lg+'" data-desc="'+costResource[costId][heroId][i].desc+'" ' +
                'data-author="'+costResource[costId][heroId][i].author+'" data-type="'+costResource[costId][heroId][i].type+'" ' +
                'data-text="'+costResource[costId][heroId][i].text+'" data-color="'+costResource[costId][heroId][i].color+'" ' +
                'data-pcolor="'+costResource[costId][heroId][i].pcolor+'"/>';
            textStr +='</a>';
            textStr +='</div>';
        }
        var slideDom = $('<div></div>');
        slideDom.addClass("swiper-slide");
        slideDom.html(textStr);
        var swiContainer = $(".swiper-wrapper");
        swiContainer.append(slideDom);
        // console.log($(".swiper-button-next").attr("class"))
    }
    // 初始化
    init(0,0);
    $(".swiper-button-next").addClass("status-bar");

    //加载新数据
    var step = 0;
    $(".swiper-button-next").on("click",function(){
        // $(".swiper-button-next").removeClass("status-bar");
        var hIndex = $(".swiper-slide-active .cards_place").data("hero");
        addPage(hIndex);
    });

    //tab栏切换放大
     $(document).on("click",".tabs_hero li",function(){
         var currName = $(this).data("name");
         $(".title_hero").html(currName);
         $(this).addClass("active").siblings("li").removeClass("active");
         $(".swiper-wrapper").empty(".swiper-slider");
         var h_index = $(this).data("hero");
         //费用判断
         if($(".cards_option li a").hasClass("active")){
             var costCurrId = $(".cards_option li a.active").parent("li").data("idx");
             selectCostHero(costCurrId,h_index);
         }else{
             init(h_index,0);
             $(".swiper-button-next").addClass("status-bar");
         }
         step = 0;
         $(".cards_page strong").html(1);
     });

    // swiper插件
     var swiper = new Swiper('.swiper-container', {
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         spaceBetween: 30,
         speed: 1300,
         onlyExternal:true,//禁止拖动
         observer:true,//修改swiper自己或子元素时，自动初始化swiper
         observeParents:true//修改swiper的父元素时，自动初始化swiper
     });

    // 分页显示页数
     $(".swiper-button-next").on("click",function(){
         var $idx = $(".swiper-slide-active").index() + 1;
         $(".cards_page strong").html($idx +1);
     });
    $(".swiper-button-prev").on("click",function(){
        var currnIdx = $(".cards_page strong").html();
        $(".cards_page strong").html(currnIdx-1);
    });



    var countStep;     //卡牌计数
    if(store.get("count") !== undefined){
        countStep = store.get("count");
    }else{
        countStep = 0;
    }
    var storeArr;          //本地存储数组
    if(store.get("cards") !== undefined){
        storeArr = store.get("cards");
    }else{
        storeArr = [];
    }
    $(document).on("click",".swiper-slide-active .card_img",function(){
        if(countStep == 30){
            alert("卡牌数量不能超过30张!");
            return;
        }
        function addLocal(){
            if(!store.enabled){
                alert("你的浏览器不支持本地存储，请使用更高版本的浏览器");
                return;
            }else{
                var obj = {id:id,list_bg:list_bg,name:name,cost:cost,cardcost:cardcost,countclass:"1"};
                storeArr.push(obj);
                store.set("cards",storeArr);
                var data = store.get("cards");
                // console.log(data)
            }
        }
        function editLocal(){
            // var currentArr = store.get("cards");
            for(var i=0;i<storeArr.length;i++){
                if(storeArr[i].id ==id){
                    storeArr[i].countclass = 'cards_two';
                    store.set("cards",storeArr);
                    var data = store.get("cards");
                    // console.log(data)
                }
            }
        }
         var id = $(this).data("id");
         var src_bg = $(this).data("src");
         var desc = $(this).data("desc");
         var type = $(this).data("type");
         var author = $(this).data("author");
         var text = $(this).data("text");
         var color = $(this).data("color");
         var pcolor = $(this).data("pcolor");
         var cardcost = $(this).data("cardcost");    //费用
         var list_bg = $(this).data("bgsrc");
         var name = $(this).data("name");
         var cost = $(this).data("cost");     //费用背景

        if(type !== '基本'){
             $(".rarity_con").css('display','block').attr('class','rarity_con').addClass(color).children(".txt").html(text);
             $(".detail_rarity_icon").attr('class','detail_rarity_icon').addClass(pcolor);
         }else{
             $(".rarity_con").css('display','none');
         }
         $(".cards_big img").attr('src',src_bg);
         $(".detail_bg").html(desc);
         $(".rarity_txt").html(type);
         $(".rarity_artist").html(author);

         if($("#cards_group li:has(a)").length==0){
             $(".fix-wrapper").show();
             $(".popBox").show();
         }else{
             //添加列表图片判断(有角色情况)
             //判断是否为第一张卡片
             if($("#cards_list:has(li)").length==0){
                 createListCard(id,list_bg,name,cost,cardcost);
                 countStep++;
                 store.set("count",countStep);
                 addLocal();
             }else{
                 var s = 0;
                 $("#cards_list li").each(function(){
                     // alert($(this).data("id"));     判断相同卡牌
                     //添加到列表
                     if(id == $(this).data("id")){
                         // alert($(this).children(".thumb_draw").hasClass("cards_two"));
                         if(!$(this).children(".thumb_draw").hasClass("cards_two") && text !== '传说'){
                             $(this).children(".thumb_draw").addClass("cards_two");
                             countStep++;
                             store.set("count",countStep);
                             $('.card_img[data-id="'+id+'"]').siblings("span").addClass("cards_disable");
                             //修改localstorage数据
                             editLocal();
                         }
                         if(text == '传说'){
                             $('.card_img[data-id="'+id+'"]').siblings("span").addClass("cards_disable").addClass("cards_disable_c");
                         }
                         s++;
                     }
                 });
                 if(s == 0){
                     countStep++;
                     store.set("count",countStep);
                     var result = true;
                     var arr =[];
                     $("#cards_list li").each(function(index){
                         if($(this).data("cost") < cardcost){
                             arr.push($(this).data("cost"));
                             // console.log(arr)
                         }
                     });
                     var max = Math.max.apply(null, arr);

                     var str1 = '';
                     str1+='<div class="card_list_small" style="background-image:url('+list_bg+');">';
                     str1+='<p class="card_name">'+name+'</p>';
                     str1+='</div>';
                     str1+='<span class="cards_over"></span>';
                     str1+='<span class="thumb_draw"></span>';
                     str1+='<span class="cost_num_icon '+cost+'"></span>';
                     var liDom1 = $('<li data-id="'+id+'" data-cost="'+cardcost+'"></li>');
                     liDom1.html(str1);
                     if(arr.length == 0){
                         $("#cards_list li:first").before(liDom1)
                     }else{
                         $("#cards_list li[data-cost="+max+"]:last").after(liDom1);
                     }
                     if (!result)
                         return;
                     // createListCard(id,list_bg,name,cost,cardcost);
                     addLocal();
                 }
             }
         }
         //添加滚动条
         var currentHei = $("#cards_list").height();
         if(currentHei > 528 ){
             $(".cards_list_wrap").niceScroll({
                 // zIndex: 2
             });
         }
        $(".cards_list_wrap").getNiceScroll().resize();
        // 卡牌计数
        $(".cards_num strong").html(countStep);
        if(countStep == 30){
            $(".cards_save a").removeClass("cards_btn_disabled");
        }
    });
    // 移除列表卡牌
    $(document).on("click","#cards_list li",function(){
        var thisID = $(this).data("id");
        if($(this).children(".thumb_draw").hasClass("cards_two")){
            $(this).children(".thumb_draw").removeClass("cards_two");
            countStep--;
            store.set("count",countStep);
            $(".cards_save a").addClass("cards_btn_disabled");
            $('.card_img[data-id="'+thisID+'"]').siblings("span").removeClass("cards_disable");
            for(var i = 0;i<storeArr.length;i++){
                if(storeArr[i].id ==thisID){
                    storeArr[i].countclass = '1';
                }
            }
            store.set("cards",storeArr);
        }else{
            $(this).remove();
            countStep--;
            store.set("count",countStep);
            $(".cards_save a").addClass("cards_btn_disabled");
            $('.card_img[data-id="'+thisID+'"]').siblings("span").removeClass("cards_disable");
            for(var j = 0;j<storeArr.length;j++){
                if(storeArr[j].id ==thisID){
                    storeArr.splice(j,1)
                }
            }
            store.set("cards",storeArr);
        }
        var currentHei = $("#cards_list").height();
        if(currentHei < 528 ){
            $(".cards_list_wrap").niceScroll({
                autohidemode: true
            });
        }
        $(".cards_list_wrap").getNiceScroll().resize();
        $(".cards_num strong").html(countStep);
    });
    //列表滑动效果
    $(document).on("mouseover","#cards_list li",function(){
        $("#cards_list li").removeClass("active");
        $(this).addClass("active");
    });
     $(".cards_big_close").on("click",function(){
         $(".fix-wrapper").hide();
         $(".popBox").hide();
     });
     // 关闭英雄选框
     $(document).on("click",".group_close",function(){
         //清空local
         if(store.get("hero") !== undefined){
             store.remove("hero");
             if(store.get("cards") !== undefined){
                 store.remove("cards");
                 store.remove("count");
             }
             window.location.reload();
         }
     });



    //  //底部列表
     //卡牌类型切换
     var toggle=0;
     $("#typeToggle").on('click',function(){
         if(toggle %2 == 0){
             $(this).next(".mode_select_wrap").addClass("open");
         }else{
             $(this).next(".mode_select_wrap").removeClass("open");
         }
         toggle++;
     });

     // 底部费用筛选效果实现
    var costResource=[
        // 0费
        [
            // 德
            [
                {
                     'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_008_zhCN_.png',
                     'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_008_zhCN_.png',
                     'desc':'“把月火术拖到每一个技能栏位上。”——《如何成为一名德鲁伊》，第五章，第三节',
                     'type':'基本','author':'画家：Richard Wright'
                }
            ],
            // 猎人
            [],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_021_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_021_zhCN_.png',
                    'desc':'冻住，不许走！','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Arthur Bozonnet'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_198_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_198_zhCN_.png',
                    'desc':'人人都爱治疗术。可禁忌治疗……听起来有些不靠谱。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Mike Franchina'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_332_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_332_zhCN_.png',
                    'desc':'专为施法者设计。施法者包括从墓地里钻出来的邪恶巫妖，也包括在黑铁酒吧里唱卡拉OK的麦霸。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Zoltan & Gabor'
                }
            ],
            // 盗贼
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CFM_630_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CFM_630_zhCN_.png',
                    'desc':'这些伪造的幸运币…似乎是玉莲帮的杰作。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Joe Wilson'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__CS2_041_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__CS2_041_zhCN_.png',
                    'desc':'你能在战斗中能够召唤祖先的灵魂！所以，出生在一个强大的家族是很重要的！','type':'基本','author':'画家：Dan Scott'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__NEW1_003_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__NEW1_003_zhCN_.png',
                    'desc':'这就是为何恶魔不愿意和术士交朋友的原因。','type':'基本','author':'画家：Jim Nelson'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_607_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_607_zhCN_.png',
                    'desc':'吃得苦中苦，方为人上人。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Slawomir Maniak'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_231_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_231_zhCN_.png',
                    'desc':'如果你用足够多的小精灵攻击艾瑞达领主的话，他就会爆炸。但这是为什么呢？','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Malcolm Davis'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_023_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_023_zhCN_.png',
                    'desc':'既然冲不了浪，那就溜冰吧。','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Matt Dixon'
                },
            ]
        ],
        // 1费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_116_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_116_zhCN_.png',
                    'desc':'自从一脚踩出了葛拉卡盆地后，班纳布斯的跳舞生涯便宣告结束了。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary',
                    'author':'画家：Konstantin Turovec'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__UNG_916_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__UNG_916_zhCN_.png',
                    'desc':'猎人们就喜欢这种乱哄哄一拥而上的感觉。','type':'勇闯安戈洛',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Daren Bader'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_836_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_836_zhCN_.png',
                    'desc':'是这里本来就冷，还是因为辛达苟萨？','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Eric Braddock'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_132_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_132_zhCN_.png',
                    'desc':'有时正义的表现形式就是这么简单：紧握的拳头打在瘫软的脸上。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：James Ryman'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS2_235_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS2_235_zhCN_.png',
                    'desc':'她们帮助被压迫和沮丧的人们。她们也卖饼干。','type':'基本','author':'画家：Terese Nielsen'
                }
            ],
            // 盗贼
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_073_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_073_zhCN_.png',
                    'desc':'静如冰封，动如激瀑。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Alex Horley Orlandelli'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_504_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_504_zhCN_.png',
                    'desc':'它们长得真快。','type':'狗头人与地下世界',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Tooth'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__UNG_829_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__UNG_829_zhCN_.png',
                    'desc':'探险者：“但是，古尔丹，代价是什么呢？” 古尔丹：“弃掉…六张牌…”','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Konstantin Turovec'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CS2_103_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CS2_103_zhCN_.png',
                    'desc':'“伙计们！伙计们！你们稳着点儿！”——某些不属于战士的随从。','type':'基本','author':'画家：Alex Horley Orlandelli'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_120_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_120_zhCN_.png',
                    'desc':'相信我，我在喝下这瓶药水前就已经死了。','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：A.J. Nazzaro'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_205_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_205_zhCN_.png',
                    'desc':'最爱榴莲味！','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Paul Mafayon'
                }
            ]
        ],
        // 2费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_048_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_048_zhCN_.png',
                    'desc':'只要能变强，丑一点也是值得的。','type':'上古之神的低语',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Efrem Palacios'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__CFM_026_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__CFM_026_zhCN_.png',
                    'desc':'传言曾有一个污手党的菜鸟将一整瓶牛奶打翻在了军备宝箱上，于是出现了艾泽拉斯的第一个毒性污水软泥怪。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Dan Scott'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__LOOT_170_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__LOOT_170_zhCN_.png',
                    'desc':'乌鸦问道：“但代价是什么呢？”','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Eva Wildermann'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_089_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_089_zhCN_.png',
                    'desc':'如果你经常暴露于圣光之下，你应该考虑随身带着防晒霜。','type':'基本','author':'画家：Zoltan & Gabor'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_341_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_341_zhCN_.png',
                    'desc':'以前有很多牧师都不明白，究竟是因为队友看不见光明之泉呢，还是他们故意不想点它呢？','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Blizzard Entertainment'
                }
            ],
            // 盗贼
            [
                {

                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_058_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_058_zhCN_.png',
                    'desc':'难怪安戈洛没有僵尸。','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Sojin Hwang'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_056_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_056_zhCN_.png',
                    'desc':'等我们找到解药就来融化你。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：A.J. Nazzaro'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_041_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_041_zhCN_.png',
                    'desc':'让旅店清洁阿姨最头疼的法术之一。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Dave Allsop'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_603_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__EX1_603_zhCN_.png',
                    'desc':'“这个周末你们必须来加班。”——严酷的监工','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Phroilan Gardner'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_045_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_045_zhCN_.png',
                    'desc':'为什么在你走动的时候，会感觉它的眼珠也在跟着你动？','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Richard Wright'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_818_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_818_zhCN_.png',
                    'desc':'他和暴怒的狼人，格罗玛什·地狱咆哮还有愤怒的小鸡一同报了情绪管理课，但似乎没什么帮助。','type':'勇闯安戈洛',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Nicola Saviori'
                }
            ]
        ],
        // 3费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_808_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_808_zhCN_.png',
                    'desc':'他曾是甲虫乐队的一员，效忠巫妖王后便隐退了。','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Konstanin Turovec'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__EX1_538_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__EX1_538_zhCN_.png',
                    'desc':'在你使用这张牌的时候，一定要喊出它的名字。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Linggar Bramanty'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_252_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_252_zhCN_.png',
                    'desc':'他的骨头都快冻碎了！','type':'冰封王座的骑士',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Andrew Hou'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CFM_905_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CFM_905_zhCN_.png',
                    'desc':'小家伙也能制造大麻烦。','type':'龙争虎斗加基森',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Daren Bader'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_035_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_035_zhCN_.png',
                    'desc':'好奇的不只有猫，还有萤根草。','type':'勇闯安戈洛',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Servando Lupini'
                }
            ],
            // 盗贼
            [
                {

                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__EX1_134_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__EX1_134_zhCN_.png',
                    'desc':'军情七处的特工们负责暴风城内的所有隐秘行动，包括间谍活动、暗杀以及秘密筹备皇室成员的生日派对。','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Chris Moeller'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_344_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_344_zhCN_.png',
                    'desc':'一位法师学徒练习烈焰风暴时烧毁了一个狗头人定居点，只留下了这个护身符，还有一地各种形状的木头柱子。','type':'狗头人与地下世界',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Ivan Fomin'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_206_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_206_zhCN_.png',
                    'desc':'拿人的手短，吃人的嘴软。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Jim Nelson'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__KAR_026_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__KAR_026_zhCN_.png',
                    'desc':'要想伤害国王，得先从我们的尸体上踏过去！','type':'卡拉赞之夜',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jim Nelson'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_069_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_069_zhCN_.png',
                    'desc':'他长的像老鼠，穿的像老鼠，走路也像老鼠。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Andrew Hou'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_017_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_017_zhCN_.png',
                    'desc':'荆棘谷是一个很适合观光的地方，但你绝对不会想住在那儿。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Jaemin Kim'
                }
            ]
        ],
        // 4费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_392_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_392_zhCN_.png',
                    'desc':'喜欢在公会活动中划水的德鲁伊专用。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Alexey Aparin'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_077_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_077_zhCN_.png',
                    'desc':'狼群在左，箭雨在右。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Arthur Bozonnet'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__EX1_275_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__EX1_275_zhCN_.png',
                    'desc':'冰锥术在大约90年前开始流行起来，而在那之前，肯瑞托的法师们习惯用的是冰块术。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Leo Che'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_034_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_034_zhCN_.png',
                    'desc':'说真的，要不是他能引来那只食尸鬼，这家伙就是个混球。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Anton Zemskov'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_335_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_335_zhCN_.png',
                    'desc':'光耀孕育之子嗣，吾等子嗣之光耀。','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Daarken'
                }
            ],
            // 盗贼
            [
                {

                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_065_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__UNG_065_zhCN_.png',
                    'desc':'始祖龟园丁的噩梦。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Matt Dixon'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__EX1_246_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__EX1_246_zhCN_.png',
                    'desc':'如果你对一个鱼人使用妖术...其实结果也没什么变化，对不对？','type':'基本','author':'画家：Steve Hui'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_315_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_315_zhCN_.png',
                    'desc':'不能少于1点！你在想什么坏主意呢！','type':'经典',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Tyler Walpole'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__NEW1_011_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__NEW1_011_zhCN_.png',
                    'desc':'库卡隆就是加尔鲁什·地狱咆哮的精英部队。这么说吧，你最好不要穿着蓝色的战袍出现在这些壮汉面前。','type':'基本','author':'画家：Alex Horley Orlandelli'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_808_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_808_zhCN_.png',
                    'desc':'“乐善好施”的加佐在加基森做信贷方面的生意，他提供的贷款无需任何抵押。但你要是没能及时还上钱，缺胳膊少腿也是常有的事，这也是他“鲨鱼”名号的由来。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Garrett Hanna'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_810_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__ICC_810_zhCN_.png',
                    'desc':'一把奥金斧没什么好怕的，两把才可怕。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Luca Zontini'
                }
            ]
        ],
        // 5费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_329_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__LOOT_329_zhCN_.png',
                    'desc':'好的宠物会陪伴你成长，糟糕的宠物会长到你身上。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_309_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_309_zhCN_.png',
                    'desc':'哈霍兰公主游荡在安其拉废墟的上空，梦想有朝一日能遇见自己的心上人，并为他生下成千上万个孩子。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Jaemin Kim'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_671_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_671_zhCN_.png',
                    'desc':'人人都爱她，尤其是在夏天！','type':'龙争虎斗加基森',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Tyler West Studios'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_355_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__EX1_355_zhCN_.png',
                    'desc':'“攻击翻倍，快乐加倍！”','type':'经典',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Tyler Walpole'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_963_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__UNG_963_zhCN_.png',
                    'desc':'起来吧，美丽的太阳！赶走那妒忌的敌人，他们因为你的传说卡牌美得多，已经气得面色惨白了。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Phil Saunders'
                }
            ],
            // 盗贼
            [
                {

                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_080_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_080_zhCN_.png',
                    'desc':'只有真正的刺客才配拥有。如假包换。','type':'基本','author':'画家：Brian Huang'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__OG_209_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__OG_209_zhCN_.png',
                    'desc':'根据能量守恒定律，你损失的生命值最终会转移到我身上。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wayne Reynolds'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_075_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__ICC_075_zhCN_.png',
                    'desc':'他领养了三位孤儿，还有一群唯命是从的小跟班。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Konstantin Turovec'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CFM_756_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__CFM_756_zhCN_.png',
                    'desc':'她每天凌晨4点就爬起来打铁了。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Rafael Zanchetin'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_851_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_851_zhCN_.png',
                    'desc':'雷诺教导她别老跟着藏宝图走，要勇敢地踏上未知的旅途。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Luke Mancini'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_652_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_652_zhCN_.png',
                    'desc':'等哪天适应了新配的隐形眼镜，他就会成为一流打手了。','type':'龙争虎斗加基森',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Trent Kaniuga'
                }
            ]
        ],
        // 6费
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_054_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_054_zhCN_.png',
                    'desc':'我一直以为瘟疫都是苍蝇老鼠在传播，可没想到你是这样的精灵。','type':'冰封王座的骑士',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Alex Alexandrov'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_217_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_217_zhCN_.png',
                    'desc':'我独自狩猎。还有米莎。还有霍弗。还有雷欧克。','type':'狗头人与地下世界',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Peter Stapleton'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__OG_207_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__OG_207_zhCN_.png',
                    'desc':'无面者夜以继日不停工作，却从未得到应有的认可。','type':'上古之神的低语',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Mark Abadier'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__UNG_952_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__UNG_952_zhCN_.png',
                    'desc':'恐龙骑士唯一的遗憾，就是没能参加“冠军的试炼”。','type':'勇闯安戈洛',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jim Nelson'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__OG_316_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__OG_316_zhCN_.png',
                    'desc':'作为传令官他的工作其实很简单，就是整天吆喝：“尤格-萨隆要来啦！”','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Luke Mancini'
                }
            ],
            // 盗贼
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__NEW1_005_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__NEW1_005_zhCN_.png',
                    'desc':'他只是希望有人能看看他在假期里拍摄的照片而已。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Dave Allsop'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_358_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_358_zhCN_.png',
                    'desc':'撼世者发出了隆隆的雷声，洞穴之外的狗头人都开始颤抖。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Hideaki Takamura'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__CS2_064_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__CS2_064_zhCN_.png',
                    'desc':'“地狱火！”——加拉克苏斯，燃烧军团的艾瑞达之王','type':'基本','author':'画家：Zoltan & Gabor'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_365_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_365_zhCN_.png',
                    'desc':'上面的装饰吸引了无数冒险者。','type':'狗头人与地下世界',
                    'text':'普通','color':'txt_common','pcolor':'rarity_common','author':'画家：Luca Zontini'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_840_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__UNG_840_zhCN_.png',
                    'desc':'虽然地精旅行社弄丢了他的行李，不过赫米特在安戈洛还是度过了一个美好的假期！','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Sam Nielson'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_290_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_290_zhCN_.png',
                    'desc':'先驱的主要工作就是为身后的狠角色们预先暖场。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Zoltan Boros'
                }
            ]
        ],
        // 7费+
        [
            // 德
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_195_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__OG_195_zhCN_.png',
                    'desc':'只不过是打上了“上古之神”的商标，其实和普通的小精灵并无二致。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Skan Srisuwan'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_232_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__CS2_232_zhCN_.png',
                    'desc':'我打赌你一定不敢进攻达纳苏斯。','type':'基本','author':'画家：Skan Srisuwan'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_835_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__ICC_835_zhCN_.png',
                    'desc':'艾卓-尼鲁布的元老释放出哈多诺克斯作为抵御巫妖王的最后一道防线。他们非常小心地在一家主流报纸上进行了抢先报道。','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Zoltan Boros'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_852_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/DRUID__UNG_852_zhCN_.png',
                    'desc':'历经数千年的演变后，它变成了我们现在所熟知的精灵龙。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Chris Rahn'
                }
            ],
            // 猎人
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_085_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_085_zhCN_.png',
                    'desc':'迷人的西蒙妮，疯狂的克林弗兰，毁灭者阿特留斯和屠杀者索伦诺尔觉得这件武器很棒。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Trent Kaniuga'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_511_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__LOOT_511_zhCN_.png',
                    'desc':'她不是那种喜欢抱着树的精灵，不过偶尔的拥抱还是很让人舒服的。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Garrett Hanna'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_211_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/HUNTER__OG_211_zhCN_.png',
                    'desc':'总有人抱怨使用“动物伙伴”这张牌时，召唤出来的并不是他们想要的。现在好了，三个愿望，一次满足。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Peter Stapleton'
                }
            ],
            // 法师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_687_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__CFM_687_zhCN_.png',
                    'desc':'暗金教教徒的纹身几乎由索莉娅一手包办。它们不仅可以赋予教徒神秘的魔法力量，还能有效防范敌对家族的卧底渗透。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：J. Ejsing & E. Amundsen'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_086_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_086_zhCN_.png',
                    'desc':'想学的话得先破冰。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Evgeniy Dlinnov'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_833_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/MAGE__ICC_833_zhCN_.png',
                    'desc':'“年轻的阿尔萨斯是个被宠坏的孩子，玩弄着他既不能控制、也不甚了解的力量。过来，不要害怕寒冷。我让你见识一下冰封王座的真正力量。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Glenn Rane'
                }
            ],
            // 圣骑士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_088_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__CS2_088_zhCN_.png',
                    'desc':'神圣的造物从天而降...真是老掉牙的剧情！','type':'基本','author':'画家：E.M. Gist'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_229_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__OG_229_zhCN_.png',
                    'desc':'根据负负得正定理，当你去腐化一个已被腐化的火焰领主，其结果就是他变成了你们口中所谓的“好人”。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_829_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PALADIN__ICC_829_zhCN_.png',
                    'desc':'“过来，忏悔！曾经的我只是圣光的仆人。但现在，我将独自审判你。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ],
            // 牧师
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_350_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__EX1_350_zhCN_.png',
                    'desc':'他被逐出他的家园。他兄弟们都变成了邪恶的主宰......但是除此之外，他好像也没有什么别的可以抱怨的了。','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wei Wang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_830_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_830_zhCN_.png',
                    'desc':'“有一件事维伦从没教过我，我现在来告诉你：站在圣光面前的人……必将投下暗影。”','type':'冰封王座的骑士',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Wayne Reynolds'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_214_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__ICC_214_zhCN_.png',
                    'desc':'原画师花了大量工夫，用凿子在面部精雕细琢，才表现出这副嘲讽的表情。','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：A.J. Nazzaro'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS1_113_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/PRIEST__CS1_113_zhCN_.png',
                    'desc':'被称为“最有可能让你的对手捶地撞墙的法术。”','type':'基本','author':'画家：Sean O’Daniels'
                }
            ],
            // 盗贼
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_077_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__CS2_077_zhCN_.png',
                    'desc':'潜行者们通常都不擅长慢跑。','type':'基本','author':'画家：James Zhang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__OG_282_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/ROGUE__OG_282_zhCN_.png',
                    'desc':'克苏恩要求献上祭品，选谁好呢……死亡之翼不错！','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Steve Prescott'
                }
            ],
            // 萨满
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_064_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_064_zhCN_.png',
                    'desc':'“蓝色的石头归海底的鱼人领主所有，被粘液包裹起来。很快鱼人就拥上了海滩，两只，四只，然后是更多，更多……”——《魔石》','type':'狗头人与地下世界',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Jason Kang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_506_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__LOOT_506_zhCN_.png',
                    'desc':'当有人问牛头人铁匠这些符文有什么用时，铁匠憨笑着回答：“什么都能做一点……”','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Jakub Kasper'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_090_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/SHAMAN__ICC_090_zhCN_.png',
                    'desc':'双11来了，你的卡准备好过载了吗？','type':'冰封王座的骑士',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Steve Prescott'
                }
            ],
            // 术士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_121_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_121_zhCN_.png',
                    'desc':'即便这么多年过去了，古尔丹还是会吩咐古加尔去准备咖啡和甜甜圈。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_312_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_312_zhCN_.png',
                    'desc':'扭曲虚空浩渺无际，充满着魔法、幻象和被放逐的生命体。','type':'经典',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Dave Allsop'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_323_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__EX1_323_zhCN_.png',
                    'desc':'“渺小的侏儒！你们的傲慢将会招致灭亡！”','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Alex Horley Orlandelli'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_239_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARLOCK__OG_239_zhCN_.png',
                    'desc':'古往今来总有人在那里宣扬末日论，可我们现在不是还活得好好的吗。','type':'上古之神的低语',
                    'text':'史诗','color':'txt_epic','pcolor':'rarity_epic','author':'画家：Raymond Swanland'
                }
            ],
            // 战士
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__OG_301_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__OG_301_zhCN_.png',
                    'desc':'在过去，她一个胳膊就能举起4面2吨重的盾牌，所以现在这点份量根本不在话下！','type':'上古之神的低语',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Alex Konstad'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_519_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__LOOT_519_zhCN_.png',
                    'desc':'曾经用耳屎和强大的野心制造出一对手套。','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Mike Azevedo'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__UNG_933_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/WARRIOR__UNG_933_zhCN_.png',
                    'desc':'摩什觉得没有什么问题是踩一脚不能解决的。如果有，踩两脚。','type':'勇闯安戈洛',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ],
            // 中立
            [
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_186_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CS2_186_zhCN_.png',
                    'desc':'傀儡们从来不会胆怯，但是出于某种原因，当你对它们施放“恐惧”的时候，它们依然会逃跑。也许这就是天性？或是想要融入这个世界的渴望？','type':'基本','author':'画家：Dave Kendall'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_685_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__CFM_685_zhCN_.png',
                    'desc':'作为污手党家族的主心骨，汉有时候真想把愚钝的古扫地出门，但他没法这么做。','type':'龙争虎斗加基森',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Tyson Murphy'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_357_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__LOOT_357_zhCN_.png',
                    'desc':'我是“老狐狸”马林。你抢了我的财宝！准备受死吧！','type':'狗头人与地下世界',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Zoltan Boros'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_255_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_255_zhCN_.png',
                    'desc':'为什么会有人蠢到去召唤厄运？','type':'上古之神的低语',
                    'text':'稀有','color':'txt_rare','pcolor':'rarity_rare','author':'画家：Benjamin Zhang'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_572_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_572_zhCN_.png',
                    'desc':'伊瑟拉统治翡翠梦境。所谓翡翠梦境，究竟只是现实世界的绿色朦胧倒影，还是其它别的什么地方？','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Gabor Szikszai'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_562_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__EX1_562_zhCN_.png',
                    'desc':'伪装成女伯爵卡特拉娜·普瑞斯托，奥妮克希亚长期控制着暴风城议会。你可能会想，一定是她的大翅膀和鳞片让她漏出了马脚。','type':'经典',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Dany Orizio'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_042_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_042_zhCN_.png',
                    'desc':'如果亚煞极没那么“怒发冲冠”时，它会扎个马尾辫做一些户外运动。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：Samwise'
                },
                {
                    'src_sm':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_280_zhCN_.png',
                    'src_lg':'http://hearthstone.nos.netease.com/1/hscards/NEUTRAL__OG_280_zhCN_.png',
                    'desc':'克苏恩最讨厌的一张牌，就是圣骑士的奥秘“以眼还眼”。','type':'上古之神的低语',
                    'text':'传说','color':'txt_legendary','pcolor':'rarity_legendary','author':'画家：James Ryman'
                }
            ]
        ]
    ];
    // 调用
    $(".cards_option li.cost").on("click",function(){
        $(".cards_option li.cost a").removeClass("active");
        $(".cards_option li.all a").children(".type_cost").removeClass("type_cost_active");
        $(this).children("a").addClass("active");
        // 费用ID
        var costIdx = $(this).data("idx");
        //heroID
        var h_index = $(".tabs_hero li.active").data("hero");

        // 猎人0费特殊处理
        if($("#cards_group li:has(a)").length==0)
        {
            //-----没有img子标记-----
            if(costIdx == 0){
                $(".tabs_hero li.tab_hero_lr").css("display","none");
            }else{
                $(".tabs_hero li.tab_hero_lr").css("display","block");
            }
        }

        if(costIdx == 0 && h_index ==1){
            $(".tabs_hero li").removeClass("active");
            $(".tabs_hero li.tab_hero_dly").addClass("active");
            selectCostHero(0,0);
            return;
        }
        selectCostHero(costIdx,h_index);
    });
    //显示所有卡牌
    $(".cards_option li.all a").on("click",function(){
        $(".cards_option li.cost a").removeClass("active");
        $(this).children(".type_cost").addClass("type_cost_active");
        if($("#cards_group li:has(a)").length==0){
            $(".tabs_hero li.tab_hero_lr").css("display","block");
        }
        $(".swiper-wrapper").empty(".swiper-slider");
        var hIdx = $(".tabs_hero li.active").data("hero");
        init(hIdx,0);
        $(".swiper-button-next").addClass("status-bar");
        step = 0;
    });


    // ------------------------右侧功能------------------------------------
    var heroResource = [
        {'name':'group_dly'},
        {'name':'group_lr'},
        {'name':'group_fs'},
        {'name':'group_sqs'},
        {'name':'group_ms'},
        {'name':'group_dz'},
        {'name':'group_sm'},
        {'name':'group_ss'},
        {'name':'group_zs'}
    ];
    function createHero (hindex){
        var str = '';
        str+='<a class="'+heroResource[hindex].name+'" href="javascript:void(0);">';
        str+='<span class="name">自定义套牌</span>';
        str+='<span class="thumb_draw group_standard"></span>';
        str+='<span class="thumb_draw group_close"></span>';
        str+=' </a>';
        $("#cards_group").show().children("li").html(str);
        $(".newCards").hide();
        $(".fix-wrapper").hide();
        $("#hero_select").hide();
    }
    //显示浮层/隐藏
    $(".newCards").on("click",function(){
        $(".fix-wrapper").show();
        $("#hero_select").show();
    });
    $(".closeBtn").on("click",function(){
        $(".fix-wrapper").hide();
        $("#hero_select").hide();
    });
    // hover效果
    $(".hero_list li a").hover(function(){
        $(".hero_list .hero_light").removeClass("hero_active");
        $(this).children(".hero_light").addClass("hero_active");
    });

    //浮窗英雄选择->创建相应英雄列表头
    $(".hero_list li a").on("click",function(){
       var h_idx = $(this).data("hidx");
       var h_name = $(this).children(".hero_name").html();
       $(".title_hero").html(h_name);
        createHero(h_idx);
        //本地存储
        store.set("hero",h_idx);

        $(".tabs_hero li").removeClass("active").hide().eq(h_idx).show().addClass("active");
        $(".tabs_hero li:last").show();
        $(".cards_option li.cost a").removeClass("active");
        $(".cards_option li.all a span").removeClass("type_cost_active");
        $(".swiper-wrapper").empty(".swiper-slider");
        init(h_idx,0);
        $(".swiper-button-next").addClass("status-bar");
        step = 0;
        $(".cards_page strong").html(1);
    });
    //选择图片到英雄卡牌列表
    function createListCard (id,src,name,cost,cardCost){
        var str = '';
        str+='<div class="card_list_small" style="background-image:url('+src+');">';
        str+='<p class="card_name">'+name+'</p>';
        str+='</div>';
        str+='<span class="cards_over"></span>';
        str+='<span class="thumb_draw"></span>';
        str+='<span class="cost_num_icon '+cost+'"></span>';

        var liDom = $('<li data-id="'+id+'" data-cost="'+cardCost+'"></li>');
        liDom.html(str);

        $("#cards_list").append(liDom);
    }
    // 重新刷新浏览器事件
    window.onbeforeunload = confirmExit();
    function confirmExit() {
        //英雄头像
        if(store.get("hero") !== undefined){
            var localHero = store.get("hero");
            createHero(localHero);
            $(".tabs_hero li").removeClass("active").hide().eq(localHero).show().addClass("active");
            $(".tabs_hero li:last").show();
            $(".cards_option li.cost a").removeClass("active");
            $(".cards_option li.all a span").removeClass("type_cost_active");
            $(".swiper-wrapper").empty(".swiper-slider");
            init(localHero,0);
            $(".swiper-button-next").addClass("status-bar");
            step = 0;
            $(".cards_page strong").html(1);
        }

        //卡牌信息
       if(store.get("cards") !== undefined){
           var localStor = store.get("cards");
           var str = '';
           var indexArr = [];
           for(var i = 0;i<localStor.length;i++){
               indexArr.push(localStor[i].id);
           }
           // console.log(indexArr)
           // 索引排序 (应该按费用排序)
           var newArr = indexArr.sort(function(a,b){return a>b?1:-1});
           // console.log(newArr)
           for(var j=0;j<newArr.length;j++){
              for(var x = 0;x<localStor.length;x++){
                  if(newArr[j] == localStor[x].id){
                      str+='<li data-id="'+localStor[x].id+'" data-cost="'+localStor[x].cardcost+'">';
                      str+='<div class="card_list_small" style="background-image:url('+localStor[x].list_bg+');">';
                      str+='<p class="card_name">'+localStor[x].name+'</p>';
                      str+='</div>';
                      str+='<span class="cards_over"></span>';
                      str+='<span class="thumb_draw '+localStor[x].countclass+'"></span>';
                      str+='<span class="cost_num_icon '+localStor[x].cost+'"></span>';
                      str+='</li>';
                  }
              }
           }
           $("#cards_list").append(str);
       }
       //卡牌计数
        if(store.get("count") !== undefined){
           var localCount = store.get("count");
            if(localCount == 30){
                $(".cards_save a").removeClass("cards_btn_disabled");
            }
            $(".cards_num strong").html(localCount);
            var currentHei = $("#cards_list").height();
            if(currentHei > 528 ){
                $(".cards_list_wrap").niceScroll({
                    // zIndex: 2
                });
            }
        }
    }

});

