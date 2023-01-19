---
layout: markdown
title: POAP Leaderboard
description: A leaderboard for POAP creators.
keywords: poap, poaps, rocket, pool, rpl
permalink: /poap-leaderboard/

header: POAP Leaderboard
subheader: A leaderboard for POAP creators.
buttons:
- <a href="/poaps" class="btn btn-outline-dark btn-lg px-4 m-1">POAPs</a>
- <a href="/poap-graveyard" class="btn btn-outline-dark btn-lg px-4 m-1">Graveyard</a>
---


{%- assign all_creators = "..." -%}
{%- for poap in site.data.poaps -%}
  {%- assign creator = poap.creator | split: "," | first | remove: "POAPathon Commission by " -%}
  {%- assign all_creators = all_creators | append: ", " | append: creator -%}
{%- endfor -%}
{%- assign all_creators = all_creators | remove: "..., " | split: ", " | uniq -%}


{%- assign leaderboard = "..." -%}
{%- for each_creator in all_creators -%}
  {%- assign count = 0 -%}
  {%- for poap in site.data.poaps -%}
    {%- assign creator = poap.creator | split: "," | first | remove: "POAPathon Commission by " -%}
    {%- if creator == each_creator -%}
      {%- assign count = count | plus: 1 -%}
    {%- endif -%}
  {%- endfor -%}
  {%- if count < 10 -%}
    {%- assign count = "0" | append: count -%}
  {%- endif -%}
  {%- assign entry =  count | append: "--" | append: each_creator -%}
  {%- assign leaderboard = leaderboard | append: ", " | append: entry -%}
{%- endfor -%}
{%- assign leaderboard = leaderboard | remove: "..., " | split: ", " | sort_natural | reverse -%}



{:class="table table-sm table-hover leaderboard-table"}
Rank                  | Creator       | POAPs      
----------------------|---------------|----------
{%- for entry in leaderboard -%}
  {%- assign creator = entry | split: "--" | last -%}
  {%- assign count = entry | split: "--" | first -%}
  {%- if creator != "unknown" %}
    {{forloop.index}} | {{creator}}   | {{count}}
  {%- endif -%}
{%- endfor -%}