# rocketpool.community

This repository contains the source code for the [Rocket Pool community website](https://rocketpool.community).

> Powered by [Jekyll](https://github.com/jekyll/jekyll).




## Local Development

Using Linux or MacOS:

1. Install dependencies: `bundle install`
1. Update dependencies: `bundle update`
1. Start local server: `bundle exec jekyll serve`
1. Go to <http://localhost:4400/> to view changes

To build the site use `bundle exec jekyll build`.

Resources:

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Syntax](https://shopify.github.io/liquid/basics/introduction/)




## Updating

### Data Files
- At the top of the data file there's an explanation of what the YAML properties are. You can also look at the established data as a guideline.
- Below this is a blank template that you can use when adding entries. When using this make sure to copy it so the template remains. You will need to remove the hashtags, those are just used to comment out the template.


#### Memes
Only archive Rocket Pool memes, not general crypto memes.

1. Download the image/gif
1. Rename it in `{yyyy-mm-dd}--{username}` format with proper file extension
	- Example: `2022-11-20--hanniabu.png`
	- For the username, use their account name not their server name. If you click on their Discord username you vill see something like below. The top on is the server name (ignore). The bottom one with the ID numbers is their username. Use this without the ID number.
		- **hanniabu.eth (Ξ, α)**
 		- *hanniabu#7138*
 	- If their username ends in ".eth", keep that. If their username has spaces, replace it with a single dash.
 	- If they have multiple memes in the same day, add `--` and then `a`, `b`, `c`, etc to differentiate the files and keep them from clashing (even if different file extensions). For example if hanniabu posted 3 memes in the same day, this is what they would look like:
 		- `2022-11-20--hanniabu--a.png`
 		- `2022-11-20--hanniabu--b.png`
 		- `2022-11-20--hanniabu--c.png`
1. Place the file in `assets/img/memes/uncompressed`
1. Compress the file (keeping the same filename)
1. Place the compressed file in `assets/img/memes/`


#### Videos
1. Download the mp4/mov
1. Rename it in `{yyyy-mm-dd}--{username}` format with proper file extension
	- Example: `2022-11-20--hanniabu.mp4`
	- For the username, use their account name not their server name. If you click on their Discord username you vill see something like below. The top on is the server name (ignore). The bottom one with the ID numbers is their username. Use this without the ID number.
		- **hanniabu.eth (Ξ, α)**
 		- *hanniabu#7138*
 	- If their username ends in ".eth", keep that. If their username has spaces, replace it with a single dash.
 	- If they have multiple videos in the same day, add `--` and then `a`, `b`, `c`, etc to differentiate the files and keep them from clashing (even if different file extensions). For example if hanniabu posted 3 videos in the same day, this is what they would look like:
 		- `2022-11-20--hanniabu--a.mp4`
 		- `2022-11-20--hanniabu--b.mp4`
 		- `2022-11-20--hanniabu--c.mp4`
1. Place the file in `assets/videos/`


#### Asset Library
1. Download the image/gif
1. Give it a simple descriptive name, if it's similar to other existing assets then use a similar convention
1. Place the file in `assets/img/asset-library`


#### POAP
- For normal POAPs create an entry in the `_data/poaps.yml` file
- For large files, make sure to use the `filesize` attribute so the file doesn't load
- For POAP Art:
	- Parameters: 
		- `id` = The number of "painted pixels", comma removed
		- `title` = The canvas title
		- `link` = The canvas link, coordinates removed
		- `supply` = The number of "painted pixels", comma removed
		- `creator` = "POAP Art Canvas"
	- Download the image (3 dots to right of name > "Download entire canvas")
		- Rename in `{lowercased-title}-original.jpg` format. If the canvas was titled "Happy Birthday ENS DAO Paint Party" the file would be named `happy-birthday-ens-dao-paint-party-original.jpg`.
		- Place the image in `assets/poaps/art`
	- Take a screenshot of the canvas trimmed to the exact edge of the canvas (make sure the "connect wallet" button or other controls aren't overlayed)
		- Rename in `{lowercased-title}.png` format. If the canvas was titled "Happy Birthday ENS DAO Paint Party" the file would be named `happy-birthday-ens-dao-paint-party.png`.
		- Place the image in `assets/poaps/art`


#### Audits
This page doesn't used a data file and needs to be edited in-page using markdown.


#### POAP Graveyard
1. Download the file
1. Rename it in `{event}--{username}` format with proper file extension
	- Example: `stakewise-saves-rp--hanniabu.png`
	- For the username, use their account name not their server name. If you click on their Discord username you vill see something like below. The top on is the server name (ignore). The bottom one with the ID numbers is their username. Use this without the ID number.
		- **hanniabu.eth (Ξ, α)**
 		- *hanniabu#7138*
 	- If their username ends in `.eth`, keep that. If their username has spaces, replace it with a single dash.
 	- If they have multiple entries in the same event, add `--` and then `a`, `b`, `c`, etc to differentiate the files and keep them from clashing (even if different file extensions). For example if hanniabu posted 3 memes in the same day, this is what they would look like:
 		- `stakewise-saves-rp--hanniabu--a.png`
 		- `stakewise-saves-rp--hanniabu--b.png`
 		- `stakewise-saves-rp--hanniabu--c.png`
1. Place the file in `assets/img/poaps/abandoned`


#### Contests
This has been deprecated.




## Add Custom JS File to Page
1. Add JS file to `assets/js` named after the page it's used on. For example a JS file for `revenue.md` would be named `revenue.js`.
1. Update the switch statement in `_layouts/default.html` to include a clause for the page to include the respective JS file.




## Site Setup
This site is deployed from Netlify (account owned by hanniabu) whenever the main branch has new commits/PRs. 


