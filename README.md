<a href="javascript:(function(){var msg=null;var getMessage=function(){var e=$('.skill-tree-row').not('.bonus-row').find('.skill-badge-small');if(!e.length){throw new Error('No skill badges found. Are you sure you are on the skills tree page?')}var t=e.length;var n=0;var r={1:0,2:0,3:0,4:0};var i=0;var s=null;var o=null;var u=null;e.each(function(){s=$(this).find('.lessons-left').text().length;o=$(this).find('.skill-icon-strength').not('.strength-5');u=o.length;if(!s){n+=1}if(u){i+=1;for(var e=1;e<=4;++e){if(o.hasClass('strength-'+e)){r[e]+=1}}}});var a=n/t*100;var f=parseInt(a);var l='';for(var c in r){if(r[c])l+='\n- strength '+c+'/5: '+r[c]+' skills'}var h=null;if(i){h='Skills to strengthen ('+i+'): '+l}else{h='No skills to strengthen'}var p='Skills learned: '+n+'/'+t+' ('+f+'%)\n\n'+h;return p};try{msg=getMessage()}catch(err){msg='An error occurred: '+err.message}alert(msg)})();">Duolingo Tree Progress</a>

1. Drag the link above and drop it onto your browser's bookmarks bar
2. Enter [duolingo.com](http://duolingo.com) and go to the skills tree page (any language)
3. Click on the bookmark - a popup with statistics will show up