---
layout: default
title: Videos
description: A collection of memes created by the community.
keywords: memes, rocket, pool, rpl, crypto
permalink: /videos/
---


{%- assign fileArray = "" | split: "," -%}
{%- for video in site.static_files -%}
  {%- if video.path contains 'videos/' -%}
    {%- assign fileArray = fileArray | push: video -%}
  {%- endif -%}
{%- endfor -%}
{%- assign fileArray = fileArray | reverse -%}
<script type="text/javascript">
  const fileArray = {{fileArray | jsonify}};
</script>


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Videos</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of videos created by the community.
    </p>
    <p>
      <small><em>Total Videos: {{fileArray.size}}</em></small>
    </p>
    <button class="btn btn-outline-dark btn-lg px-4 m-1" onclick="showRandom()">View Random</button>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for video in site.data.resources | where: -%}
      {%- assign description = video.description | downcase -%}
      {%- if video.categories contains 'video' and video.categories contains "entertainment" and description contains "meme" and video.link contains "watch?v=" -%}
        <div class="col d-flex align-items-stretch">
          <div class="card mb-3" style="width: 12rem;">
            {%- assign video_link = video.link | replace: "watch?v=", "embed/" -%}
            <iframe width="190" height="192" src="{{video_link}}" title="YouTube video player" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body d-flex align-items-start flex-column">
              <a href="{{video.link}}" target="_blank">
                <p class="card-subtitle lh-1 mt-2 text-muted mb-auto text-break"><small>{{video.description}}</small></p>
              </a>
            </div>
          </div>
        </div>
      {%- endif -%}
    {%- endfor -%}
    {%- assign months = site.data.months -%}
    {%- assign files_by_title = fileArray | sort_natural: "basename" | reverse -%}
    {%- for file in files_by_title -%}
        <div class="col d-flex align-items-stretch">
          <div class="card mb-3" style="width: 12rem;">
            <video class="lazyload" style="height: 12rem; object-fit: contain; background: #000;" controls>
              <source src="{{file.path}}" type="video/mp4">
            </video>
            <div class="card-body d-flex align-items-start flex-column">
              {%- assign pathSplit = file.basename -%}
              {%- assign filename = pathSplit | split: "--" -%}
              {%- assign date = filename[0] -%}
              {%- assign date_split = date | split: "-" -%}
              {%- assign date_year = date_split[0] | split: "--" -%}
              {%- capture date_month_num -%}{{date_split[1] | split: "--"}}{%- endcapture -%}
              {%- assign date_month_data = months | where: "month_num", date_month_num -%}
              {%- capture date_month -%}{%- for month in date_month_data -%}{{ month.name_short }}{%- endfor -%}{%- endcapture -%}
              {%- assign date_day = date_split[2] | split: "--" -%}
              {%- capture date_readable -%}{{ date_day }}-{{ date_month }}-{{ date_year }}{%- endcapture -%}
              {%- assign user = filename[1] | replace: "-", " "  -%}
              <p class="card-subtitle lh-1 mt-1 text-muted"><small>{{date_readable}}</small></p>
              <p class="card-subtitle lh-1 mt-2 text-muted mb-auto text-break"><small>{{user}}</small></p>
              <div>
                <a href="{{file.path}}" class="btn btn-sm btn-outline-dark mt-3" download>Download</a>
                <a href="" class="btn btn-sm btn-outline-dark mt-3" 
                  data-bs-toggle="modal" 
                  data-bs-target="#detailsModal" 
                  data-bs-link="{{file.path}}" 
                  data-bs-date="{{date}}" 
                  data-bs-user="{{user}}">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
    {%- endfor -%}
  </div>
</section>


<!-- Modal -->
<div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="modalTitle" class="modal-title"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <img id="modalImg" src="" class="card-img-top mx-auto" style="max-width: auto; object-fit: contain; display: none">
            <video id="modalVid" style="width: 100%; object-fit: contain; display: none; background: #000;" controls>
              <source id="modalVidSrc" src="" type="video/mp4">
            </video>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted"><small>Date: </small><small id="modalDate"></small></p>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted"><small>By: </small><small id="modalUser"></small></p>            
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <span id="modalRandom">
          <!-- <a class="btn btn-dark" onclick="showRandom()">Random</a> -->
        </span>
        <a class="btn btn-outline-dark" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>