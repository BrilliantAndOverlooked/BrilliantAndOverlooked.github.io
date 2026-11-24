/* Brilliant & Overlooked — Lightweight Interactive Behavior */

(() => {
  // 1. Expandable Verified Source Drawers
  document.querySelectorAll("[data-toggle-sources]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-toggle-sources");
      const panel = targetId ? document.getElementById(targetId) : null;
      if (!panel) return;

      const isHidden = panel.hasAttribute("hidden");
      if (isHidden) {
        panel.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = btn.textContent.replace("View", "Hide");
      } else {
        panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = btn.textContent.replace("Hide", "View");
      }
    });
  });

  // 2. Lazy Privacy-Enhanced YouTube Modal Player
  const modal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("videoModalTitle");
  const modalFrame = document.getElementById("videoModalFrame");
  const modalClose = document.getElementById("videoModalClose");
  let lastTrigger = null;

  function openVideo(videoId, title, trigger) {
    if (!modal || !modalFrame || !modalTitle) return;
    lastTrigger = trigger || null;
    modalTitle.textContent = title || "Brilliant & Overlooked";
    modalFrame.innerHTML = `<iframe
      src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0"
      title="${(title || "YouTube video").replace(/"/g, "&quot;")}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`;
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    modalClose?.focus();
  }

  function closeVideo() {
    if (!modal || !modalFrame) return;
    modal.setAttribute("hidden", "");
    modalFrame.innerHTML = "";
    document.body.style.overflow = "";
    lastTrigger?.focus();
  }

  document.querySelectorAll("[data-video-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-video-id");
      const title = btn.getAttribute("data-video-title") || "";
      if (id) openVideo(id, title, btn);
    });
  });

  modalClose?.addEventListener("click", closeVideo);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeVideo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) {
      closeVideo();
    }
  });

  // 3. Zero-Backend Nomination Submission -> Pre-filled GitHub Issue
  const nomForm = document.getElementById("nominateForm");
  nomForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const person = (document.getElementById("nomPerson")?.value || "").trim();
    const story = (document.getElementById("nomStory")?.value || "").trim();
    const credit = (document.getElementById("nomCredit")?.value || "").trim();
    if (!person || !story) return;

    const issueTitle = `Nomination: ${person}`;
    const bodyLines = [
      `### Overlooked Mind Nominated`,
      person,
      ``,
      `### Why Their Story Deserves to Be Remembered`,
      story,
    ];
    if (credit) {
      bodyLines.push(``, `### Viewer Credit`, credit);
    }
    const url =
      `https://github.com/BrilliantAndOverlooked/BrilliantAndOverlooked.github.io/issues/new` +
      `?title=${encodeURIComponent(issueTitle)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();
