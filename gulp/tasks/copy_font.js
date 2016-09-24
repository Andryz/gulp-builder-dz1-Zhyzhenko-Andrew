'use strict';

module.exports = function() {
  $.gulp.task('copy_font', function() {
     return $.gulp.src('./source/fonts/**/*.*')
  		.pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
