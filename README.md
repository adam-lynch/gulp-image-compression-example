# gulp-image-compression-example

Example gulp setup for image compression; created to help with https://twitter.com/MissRachilli/status/856127759650885632.

## Pre-requisites

You just need Node.js

## Setup

1. `npm install -g gulp`
2. `npm install`


## Running the build

1. `gulp`

A `dist` directory should be created containing the compressed images. Open `index.html` in your browser to prove it has worked.


## Decisions / opinions

### Where to save the compressed images to

You could compress the images and save them over the originals but you'd lose the originals and it would also need to process each file everytime you run gulp because it can't tell if they've changed.

You could compress the images (stored in the `images` directory) and save them to `images/compressed` or as I've done here, save them to a `dist/images` directory. I find this cleaner and if you want to preprocess anything else (styles, templates, etc.) they should be saved here so you have all generated / compiled assets in one place.

You shouldn't check-in / commit the `dist` directory to version control. If you're using git, see that I've ignored it in this project's .gitignore here: [.gitignore#L40](.gitignore#L40).


### Caching

Compressing the images can take some time (depending on how many you have), so I've included some caching; only images which have been added / changed will be compressed when gulp is ran again. This is done by comparing the modified datetime of the images in the `dist/images` directory versus the ones in the `images` directory.


### No cleanup

I didn't bother implementing any cleanup of that `dist` directory though. So if you have `images/a.jpg`, it'll be compress and saved to `dist/images/a.jpg`. If you delete `images/a.jpg`, run gulp again, it won't be deleted from `dist/images`. You can just manually delete it from there or even just `dist` or `dist/images` itself and re-run gulp to get a pruned `dist` directory.


### gulp-load-plugins

At the top of [gulpfile.js](gulpfile.js), only `gulp` and [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) are `required`. Normally, you must `require` each gulp module you but gulp-load-plugins does that for you. It checks your package.json for anything starting with `gulp-` I.e. `$.imagemin` is `gulp-imagemin`. This means that when you're installing a new module, you must use the `--save` or `--save-dev` flags (which will add the module to your `package.json`), otherwise gulp-load-plugins won't find it. This is good because it prevents "it works on my machine" problems when working with others / multiple machines. See #3 here: [10 things to know about Gulp](https://engineroom.teamwork.com/10-things-to-know-about-gulp/).

This isn't a big deal as this example is small but it's a good practice if this gulpfile is to grow.


## Other

The example images were gotten via Creative Commons image search.