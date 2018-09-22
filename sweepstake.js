let Sweepstake = function() {
    let $this = this;

    // Setup HTML
    $this.container = document.getElementById('sweepstake');
    $this.containerParticipants = document.createElement('DIV');
      $this.containerParticipants.setAttribute('id', 'containerParticipants');
    $this.containerOutput = document.createElement('DIV');
      $this.containerOutput.setAttribute('id', 'containerOutput');
    $this.generateBtn = document.createElement('BUTTON');
      $this.generateBtn.setAttribute('id', 'generateBtn');
      $this.generateBtn.textContent = 'Generate output';

    // Setup data
    $this.participants = [];
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
    $this.winOptions = [];

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
        $this.refresh();
    }

    $this.generateOutput = function() {
        $this.setWinOptions();

        let container   = $this.containerOutput,
            winOptionsCount = $this.winOptions.length,
            winOptions  = $this.shuffle($this.winOptions),
            participantCount = $this.participants.length,
            participants = $this.participants,
            output = [];

       console.log('Participants', participants);
       console.log('Participant count', participantCount);
       console.log('Win options', winOptions);
       console.log('Win option count', winOptionsCount);

       let optionsPerParticipant = winOptionsCount / participantCount;

       let index = 0,
           outputHtml = '<h2>Sweepstake Results</h2>';

       participants.forEach(function(Participant) {
         outputHtml += '<p><b>' + Participant + '</b></p>';
         outputHtml += '<ul>';
         for(let i=0; i<optionsPerParticipant;i++) {
           output.push({
             Participant,
             'winOption' : winOptions[index]
           })
           outputHtml += '<li>' + winOptions[index] + '</li>';

           index++;
         }
         outputHtml += '</ul>';
       });

      $this.containerOutput.innerHTML = outputHtml;

      return output;
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

    $this.refresh = function() {
        // Refresh participants div
        // And clear the generated output
        let participants = '<h2>Participants</h2>';
          participants += '<ul>';
        for(let i = 0; i<$this.participants.length; i++) {
          participants += '<li>' + $this.participants[i] + '</li>';
        }
        participants += '</ul>';
        $this.containerParticipants.innerHTML = participants;
        $this.containerOutput.innerHTML = '';
    }

    $this.__construct = function() {
      $this.container.appendChild($this.containerParticipants);
      $this.container.appendChild($this.containerOutput);
      $this.container.appendChild($this.generateBtn);
      $this.generateBtn.addEventListener('click', $this.generateOutput);
    }

    $this.__construct();
};

let addParticipantLabel = document.createElement('LABEL');
  addParticipantLabel.setAttribute('for', 'addParticipantInput');
  addParticipantLabel.textContent = 'Add Participant';

let addParticipantInput = document.createElement('INPUT');
  addParticipantInput.setAttribute('type', 'text');
  addParticipantInput.setAttribute('id', 'addParticipantInput');

let addParticipantBtn = document.createElement('BUTTON');
  addParticipantBtn.setAttribute('id', 'addParticipantBtn');
  addParticipantBtn.textContent = 'Submit';

let sweepstake = new Sweepstake();
sweepstake.container.appendChild(addParticipantLabel);
sweepstake.container.appendChild(addParticipantInput);
sweepstake.container.appendChild(addParticipantBtn);

addParticipantBtn.addEventListener('click', function(ev) {
    let participantName = addParticipantInput.value;
    addParticipantInput.value = '';
    sweepstake.addParticipant(participantName);
});
