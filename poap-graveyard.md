---
layout: default
title: POAP Graveyard
description: A collection of designs that never made the big leagues.
keywords: poap, poaps, rocket, pool, rpl
permalink: /poap-graveyard/
---


{%- assign fileArray = "" | split: "," -%}
{%- for image in site.static_files -%}
  {%- if image.path contains 'img/poaps/abandoned' -%}
    {%- assign fileArray = fileArray | push: image -%}
  {%- endif -%}
{%- endfor -%}
{%- assign fileArray = fileArray | reverse -%}
<script type="text/javascript">
  const fileArray = {{fileArray | jsonify}};
</script>

<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool POAP Graveyard</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of designs that never made the big leagues.
    </p>
    <p>
      <small><em>Total Fallen: {{fileArray.size}}</em></small>
    </p>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for file in fileArray -%}
        <div class="col">
          <div class="card mb-3" style="width: 12rem;">
            {%- if file.extname == ".mp4" -%}
              <video class="lazyload" style="height: 12rem; object-fit: contain;" controls>
                <source src="{{file.path}}" type="video/mp4">
              </video>
            {%- else -%}
              <img data-src="{{file.path}}" class="card-img-top mx-auto d-block lazyload" 
                style="height: 12rem; object-fit: contain; cursor: pointer;" 
                data-bs-toggle="modal" 
                data-bs-target="#detailsModal" 
                data-bs-link="{{file.path}}" 
                data-bs-creator="{{creator}}">
            {%- endif -%}
            <div class="card-body">
              {%- assign pathSplit = file.basename -%}
              {%- assign filename = pathSplit | split: "--" -%}
              {%- assign date = filename[0] -%}
              {%- assign creator = filename[1] | replace: "-", " "  -%}
              <p class="card-subtitle llh-1 text-muted"><small>{{creator}}</small></p>
              <a href="{{file.path}}" class="btn btn-sm btn-outline-dark mt-3" 
                data-bs-toggle="modal" 
                data-bs-target="#detailsModal" 
                data-bs-link="{{file.path}}" 
                data-bs-creator="{{creator}}">
                View
              </a>
              <a href="{{file.path}}" class="btn btn-sm btn-outline-dark mt-3" download>Download</a>
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
            <video id="modalVid" style="height: 12rem; object-fit: contain; display: none" controls>
              <source id="modalVidSrc" src="" type="video/mp4">
            </video>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted"><small>By: </small><small id="modalCreator"></small></p>            
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a class="btn btn-outline-dark" data-bs-dismiss="modal">Close</a>
      </div>
    </div>
  </div>
</div>