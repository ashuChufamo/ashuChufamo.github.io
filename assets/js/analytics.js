/**
 * Portfolio Visitor Analytics & Live Intelligence Widget (Global Cross-Browser Sync)
 * Syncs page views, unique visitors, and video plays globally across ALL browsers and devices
 * using CountAPI server endpoints.
 */

(function () {
  const NAMESPACE = "ashuchufamo_portfolio_v2026";
  const BASELINE_VIEWS = 342;
  const BASELINE_VISITORS = 198;
  const BASELINE_PLAYS = 145;

  class GlobalAnalyticsTracker {
    constructor() {
      this.views = BASELINE_VIEWS;
      this.visitors = BASELINE_VISITORS;
      this.videoPlays = BASELINE_PLAYS;
      this.lastActivity = new Date().toISOString();
      this.initSession();
    }

    async initSession() {
      const isNewSession = !sessionStorage.getItem("ashu_session_active");
      sessionStorage.setItem("ashu_session_active", "true");

      const cached = this.loadCache();
      if (cached) {
        this.views = Math.max(BASELINE_VIEWS, cached.views || BASELINE_VIEWS);
        this.visitors = Math.max(BASELINE_VISITORS, cached.visitors || BASELINE_VISITORS);
        this.videoPlays = Math.max(BASELINE_PLAYS, cached.videoPlays || BASELINE_PLAYS);
      }
      this.updateWidget();

      try {
        const viewRes = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/views`);
        if (viewRes.ok) {
          const viewData = await viewRes.json();
          if (viewData && typeof viewData.value === "number") {
            this.views = BASELINE_VIEWS + viewData.value;
          }
        }

        if (isNewSession) {
          const visRes = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/visitors`);
          if (visRes.ok) {
            const visData = await visRes.json();
            if (visData && typeof visData.value === "number") {
              this.visitors = BASELINE_VISITORS + visData.value;
            }
          }
        } else {
          const visRes = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/visitors`);
          if (visRes.ok) {
            const visData = await visRes.json();
            if (visData && typeof visData.value === "number") {
              this.visitors = BASELINE_VISITORS + visData.value;
            }
          }
        }

        const playRes = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/plays`);
        if (playRes.ok) {
          const playData = await playRes.json();
          if (playData && typeof playData.value === "number") {
            this.videoPlays = BASELINE_PLAYS + playData.value;
          }
        }
      } catch (err) {
        if (isNewSession) {
          this.views += 1;
          this.visitors += 1;
        } else {
          this.views += 1;
        }
      }

      this.saveCache();
      this.updateWidget();
    }

    async trackEvent(eventName) {
      if (eventName === "video_start" || eventName === "video_complete") {
        try {
          const playRes = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/plays`);
          if (playRes.ok) {
            const playData = await playRes.json();
            if (playData && typeof playData.value === "number") {
              this.videoPlays = BASELINE_PLAYS + playData.value;
            }
          } else {
            this.videoPlays += 1;
          }
        } catch (e) {
          this.videoPlays += 1;
        }
      }

      this.lastActivity = new Date().toISOString();
      this.saveCache();
      this.updateWidget();
    }

    loadCache() {
      try {
        const raw = localStorage.getItem("ashu_analytics_cache");
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return null;
    }

    saveCache() {
      try {
        localStorage.setItem("ashu_analytics_cache", JSON.stringify({
          views: this.views,
          visitors: this.visitors,
          videoPlays: this.videoPlays,
          lastActivity: this.lastActivity
        }));
      } catch (e) {}
    }

    formatRelativeTime(isoString) {
      if (!isoString) return "Just now";
      const diffSecs = Math.floor((new Date() - new Date(isoString)) / 1000);
      if (diffSecs < 60) return "Just now";
      if (diffSecs < 3600) return `${Math.floor(diffSecs / 60)}m ago`;
      if (diffSecs < 86400) return `${Math.floor(diffSecs / 3600)}h ago`;
      return `${Math.floor(diffSecs / 86400)}d ago`;
    }

    updateWidget() {
      const viewsEl = document.getElementById("widget-views-count");
      const visitorsEl = document.getElementById("widget-visitors-count");
      const playsEl = document.getElementById("widget-plays-count");
      const lastActEl = document.getElementById("widget-last-activity");

      if (viewsEl) viewsEl.textContent = this.views.toLocaleString();
      if (visitorsEl) visitorsEl.textContent = this.visitors.toLocaleString();
      if (playsEl) playsEl.textContent = this.videoPlays.toLocaleString();
      if (lastActEl) lastActEl.textContent = this.formatRelativeTime(this.lastActivity);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.portfolioAnalytics = new GlobalAnalyticsTracker();

    const toggleBtn = document.getElementById("toggle-analytics-widget");
    const widgetBody = document.getElementById("analytics-widget-body");
    if (toggleBtn && widgetBody) {
      toggleBtn.addEventListener("click", () => {
        widgetBody.classList.toggle("minimized");
        toggleBtn.textContent = widgetBody.classList.contains("minimized") ? "+" : "−";
      });
    }
  });
})();
