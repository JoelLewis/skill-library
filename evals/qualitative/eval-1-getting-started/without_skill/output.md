# Restaurant Ordering System: Where to Start

Great question. With 3 months and a team of 4, you need to make this decision quickly so you can maximize build time. Here's how I'd approach it.

## Step 1: Clarify Your Requirements (Week 1, Days 1-3)

Before choosing between native mobile app vs. PWA, answer these questions:

1. **Who are your users?** Dine-in customers scanning a QR code? Delivery customers ordering from home? Both?
2. **What device split do you expect?** If 90%+ of orders come from phones already in a browser (e.g., via QR code or a link), a PWA has a much lower barrier to entry.
3. **Do you need push notifications?** PWAs now support push on both iOS and Android, though iOS support is still newer and slightly limited.
4. **Do you need offline functionality?** A restaurant ordering system generally requires connectivity (you need real-time menu data and payment processing), so offline support is rarely a deciding factor here.
5. **Do you need access to native device features?** Camera (for QR scanning), GPS (for delivery), payments — most of these are available via web APIs now.
6. **What's your monetization/distribution model?** If you need App Store presence for discoverability, that points toward native. If users arrive via your website or QR codes, PWA wins.

## Step 2: My Lean Recommendation

For a restaurant ordering system with your constraints, **a PWA is almost certainly the right call**. Here's why:

- **Time constraint**: 3 months is tight for a polished native app on two platforms, even with React Native or Flutter. A PWA gives you one codebase that works everywhere.
- **Team of 4**: You likely have web developers. Finding or training native mobile developers adds risk.
- **User acquisition**: Restaurant customers don't want to download an app to place an order. A URL or QR code that opens instantly in the browser removes that friction entirely.
- **Iteration speed**: Web deploys are instant. No App Store review cycles eating into your 3-month window.
- **Cost**: No App Store fees (Apple takes 30% of in-app purchases, which matters if you process payments through the app).

The main reasons to go native would be: you need App Store presence for marketing, you need advanced native features (NFC payments, complex animations), or your target users already expect a dedicated app (e.g., you're a large chain competing with established apps). For most restaurant ordering scenarios, none of these apply.

## Step 3: Technical Stack Decisions

Once you've confirmed PWA, decide on:

- **Frontend framework**: React, Svelte, or Vue — pick what your team already knows.
- **Backend**: What handles menu data, orders, and payments? Existing POS integration? New API?
- **Real-time updates**: WebSockets or SSE for order status tracking.
- **Payments**: Stripe, Square, or integration with your existing payment processor.
- **Hosting**: Cloudflare Pages, Vercel, or Netlify for the frontend; Workers or a lightweight API for the backend.

## Step 4: Rough Timeline for 3 Months

| Phase | Duration | Focus |
|-------|----------|-------|
| Discovery & Architecture | Week 1-2 | Requirements, tech stack, API design, wireframes |
| Core Build | Week 3-8 | Menu browsing, cart, checkout, order management |
| Integration & Polish | Week 9-10 | Payment processing, POS integration, PWA features (install prompt, service worker) |
| Testing & Launch | Week 11-12 | QA, performance testing, soft launch |

## Immediate Next Steps

1. List your must-have features vs. nice-to-haves
2. Confirm your team's tech stack experience
3. Identify your payment and POS integration requirements
4. Sketch out 3-4 key user flows (browse menu, customize item, checkout, track order)
5. Validate the PWA decision with any stakeholders who might push for native

Would you like help with any of these steps in more detail?
