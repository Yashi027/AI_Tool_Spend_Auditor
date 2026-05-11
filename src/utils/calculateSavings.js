export function calculateSavings(tools) {
  let monthlySpend = 0;
  let optimizedSpend = 0;
  let recommendations = [];

  tools.forEach((tool) => {
    monthlySpend += tool.price;

    if (tool.name === "ChatGPT" && tool.teamSize === 1) {
      optimizedSpend += 20;

      if (tool.plan === "team") {
        recommendations.push({
          tool: "ChatGPT",
          current: "Team",
          recommended: "Plus",
          savings: 10,
        });
      }
    } else {
      optimizedSpend += tool.price;
    }

    if (tool.name === "Claude" && tool.primaryUse === "coding") {
      recommendations.push({
        tool: "Claude",
        current: "Pro",
        recommended: "ChatGPT Plus",
        savings: 20,
      });
    }
  });

  const monthlySavings = monthlySpend - optimizedSpend;

  return {
    monthlySpend,
    optimizedSpend,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    recommendations,
  };
}