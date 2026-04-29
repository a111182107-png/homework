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
    manus: {
      id: 'manus',
      name: 'Manus計畫簡報',
      title: "Manus計畫：深度旅遊企劃",
      subtitle: "探索港都的歷史紋理與現代藝文",
      tag: "2026年4月3日 － 4月6日 (高雄)",
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
              onClick={() => window.open(window.location.href, '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all shadow-xl group shrink-0"
            >
              {currentDoc.name} <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

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
              <a href="#contact" className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                聯絡我
              </a>
              <div className="relative">
                <button 
                  onClick={() => setShowProjects(!showProjects)}
                  className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
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
            src="/profile.jpg" 
            alt="張詠鈞的大頭照" 
            className="w-full h-full object-cover object-[center_35%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=%E5%BC%B5%E8%A9%A0%E9%88%9E&background=1f2937&color=f3f4f6&size=256&font-size=0.33';
            }}
          />
        </motion.div>
      </section>

      <SectionDivider />

      {/* Placeholder: About Me */}
      <section id="about" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">關於我</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl shadow-sm border border-gray-800 min-h-[200px] flex flex-col items-center justify-center text-gray-300 text-center leading-relaxed space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 w-fit mx-auto px-4">自傳</h3>
            <p className="max-w-2xl mx-auto leading-relaxed">
              您好我是張詠鈞，目前就讀航運技術系-航海科，具備良好航海專業相關知識，我具有換位思考與極高的抗壓能力，我也樂於挑戰困難，對於困難的事物我會分析並拆解將其簡化、理解並最終達到目的。
            </p>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* Placeholder: Experience/Projects */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">經歷與作品</h2>
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

          <div className="bg-gray-900/50 p-6 rounded-2xl shadow-sm border border-gray-800 h-48 flex flex-col justify-between group hover:border-gray-700 hover:bg-gray-800/50 transition-all cursor-pointer">
            <div>
              <h3 className="font-semibold text-lg text-gray-100 flex items-center gap-2">
                御風輪實習經歷心得
              </h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                在御風輪的實習過程中，我深入參與了船舶運作的現場實作，學習如何在高壓環境下運用專業知識解決實際問題。
              </p>
            </div>
            <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
              查看心得 <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Placeholder: Contact */}
      <section id="contact" className="space-y-8 scroll-mt-24 pb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight text-white">聯絡方式</h2>
          <div className="h-1 w-10 bg-white rounded"></div>
        </div>
        <div className="bg-white text-black p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="space-y-3 flex-1 text-center md:text-left z-10">
            <h3 className="text-2xl font-bold font-display">準備好一起合作了嗎？</h3>
            <p className="text-gray-600">若有任何專案合作的機會，歡迎透過信箱或是社群媒體與我聯繫，我會盡快回覆您。</p>
          </div>
          <div className="flex items-center gap-4 z-10">
            <a href="#" aria-label="Email" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
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
            <button onClick={() => handleNavClick('#about')} className="hover:text-white transition-colors">關於我</button>
            <button onClick={() => handleNavClick('#projects')} className="hover:text-white transition-colors">經歷與作品</button>
            <button onClick={() => handleNavClick('#contact')} className="hover:text-white transition-colors">聯絡方式</button>
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
