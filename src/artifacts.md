---
layout: layouts/base.njk
title: Artifacts
---

# Artifacts

<p class="lead">Essays, videos, image essays, and other resources for understanding ecomimetic design.</p>

{% if collections.artifacts.length %}
<ul class="artifact-list">
  {% for artifact in collections.artifacts %}
  <li>
    <a href="{{ artifact.url }}">{{ artifact.data.title }}</a>
    {% if artifact.data.description %} — {{ artifact.data.description }}{% endif %}
    {% if artifact.data.submitterName %}
    <span class="artifact-submitter">Submitted by
      {% if artifact.data.submitterLink %}
        <a href="{{ artifact.data.submitterLink }}" target="_blank" rel="noopener noreferrer">{{ artifact.data.submitterName }}</a>
      {% else %}
        {{ artifact.data.submitterName }}
      {% endif %}
    </span>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No artifacts yet. <a href="/participate/">Contribute one.</a></p>
{% endif %}

## Submit an Artifact

If you have produced media related to ecomimetic design — a documentation project, an essay, a recorded talk — and would like it considered for this archive, see the [Participate](/participate/) page for submission guidelines.
