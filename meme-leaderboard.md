---
layout: markdown
title: Meme Leaderboard
description: A leaderboard for meme creators.
keywords: memes, rocket, pool, rpl, crypto
permalink: /meme-leaderboard/

header: Meme Leaderboard
subheader: A leaderboard for meme creators.
buttons:
- <a href="/memes" class="btn btn-outline-dark btn-lg px-4 m-1">Memes</a>
---


{%- comment -%}
 <!-- create an array of all the meme file names (fileNames) -->
{%- endcomment -%}
{%- assign fileArray = "" | split: "," -%}
{%- for image in site.static_files -%}
  {%- if image.path contains 'img/memes' -%}
    {%- assign fileArray = fileArray | push: image -%}
  {%- endif -%}
{%- endfor -%}
{%- assign fileNames = fileArray | map: "basename" -%}


{%- comment -%}
<!-- create an array of all the meme file names with only the creator's name (all_meme_creators) -->
{%- endcomment -%}
{%- assign all_meme_creators = "..." -%}
{%- for fileName in fileNames -%}
  {%- assign fileNameSplit = fileName | split: "--" -%}
  {%- assign creator = fileNameSplit[1] -%}
  {%- assign all_meme_creators = all_meme_creators | append: ", " | append: creator -%}
{%- endfor -%}
{%- assign all_meme_creators = all_meme_creators | remove: "..., " | split: ", " -%}


{%- comment -%}
<!-- create an array of the unique creator names (all_creators) -->
{%- endcomment -%}
{%- assign all_creators = all_meme_creators | uniq -%}


{%- comment -%}
<!-- count the occurances of each all_creator in all_meme_creators and put 
  into an array in {{count}}--{{creator}} format (leaderboard) and then sort it-->
{%- endcomment -%}
{%- assign leaderboard = "..." -%}
{%- for creator in all_creators -%}
  {%- assign count = 0 -%}
  {%- for meme_creator in all_meme_creators -%}
    {%- if creator == meme_creator -%}
      {%- assign count = count | plus: 1 -%}
    {%- endif -%}
  {%- endfor -%}
  {%- if count < 10 -%}
    {%- assign count = "0" | append: count -%}
  {%- endif -%}
  {%- assign entry =  count | append: "--" | append: creator -%}
  {%- assign leaderboard = leaderboard | append: ", " | append: entry -%}
{%- endfor -%}
{%- assign leaderboard = leaderboard | remove: "..., " | split: ", " | sort_natural | reverse -%}


{:class="table table-sm table-hover leaderboard-table"}
Rank                  | Creator       | Memes      
----------------------|---------------|----------
{%- for entry in leaderboard -%}
  {%- assign creator = entry | split: "--" | last -%}
  {%- assign count = entry | split: "--" | first -%}
  {%- if creator != "unknown" %}
    {{forloop.index}} | {{creator}}   | {{count}}
  {%- endif -%}
{%- endfor -%}