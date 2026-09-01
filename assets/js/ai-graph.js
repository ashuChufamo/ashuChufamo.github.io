/**
 * Interactive AI Skill Node Canvas Graph
 * Renders central node ASHENAFI connected to key expertise nodes with floating physics & hover effects.
 */

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("ai-network-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height, dpr;
  let mouse = { x: -1000, y: -1000, active: false };

  // Center node & connected nodes
  const nodes = [
    { id: "center", label: "ASHENAFI", radius: 45, isCenter: true, color: "#00f2fe" },
    { id: "ai", label: "AI Systems", radius: 32, angle: 0, distance: 130, color: "#4facfe" },
    { id: "software", label: "Software Eng", radius: 32, angle: (Math.PI * 2) / 6, distance: 140, color: "#00f2fe" },
    { id: "data", label: "Data & BI", radius: 32, angle: (Math.PI * 4) / 6, distance: 135, color: "#38ef7d" },
    { id: "product", label: "Products", radius: 32, angle: (Math.PI * 6) / 6, distance: 145, color: "#ff0844" },
    { id: "research", label: "Research", radius: 32, angle: (Math.PI * 8) / 6, distance: 130, color: "#f6d365" },
    { id: "leadership", label: "Leadership", radius: 32, angle: (Math.PI * 10) / 6, distance: 140, color: "#ffb199" }
  ];

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", resize);
  resize();

  // Mouse interaction
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  let animationFrame;
  let time = 0;

  function animate() {
    time += 0.02;
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate node coordinates with floating oscillation
    nodes.forEach((node, idx) => {
      if (node.isCenter) {
        node.x = centerX;
        node.y = centerY;
      } else {
        const osc = Math.sin(time + idx) * 8;
        const currentDistance = node.distance + osc;
        const currentAngle = node.angle + Math.cos(time * 0.5 + idx) * 0.05;

        node.x = centerX + Math.cos(currentAngle) * currentDistance;
        node.y = centerY + Math.sin(currentAngle) * currentDistance;
      }

      // Hover check
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      node.isHovered = dist < node.radius + 10;
    });

    // Draw connecting neon lines
    nodes.forEach((node) => {
      if (!node.isCenter) {
        const centerNode = nodes[0];

        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);

        const isHighlighted = node.isHovered || centerNode.isHovered;
        ctx.strokeStyle = isHighlighted ? node.color : "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = isHighlighted ? 2.5 : 1;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHighlighted ? 12 : 0;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    });

    // Draw nodes
    nodes.forEach((node) => {
      ctx.save();

      const scale = node.isHovered ? 1.15 : 1;
      const currentRadius = node.radius * scale;

      // Outer glow ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius + (node.isCenter ? 8 : 4), 0, Math.PI * 2);
      ctx.fillStyle = node.isCenter ? "rgba(0, 242, 254, 0.15)" : "rgba(255, 255, 255, 0.05)";
      ctx.fill();

      // Node background
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = node.isCenter ? "#0f172a" : "#1e293b";
      ctx.strokeStyle = node.color;
      ctx.lineWidth = node.isHovered ? 3 : 2;
      ctx.shadowColor = node.color;
      ctx.shadowBlur = node.isHovered ? 20 : 8;
      ctx.fill();
      ctx.stroke();

      // Text label
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.font = node.isCenter ? "bold 13px 'Outfit', sans-serif" : "500 11px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y);

      ctx.restore();
    });

    animationFrame = requestAnimationFrame(animate);
  }

  animate();
});
