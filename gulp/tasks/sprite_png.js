'use strict';

module.exports = function() {
  $.gulp.task('sprite_png', function () {
  var spriteData = $.gulp.src('./source/sprite_images/*.png').pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe($.gulp.dest($.config.root + '/assets/sprite_png'));
    });
};