var msg = null;
var getMessage = function() {
  var $items = $('.skill-tree-row').not('.bonus-row').find('.skill-badge-small');

  if (!$items.length) {
    throw new Error('No skill badges found. Are you sure you are on the skills tree page?');
  }

  var allSkillsCount = $items.length;
  var finishedSkillsCount = 0;
  var skillsToStrengthenCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };
  var skillsToStrengthenTotalCount = 0;
  var hasLessonsLeft = null;
  var $strengthElem = null;
  var canBeStrengthen = null;

  $items.each(function() {
    hasLessonsLeft = $(this).find('.lessons-left').text().length;

    $strengthElem = $(this).find('.skill-icon-strength').not('.strength-5');
    canBeStrengthen = $strengthElem.length;

    if (!hasLessonsLeft) {
      finishedSkillsCount += 1;
    }

    if (canBeStrengthen) {
      skillsToStrengthenTotalCount += 1;

      for (var i = 1; i <= 4; ++i) {
        if ($strengthElem.hasClass('strength-' + i)) {
          skillsToStrengthenCount[i] += 1;
        }
      }
    }
  });

  var progress = finishedSkillsCount / allSkillsCount * 100;
  var formattedProgress = parseInt(progress);
  var strDetailsText = '';

  for (var key in skillsToStrengthenCount) {
    if (skillsToStrengthenCount[key]) strDetailsText += ('\n- strength ' + key + '/5: ' + skillsToStrengthenCount[key] + ' skills');
  }

  var strText = null;

  if (skillsToStrengthenTotalCount) {
   strText = 'Skills to strengthen (' + skillsToStrengthenTotalCount + '): ' + strDetailsText;
  } else {
   strText = 'No skills to strengthen';
  }

  var result = 'Skills learned: ' + finishedSkillsCount + '/' + allSkillsCount + ' (' + formattedProgress + '%)\n\n' + strText;

  return result;
};

try {
  msg = getMessage();
} catch(err) {
  msg = 'An error occurred: ' + err.message;
}

alert(msg);