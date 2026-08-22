# 图渡官网开发交接提示词

你是图渡官网的前端开发接手 agent。请在当前的新项目树中从零搭建官网，并持续工作到首版可以在本地完整运行和验收。

## 设计参考

- PC 设计稿：`/Users/reason/.codex/generated_images/01a005dc-86b9-7292-945e-1fd31b3a1e9a/exec-c46ab3d0-e90b-4765-b1ec-731ce4ed67a1.png`
- Mobile 设计稿（严格 `430:932` 比例，2x 像素稿 `860×1864`）：`/Users/reason/.codex/visualizations/2026/08/15/01a005dc-86b9-7292-945e-1fd31b3a1e9a/mobile-home-430x932@2x.png`

先查看两张设计稿，再检查当前项目文件和依赖。不要把设计稿整张作为网页背景，也不要用 div 拼出假的应用截图。

## 产品与页面目标

图渡是一款 macOS 表情素材管理与导出工具。官网面向中文互联网用户，核心信息是：

- 从微信或本机导入表情素材。
- 连接到 WhatsApp 等应用。
- 在本地整理和分组素材。
- 导出到目标应用或本地文件夹。
- 素材在本地处理，不上传、不分析、不留痕迹。

首页主文案保持：

- 标题：`把中文梗，带到每一场聊天`
- 副标题：`从微信与本机整理表情，轻松导出到 WhatsApp 或本地。素材始终由你掌控。`
- 主按钮：`下载 macOS 版`
- 次级入口：`查看使用须知`

## 设计判断

这是一个消费级 macOS 工具的品牌官网，使用波普艺术、中文互联网表情、纸张颗粒、剪贴画白边和手绘黑线。它不是标准 SaaS 模板，也不是 shadcn 默认主题。

设计参数：

- `DESIGN_VARIANCE: 8`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

保持浅色纸张主题。使用米白纸张背景、炭黑文字和单一翠绿色功能色。橙色、蓝色、红色只属于插画素材，不要扩散成新的 UI 强调色。

## 技术栈

首选并坚持以下技术栈：

- Astro
- TypeScript strict
- Tailwind CSS v4
- 原生 CSS 和 CSS variables，用于纸张、半调网点、贴纸白边和错位效果
- Astro Assets 和 `<Picture>`，用于响应式图片
- `@astrojs/sitemap`
- Cloudflare Workers Static Assets
- Wrangler
- Cloudflare R2 作为未来 DMG、更新文件和下载统计相关素材的存储位置

当前首版尽量使用 Astro 组件和原生 HTML。只有确实需要客户端状态的内容才使用 React Island，例如 MobileMenu 或 DownloadDialog。

不要默认安装完整 shadcn/ui。只有出现复杂 Dialog、Sheet、Dropdown 时，才加入 `@astrojs/react` 并按需引入对应组件。引入后必须重做颜色、圆角、边框、阴影和字体，不能保留 shadcn 默认外观。

图标统一使用 Phosphor 图标家族。Astro 中可使用支持 Phosphor 的构建时图标方案。不要混用多套图标，不要手写功能性 SVG path。

## 推荐目录

```text
src/
  assets/
    app-screenshots/
    characters/
    doodles/
    patterns/
    textures/
  components/
    SiteHeader.astro
    MobileMenu.tsx
    Hero.astro
    HeroCollage.astro
    TrustStrip.astro
    WorkflowGrid.astro
    SecuritySection.astro
    FaqSection.astro
    DownloadCta.astro
    SiteFooter.astro
  layouts/
    SiteLayout.astro
  pages/
    index.astro
    download.astro
    guide.astro
    privacy.astro
    about.astro
  styles/
    tokens.css
    global.css
    collage.css
    motion.css
public/
  favicon.svg
  robots.txt
  og/
wrangler.jsonc
astro.config.mjs
```

只在内容已经准备好时创建额外页面。没有真实内容时，不要填充 AI 风格的假评论、假数据、假客户 Logo 或版本号。

## 页面结构

首页按以下顺序搭建：

1. SiteHeader
2. Hero
3. TrustStrip
4. WorkflowGrid
5. SecuritySection
6. Feature details
7. FAQ
8. Final download CTA
9. SiteFooter

首轮可以优先完成设计稿中已经明确的前五部分，然后等待人工验收再扩展其余内容。

## PC 布局

- 导航高度控制在 64-72px，单行显示 Logo、导航和下载按钮。
- Hero 使用左右非对称布局。左侧是标题、副标题和两个入口，右侧是独立图层组合的产品拼贴画。
- Hero 在常见桌面首屏内完成，不让 CTA 掉到首屏以下。
- TrustStrip 是 Hero 下方的独立区段，不属于 Hero 文本栈。
- 四个功能在宽屏下横向排列，使用少量分隔线，不使用四张悬浮卡片。

## Mobile 布局

- `< 768px` 必须明确切换为严格单列，不允许简单缩小桌面布局。
- 导航只保留 Logo、品牌名和 44px 以上的菜单按钮。
- Hero 顺序是标题、副标题、CTA、产品拼贴画。
- Mobile 设计稿对应 `430×932` 的首屏视口，只展示导航、Hero 和 TrustStrip 的开头；WorkflowGrid 与安全区位于首屏以下，不要为了在一屏塞完而压缩内容。
- 主按钮保持单行，触控高度至少 44px。
- 产品拼贴画使用单独的相对定位容器，移动端建议 `aspect-ratio: 4 / 5`。
- 移动端仅保留水豚噜噜、蜜桃猫、大笨狗和草地牛。两个人像贴纸不显示。
- TrustStrip 三项必须可换行但不能横向滚动。
- WorkflowGrid 改为 2x2。极窄屏可退化为单列。
- 安全特性改为垂直排列。
- 必须在 390px、430px、768px、1024px、1440px 检查布局。
- 页面不能出现横向滚动条。

## Hero 素材组合规则

不要导出一张包含全部元素的大 Hero 图片。应在 `HeroCollage.astro` 中组合独立素材：

```text
HeroCollage
  product screenshot
  水豚噜噜 sticker
  蜜桃猫 paired sticker
  大笨狗 sticker
  草地牛 sticker
  optional human portrait stickers for desktop only
  blue ?! burst
  yellow NB burst
  halftone paper shapes
  torn color-paper shapes
```

实现方式：

- 容器使用 `position: relative` 和固定 `aspect-ratio`。
- 每个装饰图层使用绝对定位，坐标、缩放和旋转通过 CSS variables 表达。
- 在 `md:` 断点分别定义桌面和移动坐标，不要用 JavaScript读取 viewport。
- 容器使用 `overflow: hidden`，保证人物不会跨进 TrustStrip。
- 所有装饰层设置 `pointer-events: none`。
- APP 截图必须保留尺寸占位，避免 CLS。
- 角色贴纸设置有意义的 alt；纯装饰碎纸使用空 alt。

示意 API：

```astro
<HeroCollage
  screenshot={productScreenshot}
  characters={characters}
  density="mobile-reduced"
/>
```

## 必须准备或生成的素材

### 1. 真实 APP 截图

必须从真实 Electron 应用截取 Retina PNG，不能继续使用 AI 重绘的小字界面作为生产素材。

- 页面：四步流程第一步或最能代表产品的主页面
- 建议保留原始 2x 分辨率
- 输出 PNG 或无损 WebP
- 字体、边框和图标必须清晰
- 如需倾斜，只在 CSS 中使用 `transform: rotate()`，不要把透视永久烘焙到截图里

### 2. 透明角色贴纸

每个角色独立导出透明背景素材，并带统一白色剪贴边缘：

- `lulu.webp`
- `dog.webp`
- `peach-cats.webp`
- `grass-cow.webp`
- `portrait-hong.webp`，桌面可选
- `portrait-strawhat.webp`，桌面可选

建议至少保留约 800px 的长边源文件，并生成响应式变体。不要将多个角色合并成一张透明大图。

这些角色可能涉及版权、商标或肖像权。正式公开部署前必须取得授权，或者替换为不直接复刻现有 IP 的原创角色。开发阶段可以使用明确标记的临时素材。

### 3. 装饰素材

准备以下独立资产：

- 纸张颗粒无缝纹理，小尺寸平铺
- 黑色半调网点 SVG 或透明 WebP
- 蓝色 `?!` 爆炸贴纸
- 黄色 `NB` 爆炸贴纸
- 红、黄、蓝撕纸块
- 网格纸碎片
- 手绘箭头和短线

简单几何形状可以使用 CSS。复杂手绘线稿应由设计工具或图片生成工具产出，不要在业务组件中堆放难以维护的 SVG path。

### 4. 品牌与分享素材

- 黑底方形 Logo 的 SVG 或高分辨率 PNG
- Favicon
- Apple Touch Icon
- 1200x630 Open Graph 图片
- 下载页所需的产品图

## 样式令牌

将品牌变量集中在 `tokens.css`。不要在组件中散落颜色与阴影值。

至少定义：

```css
:root {
  --paper: #fbfaf7;
  --ink: #171717;
  --muted: #5f6368;
  --accent: #18ad55;
  --line: rgb(23 23 23 / 14%);
  --radius-control: 10px;
  --radius-panel: 14px;
  --shadow-sticker: 4px 5px 0 rgb(20 20 20 / 12%);
}
```

浅色主题是设计稿基准。仍需使用语义变量预留暗色模式，并在真正完成暗色视觉验收后再启用系统自动切换。不要直接反转图片，也不要在同一页面中让单个区段突然变成暗色主题。

## 动效

动效只用于说明层级和反馈：

- Hero 角色首次出现时轻微错位进入。
- 角色可以有非常轻的漂浮或旋转，但一个页面只保留少数自动循环。
- CTA Hover 和 Active 提供明确触觉反馈。
- FAQ 展开显示真实状态变化。
- 只动画 `transform` 和 `opacity`。
- 使用 CSS、IntersectionObserver 或 Astro View Transitions。
- 禁止监听全局 `scroll` 后写 React state。
- 全部动画必须支持 `prefers-reduced-motion`。

## SEO

实现：

- 每页独立 title、description、canonical
- `lang="zh-CN"`
- Open Graph 和 Twitter metadata
- `robots.txt`
- `@astrojs/sitemap`
- `SoftwareApplication` JSON-LD
- FAQ 内容确认后增加 `FAQPage` JSON-LD
- 图片 alt
- 语义化标题层级
- 下载页的系统要求、当前版本、发布日期只能使用真实数据

不要为了 SEO 堆叠关键词。围绕用户真正会搜索的问题编写页面，例如微信表情导出、微信表情转 WhatsApp、Mac 表情管理。

## Cloudflare

- 首版优先静态生成。
- 使用 Workers Static Assets 部署 `dist`。
- 只有确实需要服务端路由时才加入 `@astrojs/cloudflare`。
- 在 `wrangler.jsonc` 中配置静态资源目录和自定义 404。
- 未经用户确认不要部署到生产域名。
- 未来 DMG 放在 R2，不要直接塞入网站 Git 仓库。

## 质量要求

- LCP 目标低于 2.5s。
- INP 目标低于 200ms。
- CLS 低于 0.1。
- Hero 主图预加载，其他图片懒加载。
- APP 截图和角色都写入明确宽高。
- 页面颗粒只通过固定的 `pointer-events: none` 伪元素呈现，不挂在大型滚动容器上持续重绘。
- 正文和按钮满足 WCAG AA 对比度。
- Focus 状态清晰可见。
- 下载按钮在桌面和手机均不换行。
- 使用 `min-height: 100dvh`，不要使用 `100vh` 固定首屏。

## 开发流程

1. 检查当前目录、Node 环境和 package manager。
2. 查看设计稿并建立 `ASSET_MANIFEST.md`，列出现有素材、缺失素材和临时占位。
3. 初始化 Astro、TypeScript、Tailwind v4 和 Cloudflare 配置。
4. 先建立 tokens、布局和响应式结构。
5. 使用独立图片图层实现 HeroCollage。
6. 完成 PC 和 Mobile 前五个区段。
7. 运行类型检查、构建和本地预览。
8. 使用浏览器分别截取 390px、430px 和 1440px 的页面进行视觉核对。
9. 修复溢出、字体换行、触控区域和图片加载问题。
10. 等待用户验收后，再扩展 FAQ、下载页和正式部署。

## 首轮交付物

- 可运行的 Astro 首页
- PC 与 Mobile 响应式实现
- `ASSET_MANIFEST.md`
- `README.md`，包含开发、构建和 Cloudflare 预览命令
- SEO 基础文件
- Wrangler 静态资源配置
- 本地构建和检查结果
- 缺失素材清单

不要 commit、push 或正式部署，除非用户明确授权。
