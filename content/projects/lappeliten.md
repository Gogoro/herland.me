---
title: "Lappeliten"
slug: "lappeliten"
description: "Working as a full-stack consultant for a mid-sized Norwegian
label company, helping strengthen their tech stack, resolve critical
performance issues, and chart the path forward for sustainable growth."
tags: ["Full-Stack Development", "System Architecture", "Data Engineering"]
timestamp: 2025-01-01T00:00:00Z
featured: true
externalUrl: "https://lappeliten.no"
---

In January 2025, I began working with Lappeliten, a mid-sized Norwegian
company specializing in personalized name labels and children's accessories.
With revenues around 100MNOK, they had built a successful business but were
facing the classic scale-up challenge: systems that worked well at smaller
volumes were starting to show cracks. My role spans the full technical
spectrum—frontend, backend, infrastructure, data engineering, and strategic
planning.

![Lappeliten homepage](/projects/lappeliten/lappeliten.png)

## The Landscape

Walking into Lappeliten's tech environment, I found a diverse stack that
reflected years of organic growth:

- **Frontend**: Next.js application serving customers
- **Backend**: Multiple Java applications handling business logic
- **Database**: HSQL managing operational data
- **Data layer**: Minimal analytics infrastructure

The architecture worked, but critical issues were emerging. The most urgent:
label generation times had exceeded incoming order rates, creating a growing
backlog that threatened to impact delivery commitments. Beyond this crisis,
years of accumulated technical debt made it difficult to implement new features
or scale operations confidently.

## Solving the Backlog Crisis

The label generation bottleneck required immediate attention. Orders were
coming in faster than the system could produce the personalized labels,
creating operational risk. I dove into the Java backend processing pipeline,
identified performance bottlenecks, and implemented optimizations that brought
generation times back under control. The backlog began clearing, and the
system could once again keep pace with demand.

This firefighting phase also revealed deeper patterns: quick fixes had
accumulated over time, and the architecture needed more fundamental attention
to support the company's growth trajectory.

## Building for the Future

With stability restored, we shifted focus to strategic improvements:

**Data Infrastructure**: I built Python-based data pipelines feeding into
BigQuery as a data warehouse. For the first time, Lappeliten had a foundation
for meaningful business insights—understanding customer patterns, product
performance, and operational metrics at scale.

**Technical Debt Resolution**: Addressed long-standing architectural issues
that had been limiting development velocity and system reliability. This wasn't
just cleanup; it was about creating space for innovation.

**Strategic Planning**: Beyond fixing what exists, we're now charting the path
forward. What does a sustainable, scalable architecture look like for
Lappeliten's next phase? How do we balance pragmatic improvements with
long-term vision?

This work is ongoing. The challenge isn't just technical—it's about
understanding a business with 100MNOK in revenue, meeting them where they are,
and building the foundation they need to reach the next level.

## Reflections

Working with Lappeliten demonstrates what full-stack consulting really means:
moving seamlessly between Next.js frontend work, Java backend optimization,
database performance tuning, Python data engineering, and architectural
strategy. It's about solving the immediate crisis while keeping an eye on
sustainable growth. The work continues, and each phase builds on the last.
