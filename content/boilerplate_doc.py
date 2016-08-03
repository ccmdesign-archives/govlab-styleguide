boilerplate ZIP
================

.gitignore
# hopefully we will have public in ignore list

package.json
# npm package for styleguide files | styleguide.css, styleguide.js, styleguide_images/

gulpfile.js
# 1. task to pull both styleguide.css and styleguide.js 
#    from node_modules and copy them to `source/` and/or `public/`

# 2. deploy task will create a `deploy/` folder, push to gh-pages branch and delete 'deploy/' folder
#    this way we will not have auto-generated files committed in the master branch
#    maybe even an optional argument to the deploy, to change the remote name 
#    - gulp deploy = push subtree origin gh-page
#    - gulp deploy upstream = push subtree upstream gh-page

source/
  static/
    images/       # site specific images
    js/           # site specific js
  templates/
    _base.html    # boilerplate base. Base setup for a styleguide enabled site. Can be tweaked for each project.
    index.html    # index example. Will be tweaked for the project needs
  sass/           # site specific styles. Specific components, tweaks or new reusable components are added here.
    styles.scss
    _custom.scss