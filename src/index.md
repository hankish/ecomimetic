---
layout: layouts/base.njk
title: Home
---

<div class="card-row">
  <wa-card class="def-card primary">
    <div slot="header" class="def-card-header">
      <span class="wa-heading-xl">
        ec·o·mi·met·ic &nbsp; de·sign
      </span>
    </div>
    <div class="def-phonetic wa-heading-m">/ˌēkōməˈmedik dəˈzīn/</div>
    <div class="def-type wa-caption-s"><em>noun</em> • formal • theoretical</div>
    <ol class="def-content">
      <li>
        An approach to designing organizations and operational processes to mimic the structures, 
        dynamics, and adaptive patterns of living ecosystems.
      </li>
      <li>
        The practice of bringing an <em>ecomimetic org</em> into being and stewarding its 
        evolution over time.
      </li>
    </ol>
  </wa-card>
  
  <wa-card class="def-card secondary">
    <div slot="header" class="def-card-header">
      <span class="wa-heading-xl">
        ec·o·mi·met·ic &nbsp; org
      </span>
    </div>
    <div class="def-phonetic wa-heading-m">/ˌēkōməˈmedik ˌôrg/</div>
    <div class="def-type wa-caption-s"><em>noun</em> • formal • technical</div>
    <div class="def-content">
      An organization with structure and function modeled after the distributed, regenerative, and 
      adaptive patterns observed in living ecosystems.
    </div>
  </wa-card>
</div>

---

The potential of the human species to tackle our largest problems is being constrained by the 
way we structure our organizations, institutions, and coalitions. 

We're facing a civilizational challenge that goes largely undiscussed: the pyramid problem.
Many aspects of the metacrisis can be traced back to the failure of hierarchical structures to 
enable collective sense-making and action. The problem becomes worse as the scale and relational 
complexity of the coordination increases.

From communities and corporates to countries and coalitions, we must answer the question: 
**How do we effectively organize ourselves _without_ hierarchy?**

---

A growing group of systems change thinkers believe that part of the answer lies in the patterns
of emergent coordination that can be observed in both natural ecosystems and human ecosystems 
(distributed networks of human coordination).

Ecomimetic design is a nascent term seeking to help unify and integrate the innovative work being 
done in various fields including: organizational design, collective sense-making, economic
mechanism design, investment structures, tokenomics, distributed governance, steward ownership,
commons design, human flourishing, and many more.

Ecomimetic design is related to, but different from biomimicry. Biomimicry invites a wide
range of designers (from hardware, to architecture, to systems design) to borrow inspiration 
from biological entities and processes. Ecomimetic design focuses on ___ and acknowledges that 
we cannot borrow directly from the natural world because many of the problems we're solving in 
human ecosystems do not occur in natural ecosystems ... (Left off here)

---



<style>
  .card-row {
    display: flex;
    gap: var(--wa-space-m);
  }
  .card-row > p {
    display: none;
  }

  .def-type {
    margin: var(--wa-space-m) 0;
  }

  wa-card.def-card::part(header) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 5rem;
    background: linear-gradient(45deg, var(--gradient-color-1), var(--gradient-color-2));
    color: white;
  }
  wa-card.def-card.primary {
    --gradient-color-1: var(--wa-color-purple-30);
    --gradient-color-2: var(--wa-color-purple-60);
  }
  wa-card.def-card.secondary {
    --gradient-color-1: var(--wa-color-pink-30);
    --gradient-color-2: var(--wa-color-pink-60);
  }

</style>