<template>
  <div>
    <hr>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments',
      appId: 'MWFjOj2N1NfPTkzljwjL1XRa-gzGzoHsz',
      appKey: 'KEHmUPGGqftbbiwXQCWJIXIL',
      notify:false,
      verify:false,
      avatar:'mm',
      placeholder: '总想对你表白...\r\n让我想想怎么喷...',
      visitor: true,
    });
  },
}
</script>