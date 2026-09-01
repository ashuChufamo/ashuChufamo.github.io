/**
 * 10-Second Intro Video Controller
 * Handles video modal, autoplay, sound toggling, skipping, and visit persistence.
 */

document.addEventListener("DOMContentLoaded", () => {
  const introModal = document.getElementById("video-intro-modal");
  const videoPlayer = document.getElementById("intro-video-player");
  const skipBtn = document.getElementById("skip-intro-btn");
  const soundBtn = document.getElementById("toggle-sound-btn");
  const heroReplayBtn = document.getElementById("hero-replay-video-btn");

  if (!introModal || !videoPlayer) return;

  const HAS_SEEN_KEY = "ashu_portfolio_intro_seen";
  const hasSeenInSession = sessionStorage.getItem(HAS_SEEN_KEY);

  function startIntroVideo() {
    introModal.classList.remove("hidden");
    introModal.classList.add("active");
    videoPlayer.muted = true;
    
    // Update sound button UI
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
          console.warn("Autoplay muted video was prevented or interrupted:", err);
        });
    }
  }

  function closeIntroVideo() {
    introModal.classList.remove("active");
    setTimeout(() => {
      introModal.classList.add("hidden");
      videoPlayer.pause();
    }, 500);

    sessionStorage.setItem(HAS_SEEN_KEY, "true");
    localStorage.setItem("ashu_last_video_play", new Date().toISOString());

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

  // When video ends naturally
  videoPlayer.addEventListener("ended", () => {
    closeIntroVideo();
  });

  // Replay from Hero section
  if (heroReplayBtn) {
    heroReplayBtn.addEventListener("click", (e) => {
      e.preventDefault();
      videoPlayer.currentTime = 0;
      startIntroVideo();
    });
  }

  // Check if first visit in session
  if (!hasSeenInSession) {
    // Small delay for initial render polish
    setTimeout(() => {
      startIntroVideo();
    }, 400);
  } else {
    introModal.classList.add("hidden");
  }
});
