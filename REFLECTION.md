## The hardest bug I hit this week, and how I debugged it

The hardest bug involved incorrect savings calculations when a team used both monthly and annual subscriptions across multiple AI tools. The totals sometimes doubled or produced inconsistent yearly estimates. Initially, I suspected the pricing normalization layer because some plans stored yearly pricing as total annual cost while others stored monthly equivalent values.

I created several hypotheses. First, I checked whether the frontend chart logic was duplicating values. Then I logged intermediate audit engine outputs to isolate where the incorrect totals appeared. I added test cases for combinations of monthly and yearly subscriptions and discovered that the issue occurred when converting annual plans into monthly equivalents before aggregation.

The fix involved creating a unified normalization function that converted all plans into a consistent monthly representation before any calculations happened. After that, I added automated tests covering mixed-plan scenarios. This debugging process reinforced the importance of normalization layers in financial calculations.


## What I would build in week 2 if I had it

If I had another week, I would focus on integrations and benchmarking features. The current version relies on manual inputs, but direct integrations with Slack, Google Workspace, GitHub, Stripe, or SaaS billing platforms would significantly improve accuracy and automation.

I would also add historical spend tracking so users could visualize how their AI costs evolve over time. Another important feature would be team benchmarking, where companies compare their AI spending efficiency against similar startups.

On the technical side, I would improve the pricing ingestion pipeline with automated scraping and validation. I would also implement a recommendation confidence score so users understand which suggestions are highly certain versus estimated.

Finally, I would invest more in onboarding and user education because many users may not fully understand how AI tool redundancy impacts operational costs.


## How I used AI tools

I used ChatGPT primarily for brainstorming UI layouts, improving wording in recommendation summaries, and generating initial documentation drafts. I also used AI assistance for explaining edge cases in pricing normalization and improving Tailwind CSS layouts.

However, I did not trust AI tools with financial calculations or final audit logic. I manually verified pricing formulas and implemented the actual recommendation engine myself because incorrect outputs could mislead users.

One specific case where the AI was wrong involved suggesting a savings calculation that ignored annual billing discounts. The generated logic incorrectly assumed all pricing tiers scaled linearly. I caught the mistake while comparing expected outputs against manually calculated examples.

This experience reinforced that AI tools are excellent accelerators for prototyping and documentation, but critical business logic still requires human verification.


## Self-rating
Discipline — 8/10

I maintained consistent daily progress and completed all required deliverables within the deadline.

Code Quality — 9/10

The project structure is clean and modular, though additional refactoring would improve scalability.

Design Sense — 8/10

The UI is modern, responsive, and optimized for dashboard readability.

Problem Solving — 8/10

I handled pricing normalization and recommendation consistency challenges effectively.

Entrepreneurial Thinking — 7/10

I focused on a real operational pain point and thought carefully about distribution and monetization.