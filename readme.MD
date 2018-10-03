# Simple sweepstake script

### I created a small script so that me and my friends could do a sweepstake for the Joshua v Povetkin fight

## Change Contenders
````
let sweepstake = new Sweepstake();

...
// Change Contender
sweepstake.contender1 = "Oleksandr Usyk";
sweepstake.contender2 = "Tony Bellew";

````

## Change Win Options
````
let sweepstake = new Sweepstake();

...

sweepstake.winBecause = [
  "Win by knockout in first round",
  "Win by knockout in second rount",
  "Win by points"
];
````

## TODO
- Style ?
