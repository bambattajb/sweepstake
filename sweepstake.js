let Sweepstake = function() {
    let $this = this;

    // Setup data
    $this.participants = new Array;
    $this.contender1 = "Anthony Joshua";
    $this.contender2 = "Alexander Povetkin";
    $this.winBecause = [
      "Win by knockout on or before 6th round",
      "Win by knockout after 6th round",
      "Win by stoppage on or before 6th round",
      "Win by stoppage after 6th round",
      "Win on points",
      "Win due to disqualification"
    ];
    $this.winOptions = new Array;

    $this.setWinOptions = function() {
      let options = new Array;

      for(let i=0; i<$this.winBecause.length; i++) {
        options.push('<b>' + $this.contender1 + '</b>' + ' ' + $this.winBecause[i]);
        options.push('<b>' + $this.contender2 + '</b>' + ' ' + $this.winBecause[i]);
      }
      $this.winOptions = options;

      return false;
    }

    $this.addParticipant = function(name) {
        $this.participants.push(name);
        return $this.participants;
    }

    $this.generateResults = function() {
        $this.setWinOptions();

        let container   = $this.containerOutput,
            winOptionsCount = $this.winOptions.length,
            winOptions  = $this.shuffle($this.winOptions),
            participantCount = $this.participants.length,
            participants = $this.participants,
            results = new Array;

       let optionsPerParticipant = winOptionsCount / participantCount;
       let index = 0;

       participants.forEach(function(Participant) {
         results[Participant] = new Array
         for(let i=0; i<optionsPerParticipant;i++) {
           results[Participant].push(winOptions[index]);
           index++;
         }
       });
      return results;
    };

    $this.shuffle = function(array) {
      var i = array.length,
          j = 0,
          temp;

      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          // swap randomly chosen element with current element
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }

      return array;
    }
};
