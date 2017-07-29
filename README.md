## safe-dye

## What is this?
A small Javascript package that helps identify if two colors are distinguishable to individuals with different kinds of color blindness.

## How this works
Given two Hex RGB codes, we can create two simulated RGB codes. These would be the colors seen by a color blind person, depending on color blindness type. Using [DeltaE2000](http://zschuessler.github.io/DeltaE/learn/) algorithm, we determine if the simulated colors are distingushable. If two simulated colors are not distinguishable, we say that the original colors are not distingushable to the color blind.

## Installation & Usage

#### Install with npm

```
npm install safe-dye
```

#### Useage

After requiring, use any of the available validation functions on a set of 2 colors in HEX, i.e `#00A55A`.
The function will return `true` if the colors are distinguishable or `false` otherwise.

```
const SafeDye = require('safe-dye');

// Will return true if color1 and color2 are distinguishable for red-green type color blindness (Protanopia)
SafeDye.validateRedGreen(color1, color2);

// Will return true if color1 and color2 are distinguishable for blue-yellow type color blindness (Tritanopia)
SafeDye.validateBlueYellow(color1, color2);

// Will return true if both validateRedGreen and validateBlueYellow return true
SafeDye.validate(color1, color2);

// Will return true if color1 and color2 are distinguishable for normal color vision
SafeDye.validateNormal(color1, color2);
```

## Why I made this

As a frontend developer, I sometimes find myself working on interfaces that allow users to customize color related options. As a simple example, consider choosing the color of text over a different background color for a blog post. While there are various tools out there to simulate color blind vision, we cannot expect our end users to use them when writing a colorful blog post :)
With this library, we can provide users with feedback and let them know that certain color combinations can be problematic for some audiences.

## Attributions
This library uses [color-blind](https://github.com/skratchdot/color-blind) and [DeltaE](https://github.com/zschuessler/DeltaE), which makes this package very simple. Both do a great job in educating about color blindness and visual perceptions of colors - super cool and worth checking out :)

## References

1. [About the DeltaE algorithm](http://zschuessler.github.io/DeltaE/learn/)
2. [Color Palettes For Color Blindness](http://mkweb.bcgsc.ca/colorblind/)
3. More about color blindness
