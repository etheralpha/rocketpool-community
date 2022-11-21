---
layout: markdown
title: Investment Thesis
description: A collection of analysis on Rocket Pool and RPL's value.
keywords: rpl, thesis, analysis, value, rocket, pool, ratio
permalink: /thesis/

header: Rocket Pool Thesis
subheader: A collection of analysis on Rocket Pool and RPL's value.
note: This is not financial advice and you should follow up with your own research.
buttons:
---


{:class="table"}
Date            | Author            | Thesis
----------------|-------------------|-----------
{%- for thesis in site.data.thesis %}
{{thesis.date}} | {{thesis.author}} | [{{thesis.title}}]({{thesis.link}})
{%- endfor -%}