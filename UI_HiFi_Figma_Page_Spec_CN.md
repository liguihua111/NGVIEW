# 青州卷烟厂能源管理系统｜高保真页面清单 + 组件级线框（Figma落图版）

> 依据文档：  
> 1)《PC界面UI设计规范V1.0》  
> 2)《青州能管功能(思维导图)V3.3终版》  
> 目标：可直接交付 UI 设计师在 Figma 落图与联动原型。

---

## 1. Figma 文件组织（直接照此建文件）

### 1.1 文件结构

1. `00_Design_Tokens`
2. `01_Components`
3. `02_HiFi_Pages`
4. `03_Prototype_Flows`
5. `99_Handoff_标注`

### 1.2 页面命名规则

- 页面：`Pxx_模块_子页`
- 组件：`C_类别_名称_状态`
- 图层：`L_区块_元素`

示例：
- `P03_能耗统计_全厂总览`
- `C_Button_主按钮_Default`
- `L_Query_日期范围`

---

## 2. 全局设计令牌（Token）

## 2.1 画板与栅格

- 基准画板：`1920 x 1080`
- 内容可视宽度（推荐）：`1680`
- 左右安全边距：`24`
- 栅格：`12列`
- 栅格槽宽（推荐）：`24`
- 基准间距：`10px`
- 卡片圆角：`8px`
- 卡片纵向间距：`20px`

## 2.2 框架高度

- 顶部导航区：`64`
- 页签区：`40`
- 标题区：`64`
- 操作区：`64`
- 查询区：`56`（单行），展开后自适应
- 左侧菜单宽：`240`（展开）/ `64`（收起）

## 2.3 色彩

- 品牌主色：`#0091FF`
- 成功：`#00C96D`
- 警告：`#FF8400`
- 危险：`#D7261D`
- 页面背景：`#F5F7FA`
- 卡片背景：`#FFFFFF`
- 边框/分割线：`#E6E6E6`
- 主文本：`#1F2329`
- 次文本：`#4E5969`
- 弱文本：`#86909C`

## 2.4 字体

- 中文：`Microsoft YaHei`
- 英文：`Arial`
- 规则字号：`14 / 16 / 24 / 32`
- 标准行高：`1.5`

---

## 3. 组件库清单（需先完成再画页面）

## 3.1 框架类组件

1. `C_Frame_TopNav_64`
2. `C_Frame_SideMenu_Expand240`
3. `C_Frame_SideMenu_Collapse64`
4. `C_Frame_TabBar_40`
5. `C_Frame_TitleBar_64`
6. `C_Frame_ActionBar_64`
7. `C_Frame_QueryBar_56_Expandable`

## 3.2 数据展示类组件

1. `C_Card_KPI_01`（数值 + 同比/环比）
2. `C_Card_Chart_Line`
3. `C_Card_Chart_Bar`
4. `C_Card_Chart_Pie`
5. `C_Card_RankList`
6. `C_Card_AlarmList`
7. `C_Card_DeviceHealth`

## 3.3 表格与表单类组件

1. `C_Table_Standard`
2. `C_Table_With_StickyAction`
3. `C_Table_Density_Switch`
4. `C_Form_Input`
5. `C_Form_Select`
6. `C_Form_DateRange`
7. `C_Form_Textarea`
8. `C_Form_Number`
9. `C_Form_RequiredLabel`

## 3.4 操作反馈类组件

1. `C_Button_Primary / Secondary / Ghost / Danger`
2. `C_Tag_Status_运行中/预警/告警/离线`
3. `C_Alert_Inline`
4. `C_Modal_Center`
5. `C_Drawer_Right`
6. `C_HelpPanel_通用帮助`

## 3.5 帆软嵌入类组件（重点）

1. `C_FR_Container_Card`
2. `C_FR_ParamBar_系统同款`
3. `C_FR_Toolbar_导出打印订阅`
4. `C_FR_Iframe_Wrapper`
5. `C_FR_Loading_Skeleton`
6. `C_FR_Error_EmptyState`

---

## 4. 高保真页面清单（V1）

| 页面ID | 页面名称 | 主要角色 | 优先级 | 备注 |
|---|---|---|---|---|
| P01 | 登录页 | 全角色 | P0 | 品牌形象入口 |
| P02 | 首页驾驶舱 | 厂领导/能管人员 | P0 | 全厂总览 |
| P03 | 能耗统计-全厂总览 | 能管人员 | P0 | 趋势+占比+明细 |
| P04 | 能耗统计-生产区域 | 车间管理 | P1 | 动力/制丝/卷包 |
| P05 | 能效分析-部门分析 | 能管人员 | P0 | 单耗偏差分析 |
| P06 | 生产管理-产量与能效 | 生产管理 | P1 | 产量耦合能耗 |
| P07 | 能源平衡分析 | 技术/运维 | P0 | 树+平衡图 |
| P08 | 预测模型-预测对比 | 能源调度 | P1 | 日月年预测 |
| P09 | 能源质量-系统质量 | 运维班组 | P1 | 质量阈值管理 |
| P10 | 能流图-全厂电/介质 | 技术/能管 | P1 | 能流钻取 |
| P11 | 报警管理-列表页 | 运维/值班员 | P0 | 闭环入口 |
| P12 | 报警管理-处置详情 | 运维/班长 | P0 | 闭环核心页 |
| P13 | 综合报表管理-帆软容器页 | 管理层/财务/能管 | P0 | 报表统一风格 |
| P14 | 成本核算查询-帆软报表页 | 财务/能管 | P1 | 月度核算 |
| P15 | 数据录入-手抄表录入 | 统计员/班组 | P0 | 高频录入 |
| P16 | 系统管理-用户角色权限 | 管理员 | P1 | 权限与审计 |

---

## 5. 每页组件级线框（可直接落 Figma）

> 说明：以下线框均按 `1920 x 1080`。  
> 统一框架（TopNav + SideMenu + Tab + Title + Action + Query）除登录页外默认复用。

## 5.1 P01 登录页

**Frame：** `1920 x 1080`  
**组件：**
- `C_Login_BrandPanel`
- `C_Login_FormCard`
- `C_Form_Input(用户名/密码/验证码)`
- `C_Button_Primary(登录)`

```text
┌────────────────────────────────────────────────────────────────────────┐
│ L_Header_Brand（系统名称）                                            │
├────────────────────────────────────────────────────────────────────────┤
│ L_Main_Left_BrandVisual             │ L_Main_Right_LoginCard         │
│                                     │ [用户名]                        │
│                                     │ [密码]                          │
│                                     │ [验证码] [获取]                 │
│                                     │ [记住账号]      [登录]          │
├────────────────────────────────────────────────────────────────────────┤
│ L_Footer_版权/版本                                                     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5.2 P02 首页驾驶舱

**关键组件：**
- `C_Card_KPI_01 x 6`
- `C_Card_Chart_Line`
- `C_Card_Chart_Bar`
- `C_Card_AlarmList`
- `C_Card_DeviceHealth`
- `C_Card_QuickEntry`

```text
[TopNav64]
[SideMenu240][Tab40]
            [Title64: 首页驾驶舱]
            [Action64: 刷新/导出驾驶舱]
            [Query56: 日期 | 班次 | 车间 | 查询]
            ┌ KPI1 ┬ KPI2 ┬ KPI3 ┬ KPI4 ┬ KPI5 ┬ KPI6 ┐
            ├────────────── 全厂综合能耗趋势(折线) ──────────────┤
            ├──── 车间单耗对标(柱状) ───┬── 实时告警列表 ──┬ 设备健康 ┤
            └──────────────────────────────────────────────────┘
```

---

## 5.3 P03 能耗统计-全厂总览

**关键组件：**
- `C_Query_Complex`（时间、介质、区域、班次）
- `C_Card_Chart_Line`
- `C_Card_Chart_Pie`
- `C_Table_Standard`

```text
[Title: 能耗统计 / 全厂总览]
[Action: 导出 | 打印 | 订阅]
[Query: 日期范围 | 介质 | 区域 | 部门 | 班次 | 查询 | 重置 | 展开]
┌ 全厂能耗趋势（分介质折线） ┐
├ 本期能耗结构占比（环图） ┬ 同比环比分析卡 ┤
└ 能耗明细表（分页、密度切换、列设置、导出） ┘
```

---

## 5.4 P04 能耗统计-生产区域

**关键组件：**
- `C_Tab_SubPage(动力/制丝/卷包)`
- `C_Card_Chart_Line`
- `C_Card_Chart_Bar`
- `C_Table_With_StickyAction`

```text
[Title: 能耗统计 / 生产区域]
[SubTab: 动力车间 | 制丝车间 | 卷包车间]
[Query: 时间 | 工段 | 设备 | 班次]
┌ 区域能耗趋势 ┐
├ 工段分项对比 ┬ 异常点TOP10 ┤
└ 区域明细表（右侧浮动操作列） ┘
```

---

## 5.5 P05 能效分析-部门分析

**关键组件：**
- `C_Card_Conclusion`（分析结论）
- `C_Card_Advice`（调优建议）
- `C_Card_Chart_Bar`
- `C_Card_Chart_Line`
- `C_Table_Standard`

```text
[Title: 能效分析 / 部门分析]
[Query: 时间 | 部门 | 指标维度 | 查询]
┌ 单位产量能耗对比（柱状） ┬ 近30天偏差趋势（折线） ┐
├ 分析结论卡（自动生成） ┬ 优化建议卡（可转工单） ┤
└ 指标明细表（支持下钻到设备） ┘
```

---

## 5.6 P06 生产管理-产量与能效

**关键组件：**
- `C_Card_KPI_01`（卷包产量/制丝产量/总产量）
- `C_Card_Chart_Mix(产量+能耗双轴)`
- `C_Table_Standard`

```text
[Title: 生产管理 / 产量管理]
[Query: 日期 | 车间 | 班组]
┌ KPI产量1 ┬ KPI产量2 ┬ KPI产量3 ┐
├ 产量-能耗耦合趋势（双轴） ┬ 单耗对标排行 ┤
└ 班组明细表（可导出） ┘
```

---

## 5.7 P07 能源平衡分析

**关键组件：**
- `C_Tree_系统层级`
- `C_Diagram_BalanceFlow`
- `C_Card_BalanceSummary`
- `C_Table_Standard`

```text
[Title: 能源平衡分析]
[Query: 日期 | 介质(水/电/蒸汽/空压) | 分析层级]
┌ 左：系统树(320) ┬ 右：平衡分析区(自适应) ┐
│                 │ ┌ 平衡图（输入/输出/损耗）┐ │
│                 │ ├ 校核卡（平衡差、异常率） ┤ │
│                 │ └ 节点明细表             ┘ │
└──────────────────────────────────────────────┘
```

---

## 5.8 P08 预测模型-预测对比

**关键组件：**
- `C_Form_ModelSelector`
- `C_Card_Chart_Line(预测vs实际)`
- `C_Card_Confidence`
- `C_Table_Standard`

```text
[Title: 预测模型 / 预测对比]
[Action: 生成预测 | 保存方案 | 发布调度]
[Query: 时间粒度(日/月/年) | 系统 | 模型版本]
┌ 预测VS实际曲线 ┬ 偏差分解雷达图 ┐
├ 模型可信度卡 ┬ 智能调度建议卡 ┤
└ 预测结果明细表 ┘
```

---

## 5.9 P09 能源质量-系统质量

**关键组件：**
- `C_Card_StatusGauge`
- `C_Card_Chart_Line`
- `C_Table_AlarmQuality`

```text
[Title: 能源质量]
[Query: 系统类型 | 指标 | 时间]
┌ 质量达标率仪表盘 ┬ 告警分布 ┐
├ 指标趋势（压力/温度/流量） ┤
└ 异常时段明细（定位 + 原因 + 处置） ┘
```

---

## 5.10 P10 能流图-全厂总览

**关键组件：**
- `C_Diagram_EnergyFlow`
- `C_Filter_Chips`
- `C_Card_NodeDetail`

```text
[Title: 能流图]
[Query: 介质 | 时间 | 视图(全厂/区域/车间)]
┌ 能流主画布（支持缩放/拖拽/节点钻取） ┐
├ 节点详情卡（点击节点右侧弹出）       ┤
└ 流向明细表（支持导出）               ┘
```

---

## 5.11 P11 报警管理-列表页

**关键组件：**
- `C_Query_Complex`
- `C_Table_With_StickyAction`
- `C_Tag_Status`
- `C_Drawer_Right(快速预览)`

```text
[Title: 综合管理 / 报警管理]
[Action: 批量派单 | 批量确认 | 导出]
[Query: 报警级别 | 状态 | 车间 | 时间 | 设备]
┌ 报警列表（等级/来源/持续时长/责任人/状态） ┐
└ 行操作：查看详情 | 派单 | 关闭 | 追踪          ┘
```

---

## 5.12 P12 报警管理-处置详情

**关键组件：**
- `C_Steps_闭环流程`
- `C_Form_Dispose`
- `C_Upload_Attachments`
- `C_Timeline_处置记录`

```text
[Title: 报警处置详情]
[Action: 保存 | 提交闭环 | 转派]
┌ 基本信息卡（报警内容/点位/等级/时间） ┐
├ 处置流程Steps（发现→确认→处理→复核→闭环）┤
├ 处置表单（原因、措施、时长、责任人、附件） ┤
└ 历史时间轴（所有操作留痕）               ┘
```

---

## 5.13 P13 综合报表管理-帆软容器页（重点）

**关键组件：**
- `C_FR_Container_Card`
- `C_FR_ParamBar_系统同款`
- `C_FR_Toolbar_导出打印订阅`
- `C_FR_Iframe_Wrapper`
- `C_FR_Loading_Skeleton / C_FR_Error_EmptyState`

```text
[Title: 综合报表管理 / 能源看板]
[Action: 全屏 | 导出PDF | 导出Excel | 打印]
[Query: 报表模板 | 时间 | 车间 | 介质 | 查询]
┌ 帆软报表容器（白底卡片，圆角8） ┐
│ 参数区（系统同款输入框/下拉/日期） │
│ 工具栏（系统同款按钮）             │
│ iframe内容区（报表主题）           │
└────────────────────────────────────┘
```

---

## 5.14 P14 成本核算查询-帆软报表页

**关键组件：**
- `C_FR_ParamBar`
- `C_FR_CostSummaryCards`
- `C_FR_Iframe_Wrapper`

```text
[Title: 综合报表管理 / 成本核算查询]
[Query: 月份 | 车间 | 成本中心]
┌ 成本KPI卡（总成本/单位成本/偏差率） ┐
└ 帆软报表主体（构成、趋势、排行、明细）┘
```

---

## 5.15 P15 数据录入-手抄表录入

**关键组件：**
- `C_Form_Grid_3Col`
- `C_Form_RequiredLabel`
- `C_Table_Editable`
- `C_Button_保存并继续`

```text
[Title: 数据录入 / 手抄表录入]
[Action: 暂存 | 保存并继续 | 提交]
[Query: 介质类型 | 录入日期 | 班次]
┌ 三列表单（点位、读数、单位、备注） ┐
├ 批量录入表格（可复制粘贴）         ┤
└ 校验提示区（缺失/越限/重复）       ┘
```

---

## 5.16 P16 系统管理-用户角色权限

**关键组件：**
- `C_Tree_Org`
- `C_Table_UserList`
- `C_Drawer_RoleAuth`
- `C_Audit_LogPreview`

```text
[Title: 系统管理 / 用户角色权限]
[Action: 新增用户 | 批量导入 | 权限复制]
┌ 左：组织树 ┬ 右上：用户列表 ┐
│            ├ 右下：角色权限抽屉 ┤
│            └ 审计日志预览       ┘
└───────────────────────────────┘
```

---

## 6. 帆软报表与系统风格统一（落图检查项）

1. 参数区控件高度统一（建议 32/36），标签字重与系统一致。  
2. 报表按钮必须使用系统主按钮样式（主蓝、悬浮、禁用）。  
3. 报表图表色板使用系统色板，不得使用高饱和荧光色。  
4. 报表容器使用白底卡片 + 8px 圆角 + `#E6E6E6` 边框。  
5. 报表加载、空状态、报错状态复用系统统一组件。  
6. 从系统查询区透传参数到帆软，交互路径不可中断。  

---

## 7. Prototype 交互流（Figma连线）

## 7.1 Flow-A 管理层查看

`P02 首页驾驶舱 -> P03 能耗统计 -> P13 综合报表管理 -> 导出`

## 7.2 Flow-B 运维处置

`P02 告警卡片 -> P11 报警列表 -> P12 处置详情 -> 闭环完成`

## 7.3 Flow-C 统计填报

`P02 快捷入口 -> P15 手抄表录入 -> 提交 -> P13 成本报表复核`

---

## 8. UI设计师落图任务单（建议顺序）

### 第1批（P0，先出）
- P01 登录页
- P02 首页驾驶舱
- P03 能耗统计-全厂
- P05 能效分析-部门
- P11 报警管理-列表
- P12 报警处置详情
- P13 综合报表管理-帆软容器
- P15 手抄表录入

### 第2批（P1，补齐）
- P04、P06、P07、P08、P09、P10、P14、P16

---

## 9. 交付标准（Definition of Done）

- 每页提供：默认态、加载态、空态、异常态。  
- 每页提供：关键控件交互态（hover/active/disabled）。  
- 每页标注：尺寸、间距、颜色、字体、图层命名。  
- 原型可完整跑通三条流程（管理、运维、填报）。  
- 帆软页与系统页视觉一致性通过评审。  

---

## 10. 附：推荐 Figma 样式命名

- `Color/Brand/Primary-0091FF`
- `Color/Text/Primary-1F2329`
- `Font/CN/Title-24-Bold`
- `Font/CN/Body-14-Regular`
- `Effect/Card/Border-E6`
- `Radius/Card-8`
- `Space/Grid-10`

