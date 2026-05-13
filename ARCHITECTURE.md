# System Architecture

## flowchart TD
    A[User Input] --> B[Frontend React App]
    B --> C[Audit API Layer]
    C --> D[Pricing Engine]
    C --> E[Usage Analysis Engine]
    D --> F[Pricing Database]
    E --> G[Optimization Rules]
    G --> H[Audit Report Generator]
    H --> I[Frontend Dashboard]

## Data Flow
1.The user uploads team AI tool information or manually enters usage.
2.The frontend validates the input and sends it to the audit API.
3.The pricing engine matches tools against current pricing datasets.
4.The usage analysis engine checks team size, overlap, unused seats, and duplicate subscriptions.
5.Optimization rules estimate potential savings.
6.The report generator creates a summarized audit result.
7.The frontend renders charts, recommendations, and estimated savings.

## Why I Chose This Stack
#### React + Vite

Fast local development and excellent component-based architecture

#### Tailwind CSS

Rapid UI iteration and responsive design with minimal CSS maintenance.

#### Node.js APIs

Simple integration with pricing logic and report generation.

## Scaling to 10k Audits/Day

If the platform handled 10,000 audits per day:

Move pricing data into a dedicated relational database.
Add Redis caching for repeated pricing lookups.
Queue heavy audit jobs asynchronously.
Store generated reports in object storage.
Add rate limiting and API monitoring.
Use CDN caching for static dashboard assets.
Separate pricing ingestion from audit computation.