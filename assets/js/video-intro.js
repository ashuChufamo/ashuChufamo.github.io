/**
 * 10-Second Signature Intro Video Controller
 * Plays intro video for first-time session visitors with skip capability,
 * reduced-motion compliance, and replay trigger.
 */

document.addEventListener("DOMContentLoaded", () => {
  const introModal = document.getElementById("video-intro-modal");
  const videoPlayer = document.getElementById("intro-video-player");
  const skipBtn = document.getElementById("skip-intro-btn");
  const soundBtn = document.getElementById("toggle-sound-btn");
  const heroReplayBtn = document.getElementById("hero-replay-video-btn");

  if (!introModal || !videoPlayer) return;

  const HAS_SEEN_KEY = "ashu_portfolio_intro_seen_v2";
  const hasSeenInSession = sessionStorage.getItem(HAS_SEEN_KEY);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function startIntroVideo() {
    introModal.classList.remove("hidden");
    introModal.classList.add("active");
    videoPlayer.muted = true;

    if (soundBtn) {
      soundBtn.innerHTML = `<span class="icon">🔇</span> Unmute`;
    }

    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (window.portfolioAnalytics) {
            window.portfolioAnalytics.trackEvent("video_start");
          }
        })
        .catch((err) => {
          console.warn("Intro video playback notice:", err);
          // If browser blocks playback, allow manual close or skip
        });
    }
  }

  function closeIntroVideo() {
    introModal.classList.remove("active");
    setTimeout(() => {
      introModal.classList.add("hidden");
      videoPlayer.pause();
    }, 400);

    sessionStorage.setItem(HAS_SEEN_KEY, "true");

    if (window.portfolioAnalytics) {
      window.portfolioAnalytics.trackEvent("video_complete");
    }
  }

  // Toggle Mute / Unmute
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      videoPlayer.muted = !videoPlayer.muted;
      if (videoPlayer.muted) {
        soundBtn.innerHTML = `<span class="icon">🔇</span> Unmute`;
      } else {
        soundBtn.innerHTML = `<span class="icon">🔊</span> Mute`;
      }
    });
  }

  // Skip Button
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      closeIntroVideo();
    });
  }

  // Video Ended event
  videoPlayer.addEventListener("ended", () => {
    closeIntroVideo();
  });

  // Video Error fallback
  videoPlayer.addEventListener("error", () => {
    closeIntroVideo();
  });

  // Replay from Hero button
  if (heroReplayBtn) {
    heroReplayBtn.addEventListener("click", (e) => {
      e.preventDefault();
      videoPlayer.currentTime = 0;
      startIntroVideo();
    });
  }

  // First visit in session check (skip if prefers reduced motion)
  if (!hasSeenInSession && !prefersReducedMotion) {
    setTimeout(() => {
      startIntroVideo();
    }, 300);
  } else {
    introModal.classList.add("hidden");
  }
});
