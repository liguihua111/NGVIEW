const pageMeta = {
  dashboard: {
    title: "能源驾驶舱",
    subtitle: "全厂能源供给、消耗、成本与异常一体化总览",
  },
  monitor: {
    title: "分厂能耗监控",
    subtitle: "按厂区、车间、时间维度进行实时与历史能耗追踪",
  },
  efficiency: {
    title: "设备工序能效",
    subtitle: "定位高耗能设备与关键工序偏差，驱动节能优化闭环",
  },
  alarm: {
    title: "告警中心",
    subtitle: "异常事件分级响应，支持派单、处置与复盘全过程管理",
  },
  report: {
    title: "帆软报表中心",
    subtitle: "嵌入帆软报表并统一视觉风格，满足管理层分析与对外报送",
  },
  carbon: {
    title: "碳排与成本分析",
    subtitle: "融合碳排核算与能源成本结构，支撑降本减排决策",
  },
};

const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.dataset.page;
    const meta = pageMeta[target];

    menuItems.forEach((m) => m.classList.remove("active"));
    item.classList.add("active");

    pages.forEach((p) => p.classList.toggle("active", p.id === target));

    if (meta) {
      pageTitle.textContent = meta.title;
      pageSubtitle.textContent = meta.subtitle;
    }
  });
});
