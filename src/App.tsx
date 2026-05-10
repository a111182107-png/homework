import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ChevronRight, ChevronLeft, Home, FileText, Video, Box, MapPin, Clock, Calendar, Sun, Car, Hotel, Wallet, ExternalLink, Utensils, Info, Play } from 'lucide-react';

const SectionDivider = () => (
  <div className="w-full py-16 flex justify-center">
    <div className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
  </div>
);

function PresentationContent() {
  const [selectedDoc, setSelectedDoc] = useState('manus');

  const docs = {
    itinerary: {
      id: 'itinerary',
      name: '行程規劃',
      title: "高雄清明連假四天三夜行程表",
      subtitle: "2026年4月3日 (五) － 4月6日 (一) | Kaohsiung Travel Guide",
      tag: "旅遊重點與建議",
      mainTitle: "行程概覽與注意事項",
      rental: {
        model: "氣候：22°C - 28°C",
        price: "陽光充足，請做好防曬",
        location: "交通：捷運＋輕軌",
        pros: "近郊大樹/田寮建議租車"
      },
      budget: {
        total: "住宿與機能",
        breakdown: [
          { label: "住宿推薦 1", value: "鹽埕埔站附近" },
          { label: "住宿推薦 2", value: "美麗島站附近" },
          { label: "交通優勢", value: "交通最為便利" },
          { label: "行李寄放", value: "左營高鐵站" }
        ]
      },
      itinerary: [
        {
          title: "第一天：港都藝術與海港夕陽 (4/3)",
          events: [
            { time: "10:30", location: "左營高鐵站", activity: "抵達高雄，辦理飯店 check-in / 寄存行李" },
            { time: "12:00", location: "鹽埕區美食", activity: "午餐：鴨肉珍、郭家肉粽或港園牛肉麵" },
            { time: "14:00", location: "駁二藝術特區", activity: "漫步大港橋、看旋轉秀（15:00）、文創店巡禮" },
            { time: "16:00", location: "棧貳庫 KW2", activity: "享受海景、純白旋轉木馬拍照、文創市集" },
            { time: "17:30", location: "⻄子灣 / 領事館", activity: "觀賞著名的「⻄子灣夕照」，感受浪漫港灣" },
            { time: "19:00", location: "愛河之心", activity: "晚餐後可搭乘「愛之船」欣賞夜晚的愛河燈飾" }
          ],
          quote: "「重現高雄的經典港灣浪漫與藝文氣息。」"
        },
        {
          title: "第二天：親子狂歡與購物樂趣 (4/4 兒童節)",
          events: [
            { time: "09:30", location: "壽山動物園", activity: "適合全家大小，體驗最新空中走廊與親水設施" },
            { time: "12:30", location: "鼓山渡輪站", activity: "午餐：海之冰或在地小吃，隨後搭渡輪往旗津" },
            { time: "14:00", location: "旗津島探險", activity: "租借協力車、造訪旗后砲台、彩虹教堂" },
            { time: "16:30", location: "SKM Park Outlets", activity: "搭乘捷運至草衙站，瘋玩鈴鹿賽道樂園與購物" },
            { time: "19:30", location: "瑞豐夜市", activity: "晚餐：品嚐天使雞排、QQ蛋等高雄最強夜市美食" }
          ],
          quote: "「從動物園到遊樂園，再以夜市美食畫下完美句點。」"
        },
        {
          title: "第三天：心靈淨化與地質奇觀 (4/5)",
          events: [
            { time: "09:00", location: "佛光山佛陀紀念館", activity: "觀賞雄偉的大佛與展覽，體驗心靈的寧靜" },
            { time: "12:30", location: "佛光山蔬食", activity: "享用精緻的素食午餐，感受禪意" },
            { time: "14:30", location: "田寮月世界", activity: "漫步在惡地地形中，觀賞如月球表面的荒涼美感" },
            { time: "18:00", location: "岡山美食", activity: "晚餐：品嚐道地的岡山羊肉爐" },
            { time: "20:00", location: "流行音樂中心", activity: "回市區散步，欣賞高流中心的燈光秀（海音館）" }
          ],
          quote: "「在月世界尋幽探秘，感受心靈與視覺的雙重震撼。」"
        },
        {
          title: "第四天：古蹟文化與文青漫步 (4/6)",
          events: [
            { time: "09:30", location: "蓮池潭風景區", activity: "參觀龍虎塔（龍口入虎口出），散步潭邊步道" },
            { time: "12:00", location: "左營眷村料理", activity: "午餐：劉家酸白菜火鍋或三牛牛肉麵" },
            { time: "14:00", location: "衛武營文化中心", activity: "參觀世界最大單一屋頂劇院建築，在草原散步" },
            { time: "15:30", location: "美麗島站 / 伴手禮", activity: "拍光之穹頂、購買在地特產（如中外餅舖）" },
            { time: "17:00", location: "左營高鐵站", activity: "帶著滿滿的回憶準備返家" }
          ],
          quote: "「古蹟、人文與藝術交織的高雄最終章。」"
        }
      ]
    },
    manus: {
      id: 'manus',
      name: 'Manus計畫簡報',
      title: "Manus計畫：深度旅遊企劃",
      subtitle: "探索港都的歷史紋理與現代藝文",
      tag: "2026年4月3日 － 4月6日 (高雄)",
      linkUrl: 'https://docs.google.com/presentation/d/1mZO-wrbC9zM1UkX8GGe2YX5XHRYC42BM/edit?usp=sharing&ouid=108615148852760334436&rtpof=true&sd=true',
      embedUrl: 'https://docs.google.com/presentation/d/1mZO-wrbC9zM1UkX8GGe2YX5XHRYC42BM/embed?start=false&loop=false&delayms=3000',
      mainTitle: "5 人團體自駕行程規劃",
      rental: {
        model: "MG G50 七人座 (2026)",
        price: "假日 TWD 3,500 (預約價)",
        location: "高雄環球租車 (火車站對面)",
        pros: "1,500 c.c. 尊榮級空間，適合 5 人"
      },
      budget: {
        total: "13,000 - 16,000",
        breakdown: [
          { label: "住宿 (三晚飯店)", value: "~ 6,500" },
          { label: "交通 (高鐵/捷運/租車)", value: "~ 4,200" },
          { label: "餐飲 (特色合菜/小吃)", value: "~ 4,000" },
          { label: "門票/雜支 (導覽等)", value: "~ 1,300" }
        ]
      },
      itinerary: [
        {
          title: "第一天：海港文藝與歷史敘事",
          events: [
            { time: "12:00", location: "鹽埕美食巡禮：鴨肉珍", activity: "米其林必比登推薦，5 人推薦點整隻鴨肉切盤與下水湯分享。" },
            { time: "14:00", location: "駁二藝術特區", activity: "參觀 2026 特展「會動的浮世繪」，觀賞 15:00 大港橋旋轉秀。" },
            { time: "17:30", location: "打狗英國領事館", activity: "登上官邸俯瞰西子灣夕陽與高雄港景，感受浪漫歷史氛圍。" }
          ],
          quote: "「見證高雄的過去與未來，從鹽埕的老味道到駁二的現代創意。」"
        },
        {
          title: "第二天：戶外生態與海島民俗",
          events: [
            { time: "10:00", location: "壽山動物園 (預約制)", activity: "體驗新建空中廊道與親水廣場，觀察水豚君等新朋友。門票僅 TWD 40。" },
            { time: "13:00", location: "旗津深度考察", activity: "租借 5 人座電動四輪車輕鬆遊島，造訪燈塔、彩虹屋與星空隧道。" },
            { time: "18:30", location: "晚餐：旗津萬三海產", activity: "百元熱炒模式，適合 5 人團體快速且多樣化的聚餐體驗。" }
          ],
          quote: "「從山城動物園到旗津黑沙灘，感受高雄海島生活的熱情與活力。」"
        }
      ]
    },
    gamma: {
      id: 'gamma',
      name: 'Gamma計畫簡報',
      title: "Gamma計畫：2026 限定旅遊企劃",
      subtitle: "整合經典賽轉播與日光海島生活節",
      tag: "2026年4月3日 － 4月6日 (限定活動)",
      linkUrl: 'https://docs.google.com/presentation/d/1QP0ZgpiyIIJ31LbjyCj6uPSCyJ2dVXAl/edit?usp=sharing',
      embedUrl: 'https://docs.google.com/presentation/d/1QP0ZgpiyIIJ31LbjyCj6uPSCyJ2dVXAl/embed?start=false&loop=false&delayms=3000',
      mainTitle: "5 人深度旅遊 & 賽事巡禮",
      rental: {
        model: "7 人座近郊自駕方案",
        price: "平日 TWD 3,000 / 假日 TWD 3,500",
        location: "高雄火車站正對面 (極為便利)",
        pros: "適合 5 人存放行李，避開連假人群"
      },
      budget: {
        total: "13,000 - 16,000",
        breakdown: [
          { label: "住宿 (三間飯店)", value: "~ 6,500" },
          { label: "交通 (高鐵/捷運/租車含油)", value: "~ 4,200" },
          { label: "餐飲 (合菜/熱炒/小吃)", value: "~ 4,000" },
          { label: "門票/雜支 (賽道/導覽)", value: "~ 1,300" }
        ]
      },
      itinerary: [
        {
          title: "第三天：地質惡地與宗教美學 (自駕行程)",
          events: [
            { time: "10:30", location: "佛陀紀念館", activity: "八塔建築與大佛像，感受宏偉空間美學與宗教藝術。" },
            { time: "15:00", location: "田寮月世界", activity: "登月步道 → 弦月觀景台，拍竹編裝置與玉池倒影。" },
            { time: "18:30", location: "岡山舊市羊肉", activity: "米其林必比登推薦，溫體羊肉爐 + 苦瓜羊肉熱炒。" }
          ],
          quote: "「在月球表面般的惡地中，尋找心靈的寧靜與在地美味。」"
        }
      ]
    },
    notebooklm: {
      id: 'notebooklm',
      name: 'Notebooklm計畫簡報',
      title: "Notebooklm：高雄春季紀行",
      subtitle: "遇見大港的百種模樣 | 藝術、生態、奇景",
      tag: "四天三夜深度提案 (4/3 - 4/6)",
      linkUrl: 'https://docs.google.com/presentation/d/1Nyccad3NWc7NSBAXqmB8t966w64kl-Gt/edit?usp=sharing',
      embedUrl: 'https://docs.google.com/presentation/d/1Nyccad3NWc7NSBAXqmB8t966w64kl-Gt/embed?start=false&loop=false&delayms=3000',
      mainTitle: "港都藝術與海港夕陽導覽",
      rental: {
        model: "捷運 + 輕軌 + 租車 (無縫接軌)",
        price: "視車款彈性預算",
        location: "鹽埕埔站 / 美麗島站 (兩大樞紐)",
        pros: "歷史與現代交會，機能重鎮"
      },
      budget: {
        total: "14,000 - 17,000",
        breakdown: [
          { label: "氣候環境 (22°C - 28°C)", value: "需薄春裝" },
          { label: "住宿選擇", value: "鹽埕/美麗島" },
          { label: "必買伴手禮", value: "中外餅舖" },
          { label: "交通方式", value: "雙鐵無縫接軌" }
        ]
      },
      itinerary: [
        {
          title: "第四天：古蹟文化與文青漫步",
          events: [
            { time: "09:30", location: "蓮池潭龍虎塔", activity: "傳統「龍口入、虎口出」祭改文化，祈求整年好運。" },
            { time: "12:00", location: "左營眷村料理", activity: "劉家酸白菜火鍋或三牛牛肉麵，傳承數十年的實在好味。" },
            { time: "14:30", location: "衛武營國家藝術中心", activity: "參觀世界最大單一屋頂劇院，15:30 預約導覽深入了解建築。" }
          ],
          quote: "「帶著南國的陽光與海風，滿載而歸。高雄，期待與您再次相遇。」"
        }
      ]
    },
    gemini: {
      id: 'gemini',
      name: 'Gemini計畫簡報',
      title: "Gemini計畫：深度旅遊企劃",
      subtitle: "智能規劃的高雄四天三夜遊",
      tag: "高雄清明連假 (4/3 - 4/6)",
      linkUrl: 'https://docs.google.com/presentation/d/1gZ-_KUawFxUHlohRCN6Uf3iw92dx-bkkrPuKHfH5uvY/edit?usp=sharing',
      embedUrl: 'https://docs.google.com/presentation/d/1gZ-_KUawFxUHlohRCN6Uf3iw92dx-bkkrPuKHfH5uvY/embed?start=false&loop=false&delayms=3000',
      mainTitle: "AI 智能推薦行程",
      rental: {
        model: "多元交通工具",
        price: "視預算而定",
        location: "高鐵/捷運/租車",
        pros: "深度體驗城市脈動"
      },
      budget: {
        total: "13,000 - 16,000",
        breakdown: [
          { label: "交通建議", value: "大眾運輸 + 短程租車" },
          { label: "住宿規劃", value: "交通便利首選" },
          { label: "餐飲美食", value: "在地特色小吃與熱炒" },
          { label: "其他花費", value: "景點門票與預備金" }
        ]
      },
      itinerary: [
        {
          title: "Gemini 行程總覽",
          events: [
            { time: "Day 1", location: "海港文藝", activity: "歷史敘事與海港夕陽" },
            { time: "Day 2", location: "戶外生態", activity: "壽山動物園與海島民俗" },
            { time: "Day 3", location: "宗教美學", activity: "地質惡地與宗教巡禮" },
            { time: "Day 4", location: "當代藝術", activity: "眷村記憶與藝文空間" }
          ],
          quote: "「由 Gemini 為您精心策劃的深度旅程，探索港都的多樣風貌。」"
        }
      ]
    }
  };

  const currentDoc = docs[selectedDoc as keyof typeof docs];

  return (
    <motion.div
      key="presentation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-12"
    >
      {/* Document Selector Header */}
      <div className="flex flex-wrap gap-3 mt-10 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl">
        {Object.values(docs).map((doc) => (
          <button
            key={doc.id}
            onClick={() => setSelectedDoc(doc.id)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              selectedDoc === doc.id 
                ? 'bg-white text-black shadow-lg scale-105' 
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {doc.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDoc}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Overview Header & Budget */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">{currentDoc.title}</h1>
              <p className="text-gray-400">{currentDoc.subtitle}</p>
            </div>
            <button 
              onClick={() => window.open((currentDoc as any).linkUrl || window.location.href, '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all shadow-xl group shrink-0"
            >
              {currentDoc.name} <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Embedded Presentation View */}
          {(currentDoc as any).embedUrl ? (
            <div className="bg-[#101010] border border-gray-800 rounded-2xl overflow-hidden w-full aspect-video shadow-2xl relative">
              <div className="absolute inset-x-0 top-0 h-10 w-full bg-transparent flex items-center justify-end px-4 z-10 pointer-events-none">
              </div>
              <iframe 
                src={(currentDoc as any).embedUrl}
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen={true}
                className="w-full h-full relative z-0"
              ></iframe>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-10 space-y-8 h-full">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {currentDoc.tag}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">{currentDoc.mainTitle}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Car className="w-5 h-5 text-green-400" />
                        {currentDoc.rental.model}
                      </div>
                      <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>價格：{currentDoc.rental.price}</li>
                        <li>地點：{currentDoc.rental.location}</li>
                        <li>優勢：{currentDoc.rental.pros}</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Info className="w-5 h-5 text-blue-400" />
                        預約與重點
                      </div>
                      <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                        <li>壽山動物園：提前 2 週預約</li>
                        <li>衛武營導覽：提前一日預約</li>
                        <li>熱門餐廳：提前 1 個月預約</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 flex flex-col justify-center space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-semibold text-white">預算與規劃資訊</h3>
                    <div className="text-3xl font-display font-bold text-white tracking-tight">
                      NT$ {currentDoc.budget.total}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-800 space-y-3">
                    {currentDoc.budget.breakdown.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="text-gray-300 font-mono">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-2xl space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-400" /> 天候應對
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    高雄 4 月清爽宜人，白天與早晚溫差可能達 10 度以上，建議採取洋蔥式穿法並備齊防曬用品。
                  </p>
                </div>
                <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-2xl space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-400" /> 2026 限定
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    整合駁二「會動的浮世繪」特展與經典賽轉播活動，這是只有 2026 清明連假才有的特別企劃。
                  </p>
                </div>
                <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-2xl space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-green-400" /> 在地美饌
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    包含鹽埕三寶、旗津海產與岡山羊肉等必收名單，所有餐廳皆已規劃好 5 人聚餐的最佳點餐策略。
                  </p>
                </div>
              </div>

              {/* Itinerary */}
              <div className="space-y-8">
                {currentDoc.itinerary.map((day, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#101010] border border-gray-800 rounded-2xl overflow-hidden"
                  >
                    <div className="bg-gray-800/40 px-6 py-4 border-b border-gray-800">
                      <h2 className="text-xl font-display font-bold text-white flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 text-sm text-gray-300 font-mono">STEP</span>
                        {day.title}
                      </h2>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="relative border-l border-gray-800 ml-4 space-y-8 pb-4">
                        {day.events.map((event, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-[#111]"></div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                              <div className="flex items-center gap-2 text-sm font-mono text-gray-500 w-24 shrink-0">
                                <Clock className="w-3.5 h-3.5" />
                                {event.time}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 font-medium text-gray-200">
                                  <MapPin className="w-4 h-4 text-orange-500/50" />
                                  {event.location}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed pl-1">
                                  {event.activity}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pl-4 border-t border-gray-800 pt-6 italic text-gray-500 text-sm text-center">
                        {day.quote}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}


function VideoContent() {
  return (
    <motion.div
      key="video"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-12"
    >
      <div className="space-y-4 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
          <Play className="w-4 h-4" />
          AI 生成作品
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">AI 旅遊影片</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          由 Minimax | Hailuo AI 生成，展示高雄旅遊的獨特動態視角與氛圍。
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto p-12 text-center space-y-6">
        <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
          <Video className="w-10 h-10 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">點擊下方按鈕觀看完整影片</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          影片因檔案大小限制，請點擊連結前往 Google 雲端硬碟觀看高雄旅遊 AI 生成短片。
        </p>
        <div className="pt-4">
          <a 
            href="https://drive.google.com/file/d/1cgN-9SYIKx6Yqd3Nw3_9ASxDsol4ogRe/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-900/20"
          >
            <Play className="w-5 h-5 fill-current" />
            ai旅遊影片
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> 關於影片內容
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            這段影片捕捉了高雄港都的多樣面貌，包含了大港橋、壽山動物園、西子灣等標誌性景點。
            透過 AI 技術的想像力，我們將旅遊的喜悅與高雄的景色融合，呈現出充滿活力且溫馨的畫面。
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Video className="w-5 h-5 text-purple-400" /> 製作資訊
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">生成工具</span>
              <span className="text-gray-300">Minimax | Hailuo AI</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">影片類型</span>
              <span className="text-gray-300">AI 旅遊情境短片</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">解析度</span>
              <span className="text-gray-300">High Definition</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


function ThreeDContent() {
  return (
    <motion.div
      key="3d"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 pb-12"
    >
      <div className="space-y-4 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
          <Box className="w-4 h-4" />
          AI 3D 建模
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">3D 作品案例</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          透過 AI 輔助生成的 3D 模型作品，展示空間感與立體設計的結合。
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto p-12 text-center space-y-6">
        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30 text-blue-400">
          <Box className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white">查看互動式 3D 模型</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          您可以點擊下方按鈕前往 Tripo AI 開啟互動式 3D 預覽頁面，縮放或旋轉觀察模型細節。
        </p>
        <div className="pt-4">
          <a 
            href="https://studio.tripo3d.ai/3d-model/849b0578-51b9-4319-8a49-b4b64f5b66df?invite_code=3JEXDE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
          >
            <Box className="w-5 h-5" />
            ai3D公子模型
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> 模型技術說明
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            本作品利用 Tripo AI 進行初步建模，結合圖像特徵抓取與立體拓撲生成。
            透過 3D 預覽連結，您可以即時觀察模型的光影表現與材質細節。
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Box className="w-5 h-5 text-blue-400" /> 模型資訊
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">建模平台</span>
              <span className="text-gray-300">Tripo AI</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">查看方式</span>
              <span className="text-gray-300">網頁互動式預覽</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">模型名稱</span>
              <span className="text-gray-300">公子模型 (AI 生成)</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HomeContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row items-center gap-12 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gray-100 leading-tight">
            你好，我是 <br />
            <span className="text-white">張詠鈞</span>
            <span className="text-2xl md:text-4xl text-gray-500 font-medium ml-3 block md:inline mt-2 md:mt-0">Chang, Yong-Jun</span>
          </h1>
          <div className="text-gray-400 font-medium space-y-1">
            <p>處女座｜2007-08-23</p>
          </div>
          {/* Intro text removed as per request */}
          
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-4 relative">
              <div className="relative">
                <button 
                  onClick={() => setShowProjects(!showProjects)}
                  className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                >
                  查看作品
                </button>
                
                <AnimatePresence>
                  {showProjects && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full sm:left-0 mt-3 p-2 bg-gray-800 border border-gray-700 rounded-2xl shadow-xl flex gap-2 z-10"
                    >
                      {[
                        { id: 'presentation', icon: FileText, label: '簡報' },
                        { id: 'video', icon: Video, label: '影片' },
                        { id: '3d', icon: Box, label: '3D' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setShowProjects(false);
                          }}
                          title={item.label}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        >
                          <item.icon className="w-5 h-5" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-400 mt-2 group w-fit">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:A111182107@nkust.edu.tw" className="text-sm hover:text-white transition-colors">
                A111182107@nkust.edu.tw
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden relative shadow-2xl border-4 border-gray-800 ring-4 ring-white/5"
        >
          {/* Profile Picture */}
          <img 
            src={`${import.meta.env.BASE_URL}profile.jpg`} 
            alt="張詠鈞的大頭照" 
            className="w-full h-full object-cover object-[center_35%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=%E5%BC%B5%E8%A9%A0%E9%88%9E&background=1f2937&color=f3f4f6&size=256&font-size=0.33';
            }}
          />
        </motion.div>
      </section>

      <SectionDivider />

      {/* Education */}
      <section id="education" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">學歷</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800 space-y-6">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-bold text-white text-lg">目前：高雄科技大學航運技術系 五航四(2026)</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-gray-600"></div>
              <div>
                <p className="font-medium text-gray-300">英明國中</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-gray-600"></div>
              <div>
                <p className="font-medium text-gray-300">復興國小</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* Experience */}
      <section id="experience" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">經歷</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        
        <div className="space-y-6">
          {/* Autobiography */}
          <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800 flex flex-col justify-center text-gray-300 leading-relaxed space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 w-fit px-4">自傳</h3>
            <p className="leading-relaxed px-4">
              您好我是張詠鈞，目前就讀航運技術系-航海科，具備良好航海專業相關知識，我具有換位思考與極高的抗壓能力，我也樂於挑戰困難，對於困難的事物我會分析並拆解將其簡化、理解並最終達到目的。
            </p>
          </div>

          {/* Internship */}
          <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800 flex flex-col justify-center text-gray-300 leading-relaxed space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 w-fit px-4">2025 的御風輪實習</h3>
            <div className="space-y-4 px-4 text-gray-400">
              <p>
                帶著行李又緊張又興奮的心情，與大家陸陸續續地上了船。在船上的 16 天過完後，我覺得很多對於船的疑問也隨之解決了。
              </p>
              <p>
                在一開始對於船員會不會不好相處而有點過於擔心，導致我有點太緊繃，我想這是我特別需要加強的問題：對於較陌生的人與我的交流與談話，總是使我處在一個緊張的狀態。
              </p>
              <p>
                在船上的氣氛大部分一直很好。上課的時候也在航行中，對於想靠意志力不暈船的我來說有點痛苦。學到了很多有關電子航圖的使用方法，方位圈位置線的使用方法讓我印象深刻；雷達控標的實際呈現畫面很酷，S-band、X-band 校準雜訊的過程依天候而定；六分儀實物操作測太陽，這次實習也讓我對於航運業的實際實務有了更深的了解。
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Certificates */}
      <section id="certificates" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">專業證照</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['基本安全訓練', '保全意識', '保全職責', '進階滅火', '助理及航行當值', '醫療急救'].map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-200 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Languages */}
      <section id="languages" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">語言能力</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800 space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-l-2 border-gray-700 pl-4">
              <span className="text-xl font-bold text-white w-24">中文</span>
              <span className="text-gray-400">精通</span>
            </div>
            <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-4">
              <span className="text-xl font-bold text-white w-24">英文</span>
              <span className="text-gray-400">略懂</span>
            </div>
            <div className="pl-4 ml-24 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-200 font-medium border border-gray-700">
                TOEIC 560
              </div>
              <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden max-w-sm">
                <img 
                  src={`${import.meta.env.BASE_URL}toeic.jpg`} 
                  alt="TOEIC Certificate" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1f2937/d1d5db?text=TOEIC+Certificate';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Projects */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">作品</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-800 h-48 flex flex-col justify-between group hover:border-blue-500/50 hover:bg-gray-800/50 transition-all cursor-pointer" onClick={() => setActiveTab('presentation')}>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> 高雄深度旅遊企劃
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                包含 Manus、Gamma 與 NotebookLM 三大計畫提案。利用 AI 協助規劃 5 人團體自駕行程，整合美食、交通與 2026 限定活動。
              </p>
            </div>
            <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
              前往查看 <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-800 h-48 flex flex-col justify-between group hover:border-purple-500/50 hover:bg-gray-800/50 transition-all cursor-pointer" onClick={() => setActiveTab('video')}>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 flex items-center gap-2">
                <Video className="w-5 h-5 text-purple-400" /> AI 生成旅遊短片
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                利用 Minimax | Hailuo AI 生成的高雄旅遊視覺短片。展示 AI 在捕獲景點動態美感與營造氛圍上的強大潛力。
              </p>
            </div>
            <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
              觀看影片 <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-800 h-48 flex flex-col justify-between group hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all cursor-pointer" onClick={() => setActiveTab('3d')}>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 flex items-center gap-2">
                <Box className="w-5 h-5 text-cyan-400" /> AI 3D 互動模型
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                透過 Tripo AI 模型生成的「公子模型」。展示如何從單張影像或文字描述，快速轉化為可互動的立體作品。
              </p>
            </div>
            <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
              互動體驗 <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function SectionPlaceholder({ title, description }: { title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 pt-12"
    >
      <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-4">
        <FileText className="w-8 h-8 text-gray-500" />
      </div>
      <h2 className="text-3xl font-display font-bold text-white">{title}</h2>
      <p className="text-gray-400 max-w-md leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isHoveredNav, setIsHoveredNav] = useState(false);

  const handleNavClick = (href: string) => {
    setActiveTab('home');
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-gray-100 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Floating Right Navigation */}
      <motion.div
        layout
        onMouseEnter={() => setIsHoveredNav(true)}
        onMouseLeave={() => setIsHoveredNav(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#111111]/90 backdrop-blur-xl border border-gray-800 border-r-0 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        animate={{
          width: isHoveredNav ? "4rem" : "2.5rem",
          height: isHoveredNav ? "20rem" : "6rem",
          borderTopLeftRadius: isHoveredNav ? "1rem" : "3rem",
          borderBottomLeftRadius: isHoveredNav ? "1rem" : "3rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {!isHoveredNav ? (
            <motion.div
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center w-full h-full text-gray-400 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 mr-1" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-between h-full py-6 w-full"
            >
              {[
                { id: 'home', icon: Home, label: '首頁' },
                { id: 'presentation', icon: FileText, label: '簡報' },
                { id: 'video', icon: Video, label: '影片' },
                { id: '3d', icon: Box, label: '3D' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab(item.id);
                  }}
                  title={item.label}
                  className={`relative flex flex-col items-center justify-center w-full h-12 transition-colors ${
                    activeTab === item.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <motion.div layout>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={activeTab === item.id ? 2.5 : 2} />
                  </motion.div>
                  {activeTab === item.id && (
                    <motion.div 
                      layoutId="nav-indicator" 
                      className="absolute left-2 md:left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" 
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span 
            className="font-display font-bold text-xl tracking-tight text-white cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            YongJun.
          </span>
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-400">
            <button onClick={() => handleNavClick('#education')} className="hover:text-white transition-colors">學歷</button>
            <button onClick={() => handleNavClick('#experience')} className="hover:text-white transition-colors">經歷</button>
            <button onClick={() => handleNavClick('#certificates')} className="hover:text-white transition-colors">專業證照</button>
            <button onClick={() => handleNavClick('#languages')} className="hover:text-white transition-colors">語言能力</button>
            <button onClick={() => handleNavClick('#projects')} className="hover:text-white transition-colors">作品</button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-16 pr-20 md:pr-24 relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeContent setActiveTab={setActiveTab} />}
          {activeTab === 'presentation' && <PresentationContent />}
          {activeTab === 'video' && <VideoContent />}
          {activeTab === '3d' && <ThreeDContent />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0a0a0a] py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} 張詠鈞. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">GitHub 原始碼</a>
            <span>•</span>
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
